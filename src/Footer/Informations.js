import React from 'react'
import { Grid, Box } from '@material-ui/core'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import { makeStyles } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import MapIcon from '@material-ui/icons/Map'

const useStyles = makeStyles((theme) => ({
  bstflexible: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    background: 'black',
    color: 'white',
    alignItems: 'center',
    padding: '34px',
  },
  padd: {
    display: 'flex',
    flexDirection: 'column',
  },
  under: {
    borderBottom: '1px solid blue',
    paddingBottom: '10px',
    cursor: 'pointer',
  },
}))

export default function Informations() {
  const classes = useStyles()
  return (
    <Grid container className={classes.bstflexible}>
      <Box item className={classes.padd}>
        <h3 className={classes.under}>About me</h3>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor.</p>
      </Box>
      <Box item className={classes.padd}>
        <h3 className={classes.under}>Products</h3>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor.</p>
      </Box>
      <Box item className={classes.padd}>
        <h3 className={classes.under}>Useful links</h3>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor.</p>
      </Box>
      <Box item className={classes.padd}>
        <h3 className={classes.under}>Contacts</h3>
        <p>
          <MapIcon style={{ fontSize: '20px', paddingRight: '10px' }} />
          New York, Avenue Street 10
        </p>
        <p>
          <PhoneAndroidIcon
            style={{ fontSize: '20px', paddingRight: '10px' }}
          />
          042 876 836 908
        </p>
        <p>
          <MailIcon style={{ fontSize: '20px', paddingRight: '10px' }} />
          company@example.com
        </p>
        <p>
          <WatchLaterIcon style={{ fontSize: '20px', paddingRight: '10px' }} />
          Monday - Friday: 10-17
        </p>
      </Box>
    </Grid>
  )
}
