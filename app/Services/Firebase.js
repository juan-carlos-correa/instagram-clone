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

function signInWithEmailAndPassword (payload) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(payload.email, payload.password)
    .catch(error => {
      const { code, message } = error
      return { error: true, code, message}
    })
}

function authState () {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        resolve(user)
      } else {
        reject(false)
      }
    })
  })
}

function signOut () {
  return firebase.auth().signOut()
    .then(() => true)
    .catch(() => false)
}

export default {
  signUpWithEmailAndPassword,
  writeUserData,
  signInWithEmailAndPassword,
  authState,
  signOut
}
