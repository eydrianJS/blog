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
import Parser from 'html-react-parser'
import './styles.css'

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
const initialMap = new Map()
const initialMapPlace = initialMap.set('./placeholder.jpg', './placeholder.jpg')

const PostBlog = ({ id }: PostBlogParams) => {
  const classes = useStyle()
  const [post, setPost] = useState<firebase.firestore.DocumentData>()
  const [imageSrc, setImageSrc] = useState(image)
  const [comments, setComments] = useState<Comment[]>([])
  const [content, setContent] = useState<{ content: string; image: string; name: string }[]>([])
  const [images, setImages] = useState<Map<string, string>>(initialMapPlace)

  useEffect(() => {
    getPost(id).then((data) => {
      if (data) {
        const currentData = data.data()
        setPost(currentData)
      }
    })
  }, [])

  useEffect(() => {
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
  }, [post])

  useEffect(() => {
    if (post) {
      const newState = [...content]
      post.posts.forEach((post: any) => {
        post.get().then((currentPost: any) => {
          let dataPost = currentPost.data()
          dataPost = { ...dataPost, name: dataPost.image }
          newState.push(dataPost)
          if (dataPost.image) {
            getImage(dataPost.image).then((data) => {
              const a = new Map(images.set(dataPost.image, data))
              setImages(a)
            })
          }
        })
      })
      setContent(newState)
      getImage(post.image).then((data) => {
        setImageSrc(data)
      })
    }
  }, [post])

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
          {content.map((item: { content: string; image: string; name: string }) => {
            return (
              <>
                {Parser(item.content)}
                {images.get(item.name) ? (
                  <img src={images.get(item.name)} alt="placeholder" className={classes.postImage} />
                ) : null}
              </>
            )
          })}
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
