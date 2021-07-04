import React from 'react'
import { Grid } from '@material-ui/core'
import ButtonAppBar from './NavBar'
import BackgroundImg from './BcgImg'

export default function Header() {
  return (
    <Grid item xs={12}>
      <ButtonAppBar />
      <BackgroundImg />
    </Grid>
  )
}
