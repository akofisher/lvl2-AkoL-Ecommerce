import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  flexible: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

export default function CartTotal() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid item className={classes.flexible}>
        <Typography variant="h6">The total amount of</Typography>
        <Typography component="p">Temporary amount</Typography>
        <Typography component="p">Shipping </Typography>
        <Button variant="contained" color="default">
          GO TO CHECKOUT
        </Button>
      </Grid>
    </React.Fragment>
  )
}
