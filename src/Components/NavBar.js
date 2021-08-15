import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import React from 'react'
// import { useContext } from 'react'
// import { UserContext } from '../../../store/UserProvider'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HOMEPAGE, LOGIN, PRIVATE, SIGN_UP } from '../routes'
import { selectLogedIn, selectUser } from '../store/user/userSelector'
import ControlledOpenSelect from './SelectFlag'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    zIndex: 999,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bTn: {
    border: '2px solid white',
    borderRadius: '20px',
  },
  bTnN: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: '17px',
  },
  flexible: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  ghost: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: 'black',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  // const userData = useContext(UserContext)
  // const TOKEN = localStorage.getItem('token')
  const isLogedIn = useSelector(selectLogedIn)
  const user = useSelector(selectUser)

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.ghost}>
        <Toolbar className={classes.flexible}>
          <Typography variant="h6" className={classes.title}>
            MDB
          </Typography>
          <Button color="inherit">
            <ShoppingCartIcon />
          </Button>
          <Button color="inherit">
            <ControlledOpenSelect />
          </Button>
          <Button component={Link} color="inherit" to={HOMEPAGE}>
            Home
          </Button>
          <Button color="inherit">Contact</Button>

          {isLogedIn ? (
            <React.Fragment>
              <Button
                color="inherit"
                className={classes.bTnN}
                component={Link}
                to={PRIVATE}
              >
                HELLO {user.name}
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  window.localStorage.clear()
                  window.location.reload()
                }}
              >
                LOGOUT{' '}
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button color="inherit" component={Link} to={LOGIN}>
                Sign in
              </Button>
              <Button
                color="inherit"
                className={classes.bTn}
                component={Link}
                to={SIGN_UP}
              >
                Sign Up
              </Button>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
