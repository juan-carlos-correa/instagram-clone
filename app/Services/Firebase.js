import * as firebase from 'firebase'
import config from '../Config/FirebaseConfig'

firebase.initializeApp(config)

function signUpWithEmailAndPassword (payload) {
  return firebase.auth()
    .createUserWithEmailAndPassword(payload.email, payload.password)
}

export default {
  signUpWithEmailAndPassword
}