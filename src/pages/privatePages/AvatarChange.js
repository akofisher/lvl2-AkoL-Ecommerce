import { Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Loader from '../../Components/Loader'
import ButtonAppBar from '../../Components/NavBar'
import { Api } from '../../Hooks/CustomApiHook'
import Footer from '../../Loyout/footer/footer'
import { PRIVATE } from '../../routes'
import ScrollToTop from '../../scroll'
import { setUser } from '../../store/user/userActionsCreator'
import { selectLogedIn, selectUser } from '../../store/user/userSelector'

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

  centeR: {
    textAlign: 'center',
    margin: '30px auto',
  },
  flexible: {
    display: 'flex',
    flexDirection: 'column',
  },
  marG: {
    marginTop: '15px',
  },
}))

export default function AvatarChange() {
  const classes = useStyles()
  let dispatch = useDispatch()
  const user = useSelector(selectUser)
  const history = useHistory()
  const isLogedIn = useSelector(selectLogedIn)
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      avatar: '',
    },
    onSubmit: (values) => {
      Api.update(user.id, values.avatar).then((data) => {
        dispatch(setUser(data))
      })
      setTimeout(() => {
        history.push(PRIVATE)
      }, 1500)
    },
  })
  return (
    <React.Fragment>
      <Loader loading={loading}>
        {isLogedIn ? (
          <React.Fragment>
            <ScrollToTop />
            <ButtonAppBar />
            <Grid container className={classes.padd}>
              <form onSubmit={formik.handleSubmit} className={classes.flexible}>
                <Typography variant="h4" className={classes.centeR}>
                  Change/Upload Avatar
                </Typography>

                <TextField
                  type="file"
                  name="avatar"
                  id="avatar"
                  className={classes.marG}
                  onChange={(e) =>
                    formik.setFieldValue('avatar', e.target.files[0])
                  }
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.marG}
                >
                  SUBMIT
                </Button>
              </form>
            </Grid>
            <Footer />
          </React.Fragment>
        ) : (
          ''
        )}
      </Loader>
    </React.Fragment>
  )
}
