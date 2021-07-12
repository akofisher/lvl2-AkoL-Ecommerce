import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  img1: {
    backgroundImage: 'blue',
    border: '1px solid black',
    width: '400px',
    height: '300px',
  },
  img2: {
    backgroundImage: `url(
      "https://baronfilou.com/wp-content/uploads/2019/02/baron-filou-organic-fairtrade-tshirt-black-bear-premium-back.jpg")`,
    backgroundSize: 'cover',
    width: '100px',
    height: '80px',
  },
  img3: {
    backgroundImage: `url(
      'https://5.imimg.com/data5/FW/GT/MY-23375112/men-s-yellow-color-t-shirt-250x250.jpg')`,
    backgroundSize: 'cover',
    width: '100px',
    height: '80px',
  },
  img4: {
    backgroundImage: `url(
      "https://imgprd19.hobbylobby.com/5/ba/61/5ba610f22c7cd6efb4e6c69387d938451a6c40e6/350Wx350H-633719-0320.jpg")`,
    backgroundSize: 'cover',
    width: '100px',
    height: '80px',
  },
  img5: {
    backgroundImage: `url(
      "https://www.joinusonline.net/pub/media/catalog/product/t/s/tshirt_v_neck_royal_blue_magic_1_1.jpg")`,
    backgroundSize: 'cover',
    width: '100px',
    height: '80px',
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
          <Paper item xs={3} className={classes.img2}></Paper>
          <Paper item xs={3} className={classes.img3}></Paper>
          <Paper item xs={3} className={classes.img4}></Paper>
          <Paper item xs={3} className={classes.img5}></Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
