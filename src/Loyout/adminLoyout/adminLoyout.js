import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AdminHeader from '../../adminPanel/adminHeader'
import AdminSideBar from '../../adminPanel/adminSideBar'
import Loader from '../../Components/Loader'
import ScrollToTop from '../../scroll'
import { selectLogedIn } from '../../store/user/userSelector'

const useStyles = makeStyles((theme) => ({
  indeX: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}))

export default function AdminLoyout(props) {
  const classes = useStyles()
  const isLogedIn = useSelector(selectLogedIn)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  }, [])

  return (
    <React.Fragment>
      <Loader loading={loading}>
        {isLogedIn ? (
          <Grid container className={classes.indeX}>
            <ScrollToTop />
            <Grid xs={12}>
              <AdminHeader />
            </Grid>
            <Grid xs={12} md={3}>
              <AdminSideBar />
            </Grid>
            <Grid xs={12} md={9}>
              {props.children}
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </Loader>
    </React.Fragment>
  )
}
