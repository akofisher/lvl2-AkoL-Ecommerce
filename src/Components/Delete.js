import { IconButton, makeStyles } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

export default function Delete() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <IconButton aria-label="delete" className={classes.margin}>
        <DeleteIcon />
      </IconButton>
    </React.Fragment>
  )
}
