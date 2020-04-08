import React, { useEffect, useState, useCallback } from 'react'
import { Paper, Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Typography, IconButton } from '@material-ui/core'
import useStyle from './style'
import placeholder from './placeholder.jpg'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MessageIcon from '@material-ui/icons/Message'
import { Link } from 'react-router-dom'
import { getImage, getComments } from '../../../firebase'
import Comments from '../Comments'
import moment from 'moment'
import AddComment from '../AddComment'

interface Comment {
  id: string
  content: string
  time: string
  author: string
}

const BlogEntry = ({ item, id }: { item: any; id: string }) => {
  const classes = useStyle()
  const [imageSrc, setImageSrc] = useState(placeholder)
  const [comments, setComments] = useState<Comment[]>([])
  const [openComments, setOpenComments] = useState(false)
  const handlerToggleComments = useCallback(() => {
    setOpenComments(!openComments)
  }, [openComments])

  useEffect(() => {
    if (item) {
      getImage(item.image).then((data) => {
        setImageSrc(data)
      })
      getComments(id).then((data) => {
        if (data) {
          const currentComments: Comment[] = []
          data.docs.forEach((comment: firebase.firestore.DocumentData) => {
            const doc = comment.data()
            const time = moment(parseInt(`${doc.time.seconds}000`))
            const mom = moment().add(-30, 'days')
            let endTime = time.format('ddd MMM DD YYYY')
            if (!time.isBefore(mom)) {
              endTime = time.startOf('hour').fromNow()
            }
            console.log(time)
            currentComments.push({
              id: comment.id,
              author: doc.author,
              content: doc.content,
              time: endTime
            })
          })
          setComments(currentComments)
        }
      })
    }
  }, [id, item])

  return (
    <Paper className={classes.paper}>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
          <Typography variant="h4" className={classes.title}>
            {item.title}
          </Typography>
          <div className={classes.date}>
            {new Date(parseInt(`${item.date.seconds}000`)).toDateString()} | {item.category}
          </div>
        </Grid>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.content}>
          <div id="container">
            <img src={imageSrc} alt="placeholder" className={classes.image} />
            <Typography variant="h6">{item.subTitle}</Typography>
          </div>
        </Grid>
        <Grid container direction="row" justify="space-between" alignItems="flex-start">
          <div>
            <IconButton className={classes.icon}>
              <FavoriteIcon />
              &nbsp; {item.like}
            </IconButton>
            <IconButton className={classes.icon} onClick={handlerToggleComments}>
              <MessageIcon />
              &nbsp; {comments.length}
            </IconButton>
          </div>
          <Button className={classes.button} component={Link} to={`/post/${id}`}>
            Czytaj dalej...
          </Button>
        </Grid>
        {openComments ? (
          <div style={{ width: '100%' }}>
            {comments.map((comment) => (
              <Comments item={comment} />
            ))}
            <AddComment />
          </div>
        ) : null}
      </Grid>
    </Paper>
  )
}

export default BlogEntry
