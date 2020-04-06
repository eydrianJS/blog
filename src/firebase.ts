import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

type User = firebase.User | null
type GetUser = () => User

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})
const db = app.firestore()
const storage = firebase.storage()

export const getPosts = async () => {
  try {
    return await db.collection('posts').get()
  } catch (error) {
    alert(error.message)
  }
  return null
}

export const getPost = async (id: string) => {
  try {
    return await db.collection('posts').doc(id).get()
  } catch (error) {
    alert(error.message)
  }
  return null
}

export default app
