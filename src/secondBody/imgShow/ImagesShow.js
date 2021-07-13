import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  img1: {
    backgroundImage: 'blue',
    border: '1px solid lightgray',
    borderRadius: '5px',
    width: '450px',
    height: '300px',
    marginLeft: '35px',
  },
  img: {
    backgroundImage: `url(
      "https://baronfilou.com/wp-content/uploads/2019/02/baron-filou-organic-fairtrade-tshirt-black-bear-premium-back.jpg")`,
    backgroundSize: 'cover',
    width: '100px',
    height: '80px',
    margin: '10px',
    border: '1px solid lightgray',
    borderRadius: '5px',
  },

  padd: {
    padding: theme.spacing(4),
  },
  padd2: {
    padding: theme.spacing(2),
  },
}))

export default function ImagesShow() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid item xs={12} md={6} className={classes.padd}>
        <Grid xs={12} className={classes.img1}></Grid>

        <Grid container xs={12} className={classes.padd2}>
          <Paper item xs={3} className={classes.img}></Paper>
          <Paper item xs={3} className={classes.img}></Paper>
          <Paper item xs={3} className={classes.img}></Paper>
          <Paper item xs={3} className={classes.img}></Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
