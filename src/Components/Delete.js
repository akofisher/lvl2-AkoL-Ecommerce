import { IconButton, makeStyles, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  },
  fnt: {
    fontSize: '20px',
    color: 'gray',
  },
}))

export default function Delete() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <IconButton aria-label="delete" className={classes.margin}>
        <Typography variant="p" className={classes.fnt}>
          Delete
        </Typography>
        <DeleteIcon />
      </IconButton>
    </React.Fragment>
  )
}
