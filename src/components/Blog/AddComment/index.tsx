import React from 'react'
import { TextField } from '@material-ui/core'
import { Paper, Grid, Button } from '@material-ui/core'
import useStyle from '../BlogEntry/style'
import { addComentsToDB, getComments } from '../../../firebase'
import { useFormik } from 'formik'
import moment from 'moment'

interface AddCommentParams {
  postID: string
  setComments: (id: Comment[]) => void
}

interface Comment {
  id: string
  content: string
  time: string
  author: string
  likes: number
  milisecond: number
}

const AddComment = ({ postID, setComments }: AddCommentParams) => {
  const classes = useStyle()

  const formik = useFormik({
    initialValues: {
      nick: '',
      content: ''
    },
    onSubmit: (value) => {
      addComentsToDB({
        author: value.nick,
        content: value.content,
        post: postID,
        likes: 0
      }).then(function (docRef) {
        if (docRef) {
          getComments(postID).then((data) => {
            if (data) {
              const currentComments: Comment[] = []
              data.docs.forEach((comment: firebase.firestore.DocumentData) => {
                const doc = comment.data()
                const time = moment(parseInt(`${doc.time.seconds}000`))

                const mom = moment().add(-30, 'days')
                let endTime = time.format('ddd MMM DD YYYY')
                if (!time.isBefore(mom)) {
                  endTime = time.startOf('minutes').fromNow()
                }
                currentComments.push({
                  id: comment.id,
                  author: doc.author,
                  content: doc.content,
                  time: endTime,
                  likes: 0,
                  milisecond: doc.time.seconds
                })
              })
              currentComments.sort((a, b) => b.milisecond - a.milisecond)
              setComments(currentComments)
            }
          })
        }
      })
      formik.values.nick = ''
      formik.values.content = ''
    }
  })

  return (
    <Paper className={classes.addComment}>
      <form onSubmit={formik.handleSubmit} className={classes.buttons}>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
          <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.buttons}>
            <TextField
              id="nick"
              name="nick"
              type="text"
              label="Nick"
              variant="outlined"
              value={formik.values.nick}
              onChange={formik.handleChange}
              className={classes.nick}
              autoComplete="off"
            />
            <TextField
              id="content"
              name="content"
              label="Komentarz"
              value={formik.values.content}
              multiline
              rows="4"
              onChange={formik.handleChange}
              variant="outlined"
              className={classes.email}
            />
            <Grid container direction="row" justify="flex-end" alignItems="flex-end" className={classes.buttons}>
              <Button type="submit" id="save" variant="contained" className={classes.save}>
                Dodaj
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default AddComment
