import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import MainLeftSide from '../content/LeftSide/MainLeftSide'
import MainRightSide from '../content/RightSide/MainRightSide'

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
