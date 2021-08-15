import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React from 'react'
import FormForAdd from '../adminPanel/adminContent/components/FormForAdd'

const useStyles = makeStyles((theme) => ({
  padd: {
    margin: theme.spacing(2),
    textAlign: 'center',
    height: '250px',
  },
  addFnt: {
    fontSize: '150px',
    alignItems: 'center',
    color: 'gray',
  },
}))

export default function RespDialog() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setSubmitting(false)
    setOpen(false)
  }

  const handleSubmit = () => {
    setSubmitting(true)
  }

  return (
    <React.Fragment>
      <Grid xs={12} md={4}>
        <Card className={classes.padd}>
          <CardActionArea onClick={handleClickOpen}>
            <CardContent>
              <Typography className={classes.addFnt}>+</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {'ADD NEW PRODUCT'}
        </DialogTitle>
        <DialogContent>
          <FormForAdd callback={handleClose} isSubmiting={submitting} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            CANCEL
          </Button>
          <Button onClick={handleSubmit} color="primary" autoFocus>
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
