import { serialize } from 'object-to-formdata'
import { serializeProductList, serializeSingleProduct } from './Serialize'

export const Api = {
  baseUrl: 'http://159.65.126.180/api/',
  getData: function (url, params, method = 'get', isFormData) {
    let headers = {}

    if (!isFormData) {
      headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    } else {
      headers = {
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    }
    return fetch(this.baseUrl + url, {
      method: method.toUpperCase(),
      headers,
      body: isFormData ? serialize(params) : JSON.stringify(params),
    }).then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('')
      }
    })
  },
  getProductList: function (page) {
    return Api.getData('products?page=' + page).then((json) => {
      return serializeProductList(json.data)
    })
  },

  getSingleProduct: (id) => {
    return Api.getData(`products/${id}`).then((json) => {
      return serializeSingleProduct(json)
    })
  },
  sighIn: function (email, password) {
    return Api.getData('auth/login', { email, password }, 'POST')
  },
  sighUp: function (name, email, password, password_confirmation) {
    return Api.getData(
      'register',
      { name, email, password, password_confirmation },
      'post',
    )
  },
  privatePage: function () {
    return Api.getData('auth/me', {}, 'post')
  },

  update: function (id, avatar) {
    return Api.getData(`users/${id}/update`, { avatar }, 'post', true)
  },
}
