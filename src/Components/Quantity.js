import { Box, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuantity } from '../store/cart/cartActionCreat'
import { getCartProducts } from '../store/cart/cartSelector'

const useStyles = makeStyles((theme) => ({
  fnt: {
    fontSize: '20px',
    color: 'gray',
  },
  flexible: {
    display: 'flex',
    justifyContent: 'baseline',
    height: '30px',
    maxWidth: '100px',
    border: '1px solid lightgray',
    marginTop: '20px',
  },
  non: {
    border: 'none',
    background: 'transparent',
    margin: '5px',
  },
  nonP: {
    marginTop: '5px',
    margin: '15px',
  },
  fle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export default function Quantity() {
  const classes = useStyles()
  const cartData = useSelector(getCartProducts)

  const dispatch = useDispatch()
  const thisCart = cartData.find((id) => id.id === cartData[0].id)

  const [count, setCount] = useState(1)

  const increseQuantity = () => {
    if (!!thisCart) {
      setCount(count + 1)
      dispatch(setQuantity(cartData, count - 1))
    }
  }

  const decreaseQuantity = () => {
    if (!!thisCart) {
      if (count > 1) {
        setCount(count - 1)
        dispatch(setQuantity(cartData, count + 1))
      }
    }
  }

  return (
    <React.Fragment>
      <Box className={classes.fle}>
        <Typography variant="p" className={classes.fnt}>
          Quantity
        </Typography>
        <Box xs={12} className={classes.flexible}>
          <button className={classes.non} onClick={decreaseQuantity}>
            -
          </button>
          <p className={classes.nonP}> {count} </p>
          <button className={classes.non} onClick={increseQuantity}>
            +
          </button>
        </Box>
      </Box>
    </React.Fragment>
  )
}
