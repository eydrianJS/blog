import React from 'react'
import { Grid, Typography, IconButton } from '@material-ui/core'
import useStyle from '../BlogEntry/style'
import FavoriteIcon from '@material-ui/icons/Favorite'

interface CommentsParams {
  item: Comment
}

interface Comment {
  id: string
  content: string
  time: string
  author: string
}

const Comments = ({ item }: CommentsParams) => {
  const classes = useStyle()
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
            <IconButton className={classes.icon} style={{ float: 'right' }}>
              <FavoriteIcon />
              13
              {/* &nbsp; {item.like} */}
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Comments
