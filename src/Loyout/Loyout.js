import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ButtonAppBar from '../Header/NavBar'
import BackgroundImg from '../Header/BcgImg'
import FirstList from '../Body/LeftSide/FirstList'
import SearchInp from '../Body/LeftSide/SearchInp'
import CheckboxList from '../Body/LeftSide/CheckList'
import RatingList from '../Body/LeftSide/RatingList'
import RadioList from '../Body/LeftSide/RadioList'
import PriceSlider from '../Body/LeftSide/PriceSlider'
import SizeList from '../Body/LeftSide/SizeList'
import ColoredCheckbox from '../Body/LeftSide/ColoredCheckbox'
import TopLabel from '../Body/RightSide/TopLabel'
import FakeStore from '../Body/RightSide/FetchStore'
import Social from '../Footer/Social'
import Informations from '../Footer/Informations'
import BottLabel from '../Body/RightSide/BottLabel'

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px',
  },
  spaceBTW: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

export default function Loyout() {
  const classes = useStyles()
  return (
    <Grid container className={classes.grid}>
      {/* HEADER */}
      <Grid item xs={12}>
        <ButtonAppBar />
        <BackgroundImg />
      </Grid>

      {/* BODY */}
      <Grid container xs={12}>
        {/* LEFT */}
        <Grid item xs={12} sm={4}>
          <FirstList />
          <SearchInp />
          <CheckboxList />
          <RatingList />
          <RadioList />
          <PriceSlider />
          <SizeList />
          <ColoredCheckbox />
        </Grid>
        {/* RIGHT */}
        <Grid item xs={12} sm={8} className={classes.spaceBTW}>
          <TopLabel />
          <FakeStore />
          <BottLabel />
        </Grid>
      </Grid>

      {/* FOOTER */}
      <Grid item xs={12}>
        <Social />
        <Informations />
      </Grid>
    </Grid>
  )
}
