import { Box, Button, makeStyles } from '@material-ui/core'
import React from 'react'
import CustomButton from './CustomButton'

const useStyles = makeStyles((theme) => ({
  buttoN: {
    margin: theme.spacing(4),
  },
}))

export default function Buttons() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Box>
        <Button variant="contained" color="primary" className={classes.buttoN}>
          Buy Now
        </Button>
        <CustomButton />
      </Box>
    </React.Fragment>
  )
}
