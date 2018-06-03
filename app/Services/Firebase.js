import * as firebase from 'firebase'
import config from '../Config/FirebaseConfig'

firebase.initializeApp(config)

function signUpWithEmailAndPassword (payload) {
  return firebase.auth()
    .createUserWithEmailAndPassword(payload.email, payload.password)
}

function writeUserData({ uid, username, email, imageUrl }) {
  return firebase.database().ref(`users/${uid}`).set({
    username: username,
    email: email,
    profile_picture : imageUrl
  })
}

export default {
  signUpWithEmailAndPassword,
  writeUserData
}