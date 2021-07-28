import { createContext } from 'react'

export const UserContext = createContext({
  user: {},
  updateUser: () => {
    throw new Error('User, error')
  },
})
