// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { create } from 'apisauce';
// import { CamelcaseSerializer } from 'cerealizr';

// import LocalStorage from '~services/LocalStorageService';
// import { NON_SERIALIZABLE_URLS } from '~constants/urls';
// import { ROUTES } from '~constants/routes';

// const camelSerializer = new CamelcaseSerializer();
// const notSerializableUrl = url => NON_SERIALIZABLE_URLS.includes(url);

export const createApiWithURL = baseURL =>
  create({
    baseURL,
    timeout: 15000
  });

const api = create({
  baseURL: 'http://localhost:3001',
  timeout: 15000
});

export const headers = {
  AUTHORIZATION: 'Authorization'
};

export const setAuthHeader = token => api.setHeader(headers.AUTHORIZATION, `Bearer ${token}`);
export const removeAuthHeader = () => api.deleteHeader(headers.AUTHORIZATION);

// api.addResponseTransform(response => {
//   if (response.data && !notSerializableUrl(response.config.url)) {
//     response.data = camelSerializer.serialize(response.data);
//   }
  // if (response.status === 401 && !!LocalStorage.getTokenManager()) {
  //   LocalStorage.removeTokenManager();
  //   window.location.replace(ROUTES.LOGIN.path);
  // }
// });

export default api;

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }
