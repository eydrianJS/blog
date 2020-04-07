import React, { useEffect, useState } from 'react'
import image from './placeholder.jpg'
import Grid from '@material-ui/core/Grid'
import useStyle from './style'
import { Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { getPost, getImage } from '../../firebase'

interface PostBlogParams {
  id: string
}

const PostBlog = ({ id }: PostBlogParams) => {
  const classes = useStyle()
  const [post, setPost] = useState<firebase.firestore.DocumentData>()
  const [imageSrc, setImageSrc] = useState(image)

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
      </Grid>
    </Paper>
  ) : null
}

export default PostBlog
