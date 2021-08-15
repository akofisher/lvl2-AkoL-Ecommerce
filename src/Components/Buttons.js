import { Button, makeStyles } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(4),
  },
}))

export default function Buttons() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Button variant="contained" color="primary">
        Buy Now
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<AddShoppingCartIcon />}
      >
        ADD TO CART
      </Button>
    </React.Fragment>
  )
}
