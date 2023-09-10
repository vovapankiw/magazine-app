import Axios, { InternalAxiosRequestConfig } from 'axios';

import { API_URL } from '@/config';
// import { useNotificationStore } from '@/stores/notifications';
// import storage from '@/utils/storage';

// function authRequestInterceptor(config: AxiosRequestConfig) {
//   const token = storage.getToken();
//   if (token) {
//     config.headers.authorization = `${token}`;
//   }
//   config.headers.Accept = 'application/json';
//   return config;
// }

export const httpClient = Axios.create({
  baseURL: API_URL
});

export const addAccessTokenInterceptor = (getAccessTokenSilently: () => Promise<string>) => {
  httpClient.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    const newConfig = { ...config };
    const token = await getAccessTokenSilently();
    newConfig.headers.Authorization = `Bearer ${token}`;
    return newConfig;
  });
};

// axios.interceptors.request.use(authRequestInterceptor);
// httpClient.interceptors.response.use(
//   (response) => response.data,
//   (error) =>
//     // const message = error.response?.data?.message || error.message;
//     // useNotificationStore.getState().addNotification({
//     //   type: 'error',
//     //   title: 'Error',
//     //   message
//     // });

//     Promise.reject(error)
// );
