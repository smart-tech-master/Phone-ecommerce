import fetch from 'cross-fetch'
import {
  checkStatus
} from 'utils/responseHandler'
import {
  BACKEND_URL
} from 'common/constants'

const constant = {
  URL: BACKEND_URL
}

let headers = {
  'Content-Type': 'application/json',
}

// Make an api call

export default async (
  url: string,
  method: string = 'GET',
  authorization: boolean
) => {
  if (authorization) headers.auth_token = localStorage.getItem('token')
  return fetch(`${constant.URL}${url}`, {
      method,
      headers: headers
    })
    .then(checkStatus)
    .catch(error => {
      throw error
    })
}