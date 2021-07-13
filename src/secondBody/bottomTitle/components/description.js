import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  Flex: {
    display: 'flex',
    justifyContent: 'baseline',
    marginLeft: '-15px',
  },
}))

export default function Description() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography variant="h6">Blue denim shirt</Typography>
      <Typography variant="p" style={{ fontSize: '12px' }}>
        SHIRTS
      </Typography>
      <Box
        className={classes.Flex}
        component="fieldset"
        borderColor="transparent"
      >
        <Rating name="simple-controlled" value={4} />
      </Box>
      <Typography variant="h6">$17.99</Typography>
      <Typography variant="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        dolore eum, consequatur unde voluptas nulla beatae ea obcaecati debitis
        ex magni eius, quas, nobis et?
      </Typography>
    </React.Fragment>
  )
}
