import { Box, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Link from '@material-ui/core/Link'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import { useFormik } from 'formik'
import React from 'react'
// import { useContext } from 'react'
// import { UserContext } from '../../store/UserProvider'
import { useDispatch } from 'react-redux'
import { Link as Rlink, useHistory } from 'react-router-dom'
import ButtonAppBar from '../../Components/NavBar'
import { Api } from '../../Hooks/CustomApiHook'
import Footer from '../../Loyout/footer/footer'
import { PRIVATE, SIGN_UP } from '../../routes'
import ScrollToTop from '../../scroll'
import { setLogedIn, setUser } from '../../store/user/userActionsCreator'

const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 8) {
    errors.password = 'Password is too short - should be 8 chars minimum.'
  } else if (!/[A-Z0-9._%+-]/i.test(values.email)) {
    errors.password = 'Password can only contain Numbers and Latin letters.'
  }

  return errors
}
const useStyles = makeStyles((theme) => ({
  padd: {
    padding: '150px 0px',
    justifyContent: 'center',
  },
  flexible: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
  },
  inPP: {
    margin: '20px 0',
  },
  inLine: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  centeR: {
    textAlign: 'center',
    margin: '30px auto',
  },
  btNN: {
    margin: '20px auto',
    width: '100px',
    justifyContent: 'center',
    padding: '10px 20px',
  },
  iconSS: {
    textAlign: 'center',
  },
}))

export default function Login() {
  // const userData = useContext(UserContext)
  const history = useHistory()
  const classes = useStyles()
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },

    validate,
    onSubmit: (values) => {
      console.log(values, 'AKOOO96')
      Api.sighIn(formik.values.email, formik.values.password)
        .then((json) => {
          console.log(json, 'AKOOOOO')
          localStorage.setItem('token', json.token.access_token)
          // userData.setData({
          //   ...userData.data,
          //   isLogedIn: true,
          //   isLogedOut: false,
          //   user: json.user,
          // })
          dispatch(setLogedIn(true))
          dispatch(setUser(json.user))
          history.push(PRIVATE)
        })

        .catch((error) => {
          console.log(error, 'error')
        })
      // useEffect(() => {
      //   userData.setData({
      //     ...userData.data,
      //     user: User.user,
      //   })
      // }, [])
    },
  })
  return (
    <React.Fragment>
      <ScrollToTop />
      <ButtonAppBar />
      <Grid container className={classes.padd}>
        <form onSubmit={formik.handleSubmit} className={classes.flexible}>
          <Typography variant="h4" className={classes.centeR}>
            Sign In
          </Typography>
          <TextField
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            variant="outlined"
            label="Your email"
            className={classes.inPP}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <TextField
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            variant="outlined"
            label="Your password"
            className={classes.inPP}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <div className={classes.inLine}>
            <FormControlLabel
              control={<Checkbox name="checkedC" />}
              label="REMEMBER ME"
            />
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.")
              }}
            >
              Forgot password?
            </Link>
          </div>

          <Button
            variant="contained"
            color="primary"
            className={classes.btNN}
            type="submit"
          >
            SIGN IN
          </Button>
          <div className={classes.centeR}>
            <Typography variant="h6" className={classes.inPP}>
              Not a member?{' '}
              <Rlink
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.")
                }}
                component={Link}
                to={SIGN_UP}
              >
                Register
              </Rlink>
            </Typography>
            <Typography className={classes.inPP} variant="h6">
              or sign in with:
            </Typography>
          </div>
          <Box className={classes.iconSS}>
            <FacebookIcon
              style={{
                fontSize: '30px',
                paddingRight: '15px',
                cursor: 'pointer',
              }}
            />
            <TwitterIcon
              style={{
                fontSize: '30px',
                paddingRight: '15px',
                cursor: 'pointer',
              }}
            />
            <LinkedInIcon
              style={{
                fontSize: '30px',
                paddingRight: '15px',
                cursor: 'pointer',
              }}
            />
            <InstagramIcon
              style={{
                fontSize: '30px',
                cursor: 'pointer',
              }}
            />
          </Box>
        </form>
      </Grid>
      <Footer />
    </React.Fragment>
  )
}
