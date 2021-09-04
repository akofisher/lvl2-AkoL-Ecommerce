import { Button } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addProducts } from '../store/cart/cartActionCreat'

export default function CustomButton({ data }) {
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="default"
        startIcon={<AddShoppingCartIcon />}
        onClick={() => {
          dispatch(
            addProducts({
              title: data.title,
              price: data.price,
              id: data.id,
              image: data.image,
            }),
          ),
            console.log(data)
        }}
      >
        ADD TO CART
      </Button>
    </React.Fragment>
  )
}
