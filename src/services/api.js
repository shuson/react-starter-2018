import axios from 'axios'

export const apiConfig = {
  // root endpoint
  api: 'your-api-server',

  // api endpoints
  login: 'users/auth',
  logout: 'users/session',
  changepwd: 'users/changePassword'
}

export function createAxiosInstance(accessToken) {
  let headers = {
    'Content-Type': 'application/json',
  }
  if(accessToken) {
    headers = {
      ...headers,
      'Authorization': `Token ${accessToken}`
    }
  }

  return axios.create({
    baseURL: apiConfig.api,
    timeout: 180000,
    headers: headers
  });
}
