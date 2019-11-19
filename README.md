# E-Alert

An emergency alert platform to notify subscribed users of active emergencies via SMS

Uses a React-based frontend alongside Twilio for SMS functionality and Firebase for serverless functions, database and hosting.

## Features

- Simple number registration with server-side validation
- Quick, pre-made "fire" and "lockdown" alert messages
- Custom alert message functionality

**Planned additions**

- SMS validation on number registration
- Email requirement to restrict usage to specific domains
- Refactored UI (project info, better layout)

## Firebase Configuration

Create a Firebase project at [firebase.google.com](https://firebase.google.com/). Be sure to enable Cloud Firestore, hosting and functions.

Globally install the Firebase CLI:

```
npm i -g firebase-tools
```

Ensure you are logged in:

```
firebase login
```

You should now be able to list any active projects using `firebase projects:list`.

In the cloned project directory, add your Firebase project:

```
firebase use --add
```

The name can be anything, such as `production`, `staging` or `develop`. You can add several Firebase projects and switch between them using `firebase use PROJECT_NAME`. For more details, see the [CLI docs](https://firebase.google.com/docs/cli#project_aliases).

Finally, set your project's environment variables for Twilio (SID, token and phone number):

```
firebase functions:config:set twilio.sid="ABC..." twilio.token="ee..." twilio.number="+1813..."
```

## Development Usage

Install dependencies (in both root client directory as well as `functions` subdirectory):

```
npm run install:all
```

Start emulated Firebase instance (hosting, Firestore and functions):

```
npm start
```

Start the React client development server:

```
npm run dev:client
```

In development, the frontend should be accessed through `http://localhost:3000`. API requests will automatically be proxied to Firebase hosting which will call the respective serverless function.

## Deployment

Manually build frontend (optional):

```
npm run build
```

Build frontend and deploy to Firebase:

```
npm run deploy
```
