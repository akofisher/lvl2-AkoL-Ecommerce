import React from 'react'
import { Box } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

const useStyles = makeStyles((theme) => ({
  Flex: {
    marginLeft: '-15px',
  },
  mTop: {
    margin: '20px 0px',
  },
  fnT: {
    fontSize: '18px',
  },
}))

export default function CustomerRevTitle() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography variant="h6" className={classes.mTop}>
        Add a review
      </Typography>
      <Box>
        <Typography variant="p" className={classes.fnT}>
          Your email address will not be published.
        </Typography>
        <Box
          className={classes.Flex}
          component="fieldset"
          borderColor="transparent"
        >
          <Rating name="simple-controlled" value={4} />
        </Box>
      </Box>
    </React.Fragment>
  )
}
