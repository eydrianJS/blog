import React, { useEffect, useState, useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Paper, Button, TextField, Grid } from '@material-ui/core'
import { useFormik } from 'formik'
import useStyles from './styles'
import { updatePost, getContentPost } from '../../../../firebase'
interface ProductPageParams extends RouteComponentProps<{ id: string }> {}

const UpdateContentPost = ({ match }: ProductPageParams) => {
  const classes = useStyles()
  const [content, setContent] = useState<any>({
    content: '',
    image: ''
  })

  useEffect(() => {
    getContentPost(match.params.id).then((data: any) => {
      setContent(data.data())
    })
  })

  const formik = useFormik({
    initialValues: {
      content: '',
      image: ''
    },
    onSubmit: ({ content, image }, { resetForm }) => {
      if (content != '') {
        updatePost(match.params.id, content, image)
        resetForm()
      }
    }
  })

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Paper className={classes.paperPost}>
          <Grid container={true} direction="column" justify="center" alignItems="flex-start">
            <div>content: {content.content}</div>
            <div>image: {content.image}</div>
          </Grid>
        </Paper>
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
            Update content do posta
          </Button>
        </form>
      </Paper>
    </main>
  )
}

export default UpdateContentPost
