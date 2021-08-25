import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import ButtonAppBar from '../../Components/NavBar'
import Footer from '../../Loyout/footer/footer'
import ScrollToTop from '../../scroll'
import CartPage from './cartPage'
import CartTotal from './cartTotal'
const useStyles = makeStyles((theme) => ({
  spaceBTW: {
    height: '100%',
  },
  padd: {
    padding: '100px 0',
  },
  flexibe: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

export default function CartBody() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <ScrollToTop />
      <ButtonAppBar />
      <Grid container xs={12} className={classes.padd}>
        {/* LEFT */}
        <Grid item xs={12} sm={8} className={classes.flexible}>
          <CartPage />
        </Grid>
        {/* RIGHT */}
        <Grid item xs={12} sm={4} className={classes.spaceBTW}>
          <CartTotal />
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  )
}
