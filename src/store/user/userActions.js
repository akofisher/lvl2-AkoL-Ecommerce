import { Api } from '../../Hooks/CustomApiHook'
import { setLogedIn, setUser } from './userActionsCreator'

// CONSTs

export const SET_USER = 'SET_USER'
export const SET_LOGEDIN = 'SET_LOGEDIN'
export const SET_TOKEN = 'SET_TOKEN'

// CONSTs

export const isToken = (dispatch) => {
  const token = localStorage.getItem('token')
  if (token) {
    Api.privatePage()
      .then((json) => {
        dispatch(setUser(json))
        dispatch(setLogedIn(true))
      })
      .catch((error) => {
        console.log(error)
        localStorage.removeItem('token')
      })
  }
}
