import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import MainLeftSide from '../Body/LeftSide/MainLeftSide'
import MainRightSide from '../Body/RightSide/MainRightSide'

const useStyles = makeStyles((theme) => ({
  spaceBTW: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

export default function MainBody() {
  const classes = useStyles()
  return (
    <React.Fragment>
      {/* LEFT */}
      <Grid item xs={12} sm={4}>
        <MainLeftSide />
      </Grid>
      {/* RIGHT */}
      <Grid item xs={12} sm={8} className={classes.spaceBTW}>
        <MainRightSide />
      </Grid>
    </React.Fragment>
  )
}
