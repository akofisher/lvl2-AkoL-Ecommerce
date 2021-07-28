import React from 'react'
import Loyout from '../loyout/loyout'
import ScrollToTop from '../scroll'
import MainBody from './content/MainBody'
import { useContext } from 'react'
import { UserContext } from '../store/UserContext'

export default function Products() {
  const { updateUser, user } = useContext(UserContext)

  const TOKEN = localStorage.getItem('token')
  const userInformation = localStorage.getItem('user')

  console.log(userInformation, TOKEN, 'USER')
  updateUser(userInformation)
  console.log(user, 'userLOG')

  return (
    <Loyout>
      <ScrollToTop />
      <MainBody />
    </Loyout>
  )
}
