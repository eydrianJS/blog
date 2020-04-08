import React, { useCallback } from 'react'
import { Grid, Typography, IconButton } from '@material-ui/core'
import useStyle from '../BlogEntry/style'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { updateComentLikes } from '../../../firebase'

interface CommentsParams {
  item: Comment
  setComments: (id: Comment[]) => void
  comments: Comment[]
}

interface Comment {
  id: string
  content: string
  time: string
  author: string
  likes: number
  milisecond: number
}

const Comments = ({ item, setComments, comments }: CommentsParams) => {
  const classes = useStyle()

  const handleSetLike = useCallback(() => {
    let newComments = [...comments]
    newComments.map((comment) => {
      if (comment.id === item.id) {
        comment.likes = comment.likes + 1
        updateComentLikes(comment.id, comment.likes)
      }
      return comment
    })
    setComments(newComments)
  }, [comments, item.id, setComments])

  return (
    <>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
          <div className={classes.commentDate}>
            {item.time} | {item.author}
          </div>
        </Grid>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.commentContent}>
          <div id="container">
            <Typography variant="body1">{item.content}</Typography>
          </div>
        </Grid>
        <Grid container direction="row" justify="flex-end" alignItems="flex-start">
          <div>
            <IconButton className={classes.icon} style={{ float: 'right' }} onClick={handleSetLike}>
              <FavoriteIcon />
              &nbsp; {item.likes}
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Comments
