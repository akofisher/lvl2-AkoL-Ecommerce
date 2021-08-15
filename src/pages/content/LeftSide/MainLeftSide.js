import React from 'react'
import CheckboxList from '../../../Components/CheckList'
import ColoredCheckbox from '../../../Components/ColoredCheckbox'
import FirstList from '../../../Components/FirstList'
import PriceSlider from '../../../Components/PriceSlider'
import RadioList from '../../../Components/RadioList'
import RatingList from '../../../Components/RatingList'
import SearchInp from '../../../Components/SearchInp'
import SizeList from '../../../Components/SizeList'

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
