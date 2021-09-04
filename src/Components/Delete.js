import { IconButton, makeStyles, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeProducts } from '../store/cart/cartActionCreat'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  },
  fnt: {
    fontSize: '20px',
    color: 'gray',
  },
}))

export default function Delete({ id }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <IconButton
        aria-label="delete"
        className={classes.margin}
        onClick={() => {
          dispatch(removeProducts(id))
        }}
      >
        <Typography variant="p" className={classes.fnt}>
          Delete
        </Typography>
        <DeleteIcon />
      </IconButton>
    </React.Fragment>
  )
}
