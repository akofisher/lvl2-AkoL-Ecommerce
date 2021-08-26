import { Button } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import React from 'react'

export default function CustomButton() {
  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="default"
        startIcon={<AddShoppingCartIcon />}
        onClick={() => {}}
      >
        ADD TO CART
      </Button>
    </React.Fragment>
  )
}
