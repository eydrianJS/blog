import React from 'react'
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

const BlogEntry = ({ item, id }: { item: any; id: string }) => {
  const classes = useStyle()
  const { imageSrc, setComments, handlerToggleComments, comments, openComments } = useBlogEntryInitial({ item, id })

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
              <Comments item={comment} setComments={setComments} comments={comments} key={comment.id} />
            ))}
            <AddComment postID={id} setComments={setComments} />
          </div>
        ) : null}
      </Grid>
    </Paper>
  )
}

export default BlogEntry
