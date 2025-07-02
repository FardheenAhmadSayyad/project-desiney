// src/global/utils.js
import Axios from 'axios';

// 🔐 Replace this with your actual domain, e.g., https://api.example.com
const BASE_URL = 'https://your-api-domain.com';

export const apiRequest = (method, uri, body, token) => {
  const config = {
    method,
    url: `${BASE_URL}${uri}`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      ...(token && { 'X-AUTH-TOKEN': token }),
    },
    ...(body && ['POST', 'PUT', 'PATCH', 'UPLOAD', 'DELETE'].includes(method) && { data: body }),
  };

  if (method === 'UPLOAD') {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else if (['POST', 'PUT', 'PATCH'].includes(method)) {
    config.headers['Content-Type'] = 'application/json';
  }

  return Axios(config);
};
