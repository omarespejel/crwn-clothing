import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyAhkHJoWPvGViaLufFnrCAxjBCrbxJIRfY",
  authDomain: "crwn-db-49522.firebaseapp.com",
  databaseURL: "https://crwn-db-49522.firebaseio.com",
  projectId: "crwn-db-49522",
  storageBucket: "crwn-db-49522.appspot.com",
  messagingSenderId: "133668258853",
  appId: "1:133668258853:web:03485dab08273d809d2bcc",
  measurementId: "G-2R3CM5QVWV"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase