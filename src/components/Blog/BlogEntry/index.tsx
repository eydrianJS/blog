import React, { useState, useCallback } from 'react'
import { Paper, Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Typography, IconButton } from '@material-ui/core'
import useStyle from './style'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MessageIcon from '@material-ui/icons/Message'
import { Link } from 'react-router-dom'
import Comments from '../Comments'
import AddComment from '../AddComment'
import useBlogEntryInitial from './effects/useBlogEntryInitial'
import { updatePostLikes } from '../../../firebase'

interface Post {
  id: string
  category: string
  content: string
  date: string
  image: string
  like: number
  subTitle: string
  title: string
}

const BlogEntry = ({ setPosts, posts, post }: { setPosts: (posts: Post[]) => void; posts: Post[]; post: Post }) => {
  const classes = useStyle()
  const { imageSrc, setComments, handlerToggleComments, comments, openComments } = useBlogEntryInitial({ item: post })
  const [like, setLike] = useState(localStorage.getItem(`${post.id}post`) === 'TAK')
  const likeClass = like ? classes.iconClicked : classes.icon

  const handleSetLike = useCallback(() => {
    setLike(!like)
    let newPosts = [...posts]
    newPosts.map((currentPost) => {
      if (currentPost.id === post.id) {
        currentPost.like = !like ? currentPost.like + 1 : currentPost.like - 1
        localStorage.setItem(`${currentPost.id}post`, !like ? 'TAK' : 'NIE')
        if (currentPost.like < 0) currentPost.like = 0
        updatePostLikes(currentPost.id, currentPost.like)
      }
      return currentPost
    })
    setPosts(newPosts)
  }, [post.id, like, posts, setPosts])

  return (
    <Paper className={classes.paper}>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
          <Typography variant="h4" className={classes.title}>
            {post.title}
          </Typography>
          <div className={classes.date}>
            {new Date(parseInt(post.date)).toDateString()} | {post.category}
          </div>
        </Grid>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.content}>
          <div id="container">
            <img src={imageSrc} alt="placeholder" className={classes.image} />
            <Typography variant="h6">{post.subTitle}</Typography>
          </div>
        </Grid>
        <Grid container direction="row" justify="space-between" alignItems="flex-start">
          <div>
            <IconButton className={likeClass} onClick={handleSetLike}>
              <FavoriteIcon />
              &nbsp; {post.like}
            </IconButton>
            <IconButton className={classes.icon} onClick={handlerToggleComments}>
              <MessageIcon />
              &nbsp; {comments.length}
            </IconButton>
          </div>
          <Button className={classes.button} component={Link} to={`/post/${post.id}`}>
            Czytaj dalej...
          </Button>
        </Grid>
        {openComments ? (
          <div style={{ width: '100%' }}>
            {comments.map((comment) => (
              <Comments item={comment} setComments={setComments} comments={comments} key={comment.id} />
            ))}
            <AddComment postID={post.id} setComments={setComments} />
          </div>
        ) : null}
      </Grid>
    </Paper>
  )
}

export default BlogEntry
