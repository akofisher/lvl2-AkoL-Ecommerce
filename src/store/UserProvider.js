import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const updateUser = (update) => {
    setUser(update)
  }

  return (
    <UserContext.Provider
      value={{
        user: user,
        updateUser: updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
