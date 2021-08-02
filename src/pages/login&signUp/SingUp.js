import React from 'react'
import { useFormik } from 'formik'
import { TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import ButtonAppBar from '../../loyout/header/components/NavBar'
import Footer from '../../loyout/footer/footer'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Box } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import ScrollToTop from '../../scroll'
import { Api } from '../../Hooks/CustomApiHook'
import { SIGN_UP } from '../../routes'
import { useHistory } from 'react-router'

const validate = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 8) {
    errors.password = 'Password is too short - should be 8 chars minimum.'
  } else if (!/[A-Z0-9._%+-]/i.test(values.password_confirmation)) {
    errors.password = 'Password can only contain Numbers and Latin letters.'
  }
  if (!values.password_confirmation) {
    errors.password_confirmation = 'Required'
  } else if (values.password_confirmation.length < 8) {
    errors.password_confirmation =
      'Password is too short - should be 8 chars minimum.'
  } else if (!/[A-Z0-9._%+-]/i.test(values.password_confirmation)) {
    errors.password_confirmation =
      'Password can only contain Numbers and Latin letters.'
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

  centeR: {
    textAlign: 'center',
    margin: '30px auto',
  },
  btNN: {
    margin: '20px auto',
    width: '100px',
    justifyContent: 'center',
    padding: '10px',
  },
  iconSS: {
    textAlign: 'center',
  },
  texTT: {
    color: 'gray',
    fontSize: '14px',
  },
  inPP2: {
    margin: '20px 0',
  },
}))

export default function SignUp() {
  const history = useHistory()
  const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(values)
      Api.sighUp(
        formik.values.name,
        formik.values.email,
        formik.values.password,
        formik.values.password_confirmation,
      )
        .then((json) => {
          console.log(json)
          history.push(SIGN_UP)
        })
        .catch((error) => console.log(error, 'error'))
    },
  })

  return (
    <React.Fragment>
      <ScrollToTop />
      <ButtonAppBar />
      <Grid container className={classes.padd}>
        <form onSubmit={formik.handleSubmit} className={classes.flexible}>
          <Typography variant="h4" className={classes.centeR}>
            Sign Up
          </Typography>
          <Grid container xs={12}>
            <Grid
              component={TextField}
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              variant="outlined"
              label="Name"
              className={classes.inPP2}
              xs={12}
              md={6}
              item
            />
            {formik.errors.name ? <div>{formik.errors.name}</div> : null}

            <Grid
              component={TextField}
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="outlined"
              label="Last Name"
              className={classes.inPP2}
              xs={12}
              md={6}
              item
              disabled
            />
            {formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
          </Grid>
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
          {formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : (
            <div className={classes.texTT}>
              At least 8 characters and 1 digit
            </div>
          )}

          <TextField
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password_confirmation}
            variant="outlined"
            label="Confirm your password"
            className={classes.inPP}
          />
          {formik.errors.password_confirmation ? (
            <div>{formik.errors.password_confirmation}</div>
          ) : (
            <div className={classes.texTT}>
              Optional - for two step authentication
            </div>
          )}

          <div className={classes.centeR}>
            <FormControlLabel
              control={<Checkbox name="checkedC" />}
              label="SUBSCRIBE TO OUR NEWSLETTER"
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.btNN}
            type="submit"
          >
            SIGN UP
          </Button>
          <div className={classes.centeR}>
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
