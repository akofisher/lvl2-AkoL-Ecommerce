import { serializeProductList } from './Serialize'
import { serializeSingleProduct } from './Serialize'

export const Api = {
  baseUrl: 'http://159.65.126.180/api/',
  getData: function (url, params, method = 'get', confirmation) {
    return fetch(this.baseUrl + url, {
      method: method.toUpperCase(),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(params),
    }).then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error()
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
      'POST',
    )
  },
  privatePage: function () {
    return Api.getData('auth/me', {}, 'post')
  },
}
