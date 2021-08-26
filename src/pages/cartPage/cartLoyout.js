import { Grid, makeStyles, Typography } from '@material-ui/core'
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
    padding: '80px 30px',
  },
  flexibe: {
    display: 'flex',
    flexDirection: 'column',
  },
  head: {
    padding: '100px',
    margin: 'auto',
  },
}))

export default function CartBody() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <ScrollToTop />
      <ButtonAppBar />
      <Grid container xs={12} className={classes.padd}>
        <Typography variant="h4" className={classes.head}>
          Shopping cart
        </Typography>
        {/* LEFT */}
        <Grid container>
          <Grid item xs={12} sm={8} className={classes.flexible}>
            <CartPage />
          </Grid>
          {/* RIGHT */}
          <Grid item xs={12} sm={4} className={classes.spaceBTW}>
            <CartTotal />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  )
}
