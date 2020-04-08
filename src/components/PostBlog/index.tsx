import React, { useEffect, useState } from 'react'
import image from './placeholder.jpg'
import Grid from '@material-ui/core/Grid'
import useStyle from './style'
import { Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { getPost, getImage, getComments } from '../../firebase'
import moment from 'moment'
import Comments from '../Blog/Comments'
import AddComment from '../Blog/AddComment'

interface PostBlogParams {
  id: string
}

interface Comment {
  id: string
  content: string
  time: string
  author: string
  likes: number
  milisecond: number
}

const PostBlog = ({ id }: PostBlogParams) => {
  const classes = useStyle()
  const [post, setPost] = useState<firebase.firestore.DocumentData>()
  const [imageSrc, setImageSrc] = useState(image)
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    getPost(id).then((data) => {
      if (data) {
        const currentData = data.data()
        setPost(currentData)
        if (currentData) {
          getImage(currentData.image).then((data) => {
            setImageSrc(data)
          })
        }
        getComments(id).then((data) => {
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
                likes: doc.likes,
                milisecond: doc.time.seconds
              })
            })
            currentComments.sort((a, b) => b.milisecond - a.milisecond)
            setComments(currentComments)
          }
        })
      }
    })
  }, [id])

  return post ? (
    <Paper className={classes.paper}>
      <Grid container direction="row" justify="space-around" alignItems="center">
        <img src={imageSrc} className={classes.image} alt="newsletter" />
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
          <Typography variant="h4" className={classes.title}>
            {post.title}
          </Typography>
          <div className={classes.date}>
            {new Date(parseInt(`${post.date.seconds}000`)).toDateString()} | {post.category}
          </div>
        </Grid>
        <Typography variant="h6" className={classes.text}>
          {post.content}
        </Typography>
        <div className={classes.author}>
          {new Date(parseInt(`${post.date.seconds}000`)).toDateString()} | Adrian Olszowski
        </div>
        {comments.map((comment) => (
          <Comments item={comment} setComments={setComments} comments={comments} key={comment.id} />
        ))}
        <AddComment postID={id} setComments={setComments} />
      </Grid>
    </Paper>
  ) : null
}

export default PostBlog
