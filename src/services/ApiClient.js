const API_ENDPOINT = 'https://edustipend-api-dad9440ec9e5.herokuapp.com/v1/'; //TODO: Remove this from hard-coded to env variable;

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
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  });

  return response.json();
};
