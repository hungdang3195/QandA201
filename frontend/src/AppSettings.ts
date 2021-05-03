export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qanda2021-backend.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qanda2021-backend-staging.azurewebsites.net'
    : 'http://localhost:5000';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'digimed.us.auth0.com',
  client_id: 'bt3pDZ5M4ccMJklJeL0BHaUSKL5HPGZh',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://digimed.us.auth0.com/api/v2/',
};
