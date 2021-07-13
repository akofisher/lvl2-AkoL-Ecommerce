import React from 'react'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ImagesShow from './imgShow/ImagesShow'
import Titles from './titles/Titles'
import BottPanel from './bottomTitle/BottPanel'

const useStyles = makeStyles((theme) => ({
  padd: {
    padding: '25px',
    textAlign: 'center',
  },
  flexible: {
    display: 'flex',
  },
  vieW: {
    justifyContent: 'center',
  },
}))

export default function SecondBody() {
  const classes = useStyles()
  return (
    <Grid container xs={12} className={classes.test}>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.padd}>
          Product page
        </Typography>
      </Grid>
      <Grid container xs={12} className={classes.flexible}>
        <ImagesShow />
        <Titles />
      </Grid>
      <Grid container className={classes.vieW} xs={12}>
        <BottPanel />
      </Grid>
    </Grid>
  )
}
