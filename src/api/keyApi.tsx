
import axios from 'axios';

// Функція для отримання кукісів на клієнті


const getCookies = (): string | undefined => {
  if (typeof window !== 'undefined') {
    return document.cookie;
  }
  return undefined;
};

// Створення екземпляра api_v1
const api_v1 = axios.create({
  baseURL: process.env.API_AXIOS_V1_URL || process.env.NEXT_PUBLIC_API_AXIOS_V1_URL,
  withCredentials: true,
});

// Перехоплювач відповіді для api_v1
api_v1.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

// Перехоплювач запитів для api_v1
api_v1.interceptors.request.use((request) => {
  const cookieData = getCookies();
  if (cookieData) {
    request.headers['Cookie'] = cookieData;
  }
  return request;
});

// Створення екземпляра api_mrr
const api_mrr = axios.create({
  baseURL: process.env.API_AXIOS_MRR_URL ,
});



export { api_v1, api_mrr };
