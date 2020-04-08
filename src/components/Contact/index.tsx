import React from 'react'
import Grid from '@material-ui/core/Grid'
import useStyle from './style'
import { Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import imageSrc from './omnie.jpg'

const Contact = () => {
  const classes = useStyle()

  return (
    <Paper className={classes.paper}>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.content}>
        <div id="container" className={classes.container}>
          <img src={imageSrc} alt="placeholder" className={classes.image} />
          <Typography variant="h6" className={classes.text}>
            Cześć! Jestem Adrian, pacuje jako Frontend Developer i prowadzę tego bloga aby Ci pomóc! First Step Frontend
            powstał z myślą o osobach które chcą nauczyć się programowania <strong>od podstaw</strong>. Nigdy nie
            przypuszałem że programowanie stanie się moją pasją jak i sposobem na życie. Wszystkiego nauczyłem się sam i
            zdobytą więdzę zawdzięczam tylko i wyłącznie determinacji i doświadczeniom. Na początku było bardzo ciężko,
            nie wiedziałem czego powinienem się uczyć i w jaki sposób mogę podnosić swoje kwalifikacje. Właśnie tu krok
            po kroku pokażę Ci moją ścieżkę rozwoju abyś też mógł wkroczyć to biznesu IT.
          </Typography>
        </div>
      </Grid>
    </Paper>
  )
}

export default Contact
