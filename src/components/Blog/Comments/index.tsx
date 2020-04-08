import React, { useCallback, useState } from 'react'
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
  const [like, setLike] = useState(localStorage.getItem(`${item.id}like`) === 'TAK')

  const handleSetLike = useCallback(() => {
    setLike(!like)
    let newComments = [...comments]
    newComments.map((comment) => {
      if (comment.id === item.id) {
        comment.likes = !like ? comment.likes + 1 : comment.likes - 1
        localStorage.setItem(`${item.id}like`, !like ? 'TAK' : 'NIE')
        if (comment.likes < 0) comment.likes = 0
        updateComentLikes(comment.id, comment.likes)
      }
      return comment
    })
    setComments(newComments)
  }, [comments, item.id, setComments])

  const likeClass = like ? classes.iconClicked : classes.icon

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
            <IconButton className={likeClass} style={{ float: 'right' }} onClick={handleSetLike}>
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
