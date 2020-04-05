import React from 'react'
import useStyles from './style'
import Navbar from '../../components/Navbar'

interface MobileLayoutParams {
  Page: React.ReactNode
}

const MobileLayout = ({ Page }: MobileLayoutParams) => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      <Navbar />
      <div className={classes.root}>{Page}</div>
    </main>
  )
}

export default MobileLayout
