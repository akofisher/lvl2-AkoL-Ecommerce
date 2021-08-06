import React, { useState } from 'react'

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
