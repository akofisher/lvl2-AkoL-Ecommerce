import React from 'react'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  bolD: {
    fontWeight: 'bold',
    padding: '15px',
  },
  lighT: {
    color: 'gray',
    padding: '15px',
    width: '100%',
  },
  bckg: {
    background: 'lightgray',
  },
  borD: {
    border: '1px solid gray',
    marginTop: '10px',
  },
}))

export default function Info() {
  const classes = useStyles()
  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <Typography variant="h6">Additional Information</Typography>
      </Grid>
      <Grid item xs={12}>
        <table className={classes.borD}>
          <tr>
            <td className={classes.bolD}>Weight</td>
            <td className={classes.lighT}>0.3 kg</td>
          </tr>
          <tr className={classes.bckg}>
            <td className={classes.bolD}>Dimensions</td>
            <td className={classes.lighT}>50 × 60 cm</td>
          </tr>
        </table>
      </Grid>
    </Grid>
  )
}
