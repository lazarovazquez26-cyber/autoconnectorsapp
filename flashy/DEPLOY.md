# Deploying AutoConnectorsApp (step-by-step for iPad users)

1. Upload the project folder to GitHub:
   - On your iPad, open GitHub.com and create a new repository (e.g., autoconnectorsapp).
   - Use 'Add file' → 'Upload files' → upload the contents of this folder (you can upload the zip and extract on desktop if easier).

2. On Vercel:
   - Visit https://vercel.com/new and import your GitHub repo.
   - During setup, add environment variables from `.env.local.example`.
   - Deploy.

3. Firebase functions:
   - Install Firebase CLI on a computer and run `firebase deploy --only functions` (or deploy via Firebase console).

If you need a walkthrough for any step, I will provide the exact taps and copy-paste text for iPad.
