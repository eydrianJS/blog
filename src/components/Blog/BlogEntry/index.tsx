import React from 'react'
import { Paper, Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Typography, IconButton } from '@material-ui/core'
import useStyle from './style'
import placeholder from './placeholder.jpg'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'

const BlogEntry = ({ item }: { item: any }) => {
  const classes = useStyle()
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
            <img src={placeholder} alt="placeholder" className={classes.image} />
            <Typography variant="h6">{item.subTitle}</Typography>
          </div>
        </Grid>
        <Grid container direction="row" justify="space-between" alignItems="flex-start">
          <div>
            <IconButton className={classes.icon}>
              <FavoriteIcon />
              &nbsp; {item.like}
            </IconButton>
            <IconButton className={classes.icon}>
              <ThumbDownIcon />
              &nbsp; {item.unlike}
            </IconButton>
          </div>
          <Button className={classes.button}>Czytaj dalej...</Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default BlogEntry
