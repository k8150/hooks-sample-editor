import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

// プロジェクト設定のFirebase SDK snippetから貼り付けます。
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID
};

firebase.initializeApp(firebaseConfig);

export { firebase };

interface FirebaseContext {
    userId: string | null;
    userName: string;
}

export const FirebaseContext = React.createContext<FirebaseContext>({
    userId: null,
    userName: ''
});
