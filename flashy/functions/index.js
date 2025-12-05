/**
 * Firebase Cloud Functions skeleton
 * - markSaleClosed: callable function calculates commission and writes sale & payout records
 * - stripeWebhook: placeholder for Stripe events
 *
 * You must set functions config:
 * firebase functions:config:set stripe.secret="sk_test_xxx" stripe.webhook="whsec_xxx"
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
const stripe = require('stripe')(functions.config().stripe ? functions.config().stripe.secret : process.env.STRIPE_SECRET_KEY);

exports.markSaleClosed = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError('unauthenticated', 'You must be signed in');

  const { leadId, salePrice } = data;
  if (!leadId || !salePrice) throw new functions.https.HttpsError('invalid-argument','Missing params');

  // get lead
  const leadSnap = await db.collection('leads').doc(leadId).get();
  if (!leadSnap.exists) throw new functions.https.HttpsError('not-found','Lead not found');
  const lead = leadSnap.data();

  // simple tier calc based on connector sales (example)
  const connectorId = lead.connectorId;
  const salesSnap = await db.collection('sales').where('connectorId','==',connectorId).get();
  const soldCount = salesSnap.size;
  let percent = 0.03;
  if (soldCount >= 5) percent = 0.045;
  if (soldCount >= 10) percent = 0.06;

  const commission = Math.round(salePrice * percent);

  // create sale
  const saleRef = await db.collection('sales').add({
    leadId, connectorId, carId: lead.carId, salePrice, commission, payoutStatus: 'pending', createdAt: admin.firestore.FieldValue.serverTimestamp()
  });

  // create payout record
  await db.collection('payouts').add({
    connectorId, saleId: saleRef.id, amount: commission, status: 'pending', createdAt: admin.firestore.FieldValue.serverTimestamp()
  });

  // update lead
  await db.collection('leads').doc(leadId).update({ status: 'closed' });

  return { saleId: saleRef.id, commission };
});

exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = functions.config().stripe ? functions.config().stripe.webhook : process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // handle events
  if (event.type === 'transfer.created') {
    // handle transfer event
  }

  res.json({ received: true });
});
