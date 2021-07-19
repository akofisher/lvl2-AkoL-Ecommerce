import React from 'react'
import FirstList from './components/FirstList'
import SearchInp from './components/SearchInp'
import CheckboxList from './components/CheckList'
import RatingList from './components/RatingList'
import RadioList from './components/RadioList'
import PriceSlider from './components/PriceSlider'
import SizeList from './components/SizeList'
import ColoredCheckbox from './components/ColoredCheckbox'

export default function MainLeftSide() {
  return (
    <React.Fragment>
      <FirstList />
      <SearchInp />
      <CheckboxList />
      <RatingList />
      <RadioList />
      <PriceSlider />
      <SizeList />
      <ColoredCheckbox />
    </React.Fragment>
  )
}
