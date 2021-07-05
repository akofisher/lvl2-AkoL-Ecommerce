import React from 'react'
import { Grid } from '@material-ui/core'
import FirstList from './LeftSide/FirstList'
import SearchInp from './LeftSide/SearchInp'
import CheckboxList from './LeftSide/CheckList'
import RatingList from './LeftSide/RatingList'
import RadioList from './LeftSide/RadioList'
import PriceSlider from './LeftSide/PriceSlider'
import SizeList from './LeftSide/SizeList'
import ColoredCheckbox from './LeftSide/ColoredCheckbox'

export default function Body() {
  return (
    <Grid container xs={12}>
      <Grid item xs={4}>
        <FirstList />
        <SearchInp />
        <CheckboxList />
        <RatingList />
        <RadioList />
        <PriceSlider />
        <SizeList />
        <ColoredCheckbox />
      </Grid>
      <Grid item xs={8}>
        4
      </Grid>
    </Grid>
  )
}
