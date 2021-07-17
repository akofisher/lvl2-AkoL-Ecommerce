import React from 'react'
import { Grid, Box } from '@material-ui/core'
// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
// import Rating from '@material-ui/lab/Rating'
import CustomerReview from './customerReview'
import CustomerRevTitle from './customerRevTitle'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  customeR: {
    borderBottom: '1px solid lightgray',
    paddingBottom: '15px',
  },
  txtArea: {
    width: '100%',
    marginBottom: '15px',
  },
  fend: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

export default function Reviews() {
  const classes = useStyles()
  return (
    <Grid container xs={12}>
      <Grid item xs={12} className={classes.customeR}>
        <CustomerReview />
      </Grid>
      <Grid item xs={12}>
        <CustomerRevTitle />
      </Grid>
      <Grid item xs={12}>
        <TextareaAutosize
          aria-label="Your review"
          placeholder="Your review"
          className={classes.txtArea}
          rows="8"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="1"
          label="Name"
          variant="outlined"
          color="secondary"
          className={classes.txtArea}
        />
        <TextField
          id="2"
          label="Email"
          variant="outlined"
          color="secondary"
          className={classes.txtArea}
        />
      </Grid>
      <Grid item xs={12} className={classes.fend}>
        <Button variant="contained" color="primary">
          ADD A REVIEW
        </Button>
      </Grid>
    </Grid>
  )
}
