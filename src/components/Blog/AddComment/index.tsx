import React from 'react'
import { TextField } from '@material-ui/core'
import { Paper, Grid, Button } from '@material-ui/core'
import useStyle from '../BlogEntry/style'

const AddComment = () => {
  const classes = useStyle()
  return (
    <Paper className={classes.addComment}>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.buttons}>
          <TextField
            id="filled-multiline-flexible"
            label="Nick"
            multiline
            variant="outlined"
            className={classes.nick}
          />
          <TextField
            id="filled-multiline-static"
            label="Komentarz"
            multiline
            rows="4"
            variant="outlined"
            className={classes.email}
          />
          <Grid container direction="row" justify="flex-end" alignItems="flex-end" className={classes.buttons}>
            <Button type="submit" id="save" variant="contained" className={classes.save}>
              Dodaj
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default AddComment
