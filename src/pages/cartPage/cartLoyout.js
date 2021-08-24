import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import ButtonAppBar from '../../Components/NavBar'
import Footer from '../../Loyout/footer/footer'
import ScrollToTop from '../../scroll'
import CartPage from './cartPage'

const useStyles = makeStyles((theme) => ({
  spaceBTW: {
    height: '100%',
  },
}))

export default function CartBody() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <ScrollToTop />
      <ButtonAppBar />
      {/* LEFT */}
      <Grid item xs={12} sm={8}>
        <CartPage />
      </Grid>
      {/* RIGHT */}
      <Grid item xs={12} sm={4} className={classes.spaceBTW}>
        <cartTotal />
      </Grid>
      <Footer />
    </React.Fragment>
  )
}
