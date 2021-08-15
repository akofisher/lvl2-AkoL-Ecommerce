import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  BcgImg: {
    backgroundImage: `url("https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg")`,
    backgroundSize: 'cover',
    padding: '130px',
    textAlign: 'center',
    fontFamily: 'bold',
    fontSize: '40px',
    color: 'white',
    opacity: '0.6',
  },
}))

export default function BackgroundImg() {
  const classes = useStyles()
  return <div className={classes.BcgImg}>Shop</div>
}
