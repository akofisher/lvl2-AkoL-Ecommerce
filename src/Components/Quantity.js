import { Box, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  fnt: {
    fontSize: '20px',
    color: 'gray',
  },
  flexible: {
    display: 'flex',
    justifyContent: 'baseline',
    height: '30px',
    maxWidth: '100px',
    border: '1px solid lightgray',
    marginTop: '20px',
  },
  non: {
    border: 'none',
    background: 'transparent',
    margin: '5px',
  },
  nonP: {
    marginTop: '5px',
    margin: '15px',
  },
  fle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export default function Quantity() {
  const [count, setCount] = useState(0)
  const classes = useStyles()
  return (
    <React.Fragment>
      <Box className={classes.fle}>
        <Typography variant="p" className={classes.fnt}>
          Quantity
        </Typography>
        <Box xs={12} className={classes.flexible}>
          <button className={classes.non} onClick={() => setCount(count - 1)}>
            -
          </button>
          <p className={classes.nonP}> {count} </p>
          <button className={classes.non} onClick={() => setCount(count + 1)}>
            +
          </button>
        </Box>
      </Box>
    </React.Fragment>
  )
}
