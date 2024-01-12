import Cookies from 'js-cookie';

const API_ENDPOINT = 'https://edustipend-api-dad9440ec9e5.herokuapp.com/v1/';
const token = Cookies.get('eduTk');
console.log(token);

export const postData = async function (route = '', data = {}, authorize = true) {
  const headers = {
    'Content-Type': 'application/json'
  };

  if (authorize) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_ENDPOINT}${route}`, {
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: headers,
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });

  return response.json();
};

export const getData = async function (route = '', data = {}, authorize = true) {
  const queryString = Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
  let url = `${API_ENDPOINT}${route}`;
  if (authorize) {
    url = `${API_ENDPOINT}${route}?jwt=${token}${queryString ? `&${queryString}` : ''}`;
  }

  const response = await fetch(url, {
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
