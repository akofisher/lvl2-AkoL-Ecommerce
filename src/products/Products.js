import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Loyout from '../Loyout/Loyout'
import MainLeftSide from '../Body/LeftSide/MainLeftSide'
import MainRightSide from '../Body/RightSide/MainRightSide'

const useStyles = makeStyles((theme) => ({
  spaceBTW: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

export default function Products() {
  const classes = useStyles()
  return (
    <Loyout>
      {/* LEFT */}
      <Grid item xs={12} sm={4}>
        <MainLeftSide />
      </Grid>
      {/* RIGHT */}
      <Grid item xs={12} sm={8} className={classes.spaceBTW}>
        <MainRightSide />
      </Grid>
    </Loyout>
  )
}
