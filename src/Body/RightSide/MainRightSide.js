import React from 'react'
import TopLabel from './components/TopLabel'
import FakeStore from './components/FetchStore'
import BottLabel from './components/BottLabel'

export default function MainRightSide() {
  return (
    <React.Fragment>
      <TopLabel />
      <FakeStore />
      <BottLabel />
    </React.Fragment>
  )
}
