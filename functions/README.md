# Firebase backend

`createCase` records the three required confirmations in Firestore and issues the sequential
reference code. It never receives questionnaire answers, symptoms, diagnoses, contact details, or
medical files.

## Deployment

1. Build and deploy the function:

   ```sh
   pnpm --dir functions install --frozen-lockfile
   firebase deploy --only functions:createCase --project dr-vlad-website-production
   ```

2. Keep the Cloud Run service publicly callable by disabling its Invoker IAM check. This is the
   Google-recommended method for projects governed by Domain Restricted Sharing:

   ```sh
   gcloud run services update createcase \
     --project dr-vlad-website-production \
     --region europe-west1 \
     --no-invoker-iam-check
   ```

   Do not add `invoker: "public"` to the Firebase function options: Firebase translates that into
   an `allUsers` IAM binding, which is blocked by this project's organization policy.

3. Verify that a preflight request from an allowed origin returns `204`, and that an invalid JSON
   request reaches application validation and returns `400` rather than `403`.

The Artifact Registry repository in `europe-west1` has a cleanup policy that deletes container
images older than seven days.
