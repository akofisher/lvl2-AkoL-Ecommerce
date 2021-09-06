import { Button } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addProducts } from '../store/cart/cartActionCreat'
import { setCookie } from '../store/cookiesHelp'

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
            setCookie('CART', [data.title, data.price, data.id, data.image])
        }}
      >
        ADD TO CART
      </Button>
    </React.Fragment>
  )
}
