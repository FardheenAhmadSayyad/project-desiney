

import Axios from 'axios';

export const apiRequest = (method, uri, body, token) => {
    if (token) {
        Axios.defaults.headers.common["X-AUTH-TOKEN"] = token;
        Axios.defaults.headers.common["Access-Control-Allow-Origin"] = '*';
    }
    switch (method) {
        case 'GET':
            if (body) {
                return Axios.get(uri,  body);
            } else {
                return Axios.get(uri);
            }
        case 'UPLOAD':
            return Axios.post(uri, body, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
        case 'POST':
            return Axios.post(uri, body, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            );
        case 'PUT':
            return Axios.put(uri, body);
        case 'PATCH':
            return Axios.patch(uri, body);
        case 'DELETE':
            return Axios.delete(uri, body);
        default:
            return Axios.get(uri);
    }
}
