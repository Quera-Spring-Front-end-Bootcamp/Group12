import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

function getAccessToken(): string {
  if (localStorage.getItem('user')) {
    const localUser: string = localStorage.getItem('user') as string;
    const user = JSON.parse(localUser);
    return user.accessToken;
  }
  return '';
}
function getRefreshToken(): string {
  if (localStorage.getItem('user')) {
    const localUser: string = localStorage.getItem('user') as string;
    const user = JSON.parse(localUser);
    return user.refreshToken;
  }
  return '';
}
function getUser(): object {
  if (localStorage.getItem('user')) {
    const localUser: string = localStorage.getItem('user') as string;
    const user = JSON.parse(localUser);
    return user;
  }
  return {};
}
const refreshAuthLogic = (failedRequest: any) =>
  axios
    .post('http://localhost:3000/api/auth/refreshtoken', {
      refreshToken: getRefreshToken
    })
    .then((tokenRefreshResponse) => {
      const newAccessToken = tokenRefreshResponse.data.accessToken;
      localStorage.setItem(
        'user',
        JSON.stringify({
          ...getUser(),
          accessToken: newAccessToken
        })
      );
      failedRequest.response.config.headers['x-auth-token'] = tokenRefreshResponse.data.accessToken;
      return Promise.resolve();
    });

const myAxios = axios.create({
  baseURL: 'http://localhost:3000/api'
});
myAxios.interceptors.request.use((config: any) => {
  if (localStorage.getItem('user')) {
    config.headers = {
      'x-auth-token': getAccessToken()
    };
  }
  return config;
});
createAuthRefreshInterceptor(myAxios, refreshAuthLogic);

export default myAxios;
