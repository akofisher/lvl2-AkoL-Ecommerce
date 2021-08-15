import { Box, Grid, makeStyles } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  bstflexible: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    background: 'blue',
    color: 'white',
    alignItems: 'center',
  },
  padd: {
    padding: '34px',
    fontSize: '22px',
  },
}))

export default function Social() {
  const classes = useStyles()
  return (
    <Grid container className={classes.bstflexible}>
      <Box item className={classes.padd}>
        Get connected with us on social networks!
      </Box>
      <Box item className={classes.padd}>
        <FacebookIcon
          style={{ fontSize: '30px', paddingLeft: '15px', cursor: 'pointer' }}
        />
        <TwitterIcon
          style={{ fontSize: '30px', paddingLeft: '15px', cursor: 'pointer' }}
        />
        <LinkedInIcon
          style={{ fontSize: '30px', paddingLeft: '15px', cursor: 'pointer' }}
        />
        <InstagramIcon
          style={{ fontSize: '30px', paddingLeft: '15px', cursor: 'pointer' }}
        />
      </Box>
    </Grid>
  )
}
