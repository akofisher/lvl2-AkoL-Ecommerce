import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  fnt: {
    fontSize: '20px',
    color: 'gray',
  },
  flexible: {
    display: 'flex',
    justifyContent: 'baseline',
    height: '30px',
    width: '80px',
    border: '1px solid lightgray',
    marginTop: '20px',
  },
  non: {
    border: 'none',
    background: 'transparent',
  },
  nonP: {
    marginTop: '0',
    margin: '15px',
  },
}))

export default function Quantity() {
  const [count, setCount] = useState(0)
  const classes = useStyles()
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
