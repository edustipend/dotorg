import Cookies from 'js-cookie';

const API_ENDPOINT = 'https://edustipend-api-dad9440ec9e5.herokuapp.com/v1/';
const token = Cookies.get('eduTk');
console.log(token);

// export const postData = async function (route = '', data = {}, authorize = true) {
//   let url = `${API_ENDPOINT}${route}`;
//   if (authorize) {
//     url = `${API_ENDPOINT}${route}?jwt=${token}`;
//   }

//   const response = await fetch(`${url}`, {
//     method: 'POST',
//     cache: 'no-cache',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     redirect: 'follow',
//     referrerPolicy: 'no-referrer',
//     body: JSON.stringify(data)
//   });

//   return response.json();
// };

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

export const getData = async function (route = '', data = {}, authorize = true) {
  let url = `${API_ENDPOINT}${route}`;
  if (authorize) {
    url = `${API_ENDPOINT}${route}?jwt=${token}`;
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
