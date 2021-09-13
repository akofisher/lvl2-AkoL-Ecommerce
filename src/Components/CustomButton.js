import { Button } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from '../store/cart/cartActionCreat'
import { getCartProducts } from '../store/cart/cartSelector'
import Delete from './Delete'

export default function CustomButton({ data }) {
  const dispatch = useDispatch()
  const cartData = useSelector(getCartProducts)

  const id = !!cartData.find((id) => id.id === data.id)

  useEffect(() => {})

  return (
    <React.Fragment>
      {id == false ? (
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
            )
          }}
        >
          ADD TO CART
        </Button>
      ) : (
        <Delete id={data.id} />
      )}
    </React.Fragment>
  )
}
