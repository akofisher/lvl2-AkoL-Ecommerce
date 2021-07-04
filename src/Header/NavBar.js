import React from 'react'
import { makeStyles, withTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ControlledOpenSelect from './SelectFlag'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bTn: {
    border: '2px solid white',
    borderRadius: '30%',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MDB
          </Typography>
          <Button color="inherit">
            <ShoppingCartIcon />
          </Button>
          <Button color="inherit">
            <ControlledOpenSelect />
          </Button>
          <Button color="inherit">Shop</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Sign in</Button>
          <Button color="inherit" className={classes.bTn}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
