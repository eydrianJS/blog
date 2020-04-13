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
    const post = await db.collection('posts').doc(id).get()

    return post
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

export const setPost = async () => {
  try {
    return await db.collection('contentPosts').add({
      content:
        'Do <strong>deklarowania zmiennych</strong> w JavaScripcie przed pojawieniem się wersji ECMAScript2015 służyło słow <em>var</em>. Po pojawieniu się nowszej wersji javascriptu monopol na deklaracje przejęły słowa <em>let</em> oraz <em>const</em>, ale o tym w następnym blogu. Pewnie zastanawiasz się dlaczego <strong>deklaracja</strong> jest pogrubioną czcionką? Dwa podstawowe słowa związane ze zmiennymi to słowo <strong>deklaracja</strong> oraz <strong>inicjalizacja</strong>. Zanotuj. Już tłumaczę Ci różnicę między tymi pojęciami, deklaracją zmiennej jest nadanie nazwy dla naszego „pudelka”. Dla uproszczenia posłuże się wcześniej przytoczonym przykładem. Uznajmy że lodówka jest naszą aplikacją, teraz chcemy włożyć nasze pudełko do lodówki. Od teraz nasze pudełko(zmienna) znajduje się w naszej aplikacji(lodowka) i to jest właśnie declaracja. Jak to wygląda w kodzie?<div className="kod-js"><div className="highlight"><pre className="highlight"><code>moj kod</code></pre></div>div>'
    })
  } catch (error) {
    alert(error.message)
  }
  return null
}
// setPost()

export const getComments = async (id: string) => {
  try {
    return await db.collection('comments').where('postID', '==', id).get()
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

export const addEmail = async (email: string) => {
  const now = new Date()
  try {
    return await db.collection('email').add({
      adres_email: email
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

export const logout = async () => {
  await app.auth().signOut()
}

export const singIn = async (email: string, password: string) => {
  try {
    const result = await app.auth().signInWithEmailAndPassword(email, password)
    if (!result.user) {
      return { error: true, message: 'Nie udało się zalogować' }
    }
    return result
  } catch (error) {
    return error.message
  }
}

export const updatePostLikes = async (id: string, like: number) => {
  try {
    return await db.collection('posts').doc(id).update({
      like: like
    })
  } catch (error) {
    return null
  }
}

export default app
