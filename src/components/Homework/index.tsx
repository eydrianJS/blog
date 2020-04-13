import React from 'react'
import Grid from '@material-ui/core/Grid'
import useStyle from './style'
import { Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const Homework = () => {
  const classes = useStyle()

  return (
    <>
      <Paper className={classes.paper}>
        <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.content}>
          <Typography variant="h3" style={{ textAlign: 'center' }}>
            ZADANIA DLA CIEBIE
          </Typography>
          <Grid container direction="row" justify="flex-start" alignItems="center" className={classes.content}>
            <div id="container" className={classes.container}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                className={classes.content}>
                <Paper className={classes.category}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.categoryItem}>
                    Podstawy Programowania
                  </Grid>
                </Paper>
                <Paper className={classes.category}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.categoryItem}>
                    Javascript
                  </Grid>
                </Paper>
                <Paper className={classes.category}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.categoryItem}>
                    Zadania z odnośnikiem do Bloga
                  </Grid>
                </Paper>
              </Grid>
              {/* <Grid container direction="row" justify="space-between" alignItems="flex-start" className={classes.content}>
              <Paper className={classes.category}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.categoryItem}>
                  jeden
                </Grid>
              </Paper>
              <Paper className={classes.category}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.categoryItem}>
                  dwa
                </Grid>
              </Paper>
              <Paper className={classes.category}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.categoryItem}>
                  trzy
                </Grid>
              </Paper>
            </Grid> */}
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <div
          className={classes.category}
          style={{ fontSize: '30px', textAlign: 'center', width: '100%', marginTop: 40 }}>
          Zadania dla tej kategorii już wkrótce!! Zapisz sie na newsletter any nie przegapić tej informacji!!
        </div>
      </Paper>
    </>
  )
}

export default Homework
