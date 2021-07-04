import React from 'react'
import { Grid } from '@material-ui/core'
import FirstList from './LeftSide/FirstList'
import SearchInp from './LeftSide/SearchInp'

export default function Body() {
  return (
    <Grid container xs={12}>
      <Grid item xs={4}>
        <FirstList />
        <SearchInp />
      </Grid>
      <Grid item xs={8}>
        4
      </Grid>
    </Grid>
  )
}
