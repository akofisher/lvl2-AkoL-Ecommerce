import { Button } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from '../store/products/prodActionCreat'
import { addCartProducts } from '../store/products/prodSelector'

export default function CustomButton() {
  const dispatch = useDispatch()
  const inCart = useSelector(addCartProducts)
  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="default"
        startIcon={<AddShoppingCartIcon />}
        onClick={() => {
          dispatch(addProducts(inCart))
        }}
      >
        ADD TO CART
      </Button>
    </React.Fragment>
  )
}
