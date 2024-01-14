import Cookies from 'js-cookie';
const { REACT_APP_API_BASE_URL, REACT_APP_API_VERSION } = process.env;

const API_ENDPOINT = `${REACT_APP_API_BASE_URL}/${REACT_APP_API_VERSION}/`;
const token = Cookies.get('eduTk');
export const STIPEND_APPLY = 'user/stipend/apply';
export const LOGOUT = 'logout';
export const APPLICATION_HISTORY = 'user/stipend/application-history';

export const authorizedPost = async function (route = '', data = {}) {
  const url = `${API_ENDPOINT}${route}?jwt=${token}`;

  const response = await fetch(`${url}`, {
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });

  return response.json();
};

export const postData = async function (route = '', data = {}) {
  const response = await fetch(`${API_ENDPOINT}${route}`, {
    method: 'POST',
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });

  return response.json();
};

export const getData = async function (route = '') {
  const response = await fetch(`${API_ENDPOINT}${route}`, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  });

  return response.json();
};
