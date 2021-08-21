import { Api } from '../../Hooks/CustomApiHook'
import { setLoading, setLogedIn, setUser } from './userActionsCreator'

// CONSTs

export const SET_USER = 'SET_USER'
export const SET_LOGEDIN = 'SET_LOGEDIN'
export const SET_TOKEN = 'SET_TOKEN'
export const SET_LOADING = 'SET_LOADING'

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
      .finally(() => setLoading(false))
  }
}

// export const updateUserProfile = (currentUserId, values) => (dispatch) => {
//   Api.update(currentUserId, values).then((data) => dispatch(setUser(data)))
// }
