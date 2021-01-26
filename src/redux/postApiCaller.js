import fetch from 'cross-fetch'
import { checkStatus, parseJSON } from 'utils/responseHandler'
import { BACKEND_URL } from 'common/constants'

const constant = {
  URL: BACKEND_URL
}

// Make an api call
export default async (
  url: string,
  method: string = 'post',
  body: Object,
  autherization: boolean
) => {
  var headers = {}
  if (autherization) {
    headers = {
      'Content-Type': 'application/json',
      auth_token: localStorage.getItem('token')
    }
  } else {
    headers = {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${constant.URL}${url}`, {
    method,
    body: JSON.stringify(body),
    headers: headers
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch(error => {
      throw error
    })
}
