import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  flexible: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px ',
  },
  flexible1: {
    display: 'flex',
    paddingBottom: '10px',
  },
  flexible2: {
    display: 'flex',
    padding: '10px 0',
  },
  flexible3: {
    display: 'flex',
    borderTop: '1px solid lightgray',
    padding: '20px 0',
  },
}))

export default function CartTotal() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid item className={classes.flexible}>
        <Typography variant="h5" className={classes.flexible1}>
          The total amount of
        </Typography>
        <Typography component="p" className={classes.flexible2}>
          <span>Temporary amount</span>
          <span></span>
        </Typography>
        <Typography component="p" className={classes.flexible2}>
          <span>Shipping </span>
          <span></span>
        </Typography>
        <Typography variant="h6" className={classes.flexible3}>
          <span>
            The total amount of <br /> (including VAT){' '}
          </span>
          <span></span>
        </Typography>
        <Button variant="contained" color="primary">
          GO TO CHECKOUT
        </Button>
      </Grid>
    </React.Fragment>
  )
}
