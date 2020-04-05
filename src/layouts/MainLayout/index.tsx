import React from 'react'
import useStyles from './style'
import { Container, CssBaseline } from '@material-ui/core'
import Navbar from '../../components/Navbar'
import { Paper } from '@material-ui/core'

interface MainLayoutParams {
  Page: React.ReactNode
}

const MainLayout = ({ Page }: MainLayoutParams) => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      <Navbar />
      <div className={classes.root}>
        <Container>
          <CssBaseline />
          <Paper className={classes.paper}>{Page}</Paper>
        </Container>
      </div>
    </main>
  )
}

export default MainLayout
