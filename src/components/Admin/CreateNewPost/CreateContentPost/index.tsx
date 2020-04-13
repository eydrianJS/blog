import React, { useEffect, useState, useContext } from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'
import { Paper, Button, TextField, Grid } from '@material-ui/core'
import { useFormik } from 'formik'
import useStyles from './styles'
import { setPost, getPost } from '../../../../firebase'
interface ProductPageParams extends RouteComponentProps<{ id: string }> {}

const Createcontentpost = ({ match }: ProductPageParams) => {
  const classes = useStyles()
  const [content, setContent] = useState<any[]>([])

  const formik = useFormik({
    initialValues: {
      content: '',
      image: ''
    },
    onSubmit: ({ content, image }, { resetForm }) => {
      if (content != '') {
        setPost(content, image, match.params.id)
        resetForm()
      }
    }
  })

  useEffect(() => {
    getPost(match.params.id).then((data) => {
      if (data) {
        const currentPost = data.data()?.posts
        console.log(currentPost)
        const last = currentPost.length
        const arr: any = []
        currentPost.forEach((element: any, idx: number) => {
          element.get().then((data: any) => {
            const wpis = { ...data.data(), id: data.id }
            arr.push(wpis)
            console.log('aa')
            if (arr.length == last) {
              setContent(arr)
            }
          })
        })
      }
    })
  }, [])

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            id="content"
            name="content"
            type="text"
            label="Content"
            variant="outlined"
            value={formik.values.content}
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
            Dodaj nowy content do posta
          </Button>
        </form>
        {content.map((post: any) => (
          <Paper className={classes.paperPost}>
            <Grid
              container={true}
              direction="column"
              justify="center"
              alignItems="flex-start"
              component={Link}
              to={`/newPostAdminSecure/updateContent/${post.id}`}>
              <div>content: {post.content}</div>
              <div>image: {post.image}</div>
            </Grid>
          </Paper>
        ))}
      </Paper>
    </main>
  )
}

export default Createcontentpost
