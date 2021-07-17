import React from 'react'
import { Box } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

const useStyles = makeStyles((theme) => ({
  flexible: {
    display: 'flex',
  },
  imG: {
    marginRight: '20px',
  },
  fnT: {
    marginTop: '5px',
  },
  fleX: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '35px',
  },
  Flex: {
    marginTop: '20px',
  },
  fSize: {
    fontFamily: 'Open Sans',
    fontStyle: 'italic',
  },
  spFNT: {
    fontFamily: 'Open Sans',
    fontSize: '22px',
  },
}))

export default function CustomerReview() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography variant="h6">1 review for Fantasy T-shirt</Typography>
      <Box className={classes.fleX}>
        <Box>
          <Box className={classes.flexible}>
            <Box className={classes.imG}>
              <img
                src={
                  'https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg'
                }
                alt={'photo'}
              />
            </Box>
            <Box className={classes.fnT}>
              <Typography variant="h6">
                Marthasteward -{' '}
                <span className={classes.fSize}>January 28, 2020</span>
              </Typography>
              <Typography variant="p" className={classes.spFNT}>
                Nice one, love it !
              </Typography>
            </Box>
          </Box>
        </Box>
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
