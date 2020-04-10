import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import ModalUi from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    paper: {
      color: '#52c3c0',
      border: '6px solid #f0ad44',
      textAlign: 'center',
      backgroundColor: theme.palette.background.paper,
      borderRadius: '37px',
      padding: theme.spacing(2, 4, 3)
    }
  })
)

interface ModalParams {
  handleClose: () => void
  open: boolean
}

const Modal = ({ handleClose, open }: ModalParams) => {
  const classes = useStyles()

  return (
    <div>
      <ModalUi
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Dzięki za zapisanie się</h2>
            <p id="transition-modal-description">
              Na Twojego maila będę wysyłał najciekawsze informacje ze świata PROGRAMISTY
            </p>
          </div>
        </Fade>
      </ModalUi>
    </div>
  )
}

export default Modal
