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
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32.
          </Typography>
        </div>
      </Grid>
    </Paper>
  )
}

export default Contact
