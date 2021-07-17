import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import AdminHeader from '../components/adminHeader/adminHeader'
import AdminSideBar from '../components/adminSideBar/adminSideBar'

const useStyles = makeStyles((theme) => ({
  indeX: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}))

export default function AdminLoyout(props) {
  const classes = useStyles()

  return (
    <Grid container className={classes.indeX}>
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
  )
}
