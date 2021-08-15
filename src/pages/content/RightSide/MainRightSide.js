import React from 'react'
import BottLabel from '../../../Components/BottLabel'
import TopLabel from '../../../Components/TopLabel'
import FakeStore from './FetchStore'

export default function MainRightSide() {
  return (
    <React.Fragment>
      <TopLabel />
      <FakeStore />
      <BottLabel />
    </React.Fragment>
  )
}
