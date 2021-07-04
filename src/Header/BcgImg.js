import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  BcgImg: {
    backgroundImage: `url("https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg")`,
    backgroundSize: 'cover',
    padding: '130px',
    textAlign: 'center',
    fontFamily: 'bold',
    fontSize: '40px',
    color: 'white',
  },
}))

export default function BackgroundImg() {
  const classes = useStyles()
  return <div className={classes.BcgImg}>Shop</div>
}
