import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const localUser: string = localStorage.getItem('user') as string;
const user = JSON.parse(localUser);

const refreshAuthLogic = (failedRequest: any) =>
  axios
    .post('http://localhost:3000/api/auth/refreshtoken', {
      refreshToken: user.refreshToken
    })
    .then((tokenRefreshResponse) => {
      const newAccessToken = tokenRefreshResponse.data.accessToken;
      localStorage.setItem(
        'user',
        JSON.stringify({
          ...user,
          accessToken: newAccessToken
        })
      );
      failedRequest.response.config.headers['x-auth-token'] = tokenRefreshResponse.data.accessToken;
      return Promise.resolve();
    });

const myAxios = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'x-auth-token': user.accessToken
  }
});

createAuthRefreshInterceptor(myAxios, refreshAuthLogic);

export default myAxios;
