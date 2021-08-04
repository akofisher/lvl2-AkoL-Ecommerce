import React, { useState } from 'react'

import { Api } from '../Hooks/CustomApiHook'

export const User = JSON.parse(localStorage.getItem('user'))

if (User) {
  Api.privatePage()
}
console.log(User, 'aKAKKIII')
export const UserContext = React.createContext({})

export const UserProvider = ({ children }) => {
  const [data, setData] = useState({
    user: null,
    isLogedIn: false,
    isLogedOut: true,
  })

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
