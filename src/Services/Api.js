import { ENV, IS_DEV } from '../Config/Env'

import apisauce from 'apisauce'

const hostURL = ENV.API.HOST

const create = (baseURL = hostURL + '/api/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'User-Agent': ENV.API.UA
    },
    timeout: 10000
  })

  /*
  // If you want to add an api key or something
  api.addRequestTransform((request) => {
    request.params['token'] = ''
  })
  */

  /*
  // If you want to add headers with an external token for instance
  api.addAsyncRequestTransform(request => async () => {
    await api.getToken()
            .then((response) => {
              request.headers['Authorization'] = 'Bearer ' + response
            })
            .catch(function () {
              console.tron.log('token reject')
            })
  })
  */

  if (IS_DEV && console.tron) {
    api.addMonitor(console.tron.apisauce)
  }

  // create getUrl to help fixture
  const getUrl = (url, params = {}) => api.get(url.replace(baseURL, '/'), params: params)

  const getFriends = () => api.get('friends')

  return {
    getUrl,
    getFriends
  }
}

// let's return back our create method as the default.
export default {
  create
}
