import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Footer from './footer/footer'
import Header from './header/header'

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px',
  },
}))

export default function Loyout(props) {
  const classes = useStyles()
  return (
    <Grid container className={classes.grid}>
      {/* HEADER */}
      <Grid item xs={12}>
        <Header />
      </Grid>

      {/* BODY */}
      <Grid container xs={12}>
        {props.children}
      </Grid>

      {/* FOOTER */}
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
}
