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
    const a = await db.collection('posts').doc(id).get()
    return a
  } catch (error) {
    alert(error.message)
  }
  return null
}

export const getImage = async (refrence: string) => {
  try {
    return storage.ref(`images/${refrence}`).getDownloadURL()
  } catch (error) {
    alert(error.message)
  }
  return null
}

export const getComments = async (id: string) => {
  try {
    return await db.collection('comments').where('postID', '==', 'OHov4E1i4UU6ALn5xhO5').get()
  } catch (error) {
    alert(error.message)
  }
  return null
}

interface Comment {
  content: string
  author: string
  post: string
  likes: number
}

export const addComentsToDB = async (comment: Comment) => {
  const now = new Date()
  try {
    return await db.collection('comments').add({
      postID: comment.post,
      author: comment.author,
      content: comment.content,
      time: now,
      likes: 0
    })
  } catch (error) {
    return null
  }
}

export const updateComentLikes = async (id: string, like: number) => {
  try {
    return await db.collection('comments').doc(id).update({
      likes: like
    })
  } catch (error) {
    return null
  }
}

export const updatePostLikes = async (id: string, like: number) => {
  console.log(id)
  try {
    return await db.collection('posts').doc(id).update({
      like: like
    })
  } catch (error) {
    return null
  }
}

export default app
