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
import Link from '@material-ui/core/Link'
import { Box } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'

const validate = (values) => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = 'Required'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  }

  if (!values.mobile) {
    errors.mobile = 'Required'
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
  const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      passwor: '',
      mobile: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <React.Fragment>
      <ButtonAppBar />
      <Grid container className={classes.padd}>
        <form onSubmit={formik.handleSubmit} className={classes.flexible}>
          <Typography variant="h4" className={classes.centeR}>
            Sign Up
          </Typography>
          <Grid container xs={12}>
            <Grid
              component={TextField}
              id="firstname"
              name="firstname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstname}
              variant="outlined"
              label="First name"
              className={classes.inPP2}
              xs={12}
              md={6}
              item
            />
            {formik.errors.firstname ? (
              <div>{formik.errors.firstname}</div>
            ) : null}

            <Grid
              component={TextField}
              id="lastname"
              name="lastname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              variant="outlined"
              label="Last Name"
              className={classes.inPP2}
              xs={12}
              md={6}
              item
            />
            {formik.errors.lastname ? (
              <div>{formik.errors.lastname}</div>
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
            id="mobile"
            name="mobile"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.mobile}
            variant="outlined"
            label="Phone number"
            className={classes.inPP}
          />
          {formik.errors.mobile ? (
            <div>{formik.errors.mobile}</div>
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
            href="#contained-buttons"
            className={classes.btNN}
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
