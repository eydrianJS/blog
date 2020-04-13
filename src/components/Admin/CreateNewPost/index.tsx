import React, { useEffect, useState, useContext } from 'react'
import { Paper, Button, TextField, Grid } from '@material-ui/core'
import { useFormik } from 'formik'
import useStyles from './styles'
import { addNewPost, getPosts } from '../../../firebase'
import { AppContextInterface } from '../../../interfaces/AuthInterfaces'
import { AuthContext } from '../../../providers/AuthProvider'
import { Link } from 'react-router-dom'

interface Post {
  id: string
  category: string
  content: string
  date: string
  image: string
  posts: string[]
  like: number
  subTitle: string
  title: string
}

const CreateNewPost = () => {
  const classes = useStyles()
  const [posts, setPosts] = useState<Post[]>([])
  const { currentUser } = useContext<AppContextInterface>(AuthContext)

  const formik = useFormik({
    initialValues: {
      category: '',
      image: '',
      subTitle: '',
      title: ''
    },
    onSubmit: ({ category, image, subTitle, title }, { resetForm }) => {
      if (category != '' && image != '' && subTitle != '' && title != '') {
        resetForm()
        addNewPost({ category, image, subTitle, title })
      }
    }
  })

  useEffect(() => {
    getPosts().then((data) => {
      if (data) {
        const posts = data.docs.map((item) => {
          const currentPost = item.data()
          return {
            public: currentPost.public,
            id: item.id,
            category: currentPost.category,
            content: currentPost.content,
            date: currentPost.date.seconds + '000',
            image: currentPost.image,
            posts: currentPost.posts,
            like: currentPost.like,
            subTitle: currentPost.subTitle,
            title: currentPost.title
          }
        })
        console.log(posts)
        setPosts(posts.filter((currentPost) => currentUser && !currentPost.public))
      }
    })
  }, [])

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            id="category"
            name="category"
            type="text"
            label="Kategoria"
            variant="outlined"
            value={formik.values.category}
            onChange={formik.handleChange}
            autoComplete="off"
            className={classes.element}
          />
          <TextField
            id="title"
            name="title"
            type="text"
            label="Tytuł"
            variant="outlined"
            value={formik.values.title}
            onChange={formik.handleChange}
            autoComplete="off"
            className={classes.element}
          />
          <TextField
            id="subTitle"
            name="subTitle"
            type="text"
            label="Opis"
            variant="outlined"
            value={formik.values.subTitle}
            onChange={formik.handleChange}
            multiline
            rows="4"
            autoComplete="off"
            className={classes.element}
          />
          <TextField
            id="image"
            name="image"
            type="text"
            label="Zdjecie"
            variant="outlined"
            value={formik.values.image}
            onChange={formik.handleChange}
            autoComplete="off"
            className={classes.element}
          />
          <Button type="submit" fullWidth={true} variant="contained" color="primary" className={classes.button}>
            Dodaj nowy post
          </Button>
        </form>

        {posts.map((post: Post) => (
          <Paper className={classes.paperPost}>
            <Grid
              container={true}
              direction="column"
              justify="center"
              alignItems="flex-start"
              component={Link}
              to={`/newPostAdminSecure/newContent/${post.id}`}>
              <div>tytul: {post.title}</div>
              <div>id: {post.id}</div>
            </Grid>
          </Paper>
        ))}
      </Paper>
    </main>
  )
}

export default CreateNewPost
