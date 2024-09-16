import crypto from 'crypto-js';
import axios from 'axios';

// Функція для отримання кукісів на клієнті
let cookies = () => undefined;

if (typeof window !== 'undefined') {
  // Якщо це клієнтська частина
  cookies = () => document.cookie;
}

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
  const cookieData = cookies();
  if (cookieData) {
    request.headers['Cookie'] = cookieData;
  }
  return request;
});

// Створення екземпляра api_mrr
const api_mrr = axios.create({
  baseURL: process.env.API_AXIOS_MRR_URL ,
});

// Перехоплювач запитів для api_mrr
api_mrr.interceptors.request.use((request) => {
  // if (typeof window !== 'undefined' && window.location.pathname.includes('mining')) {
    const api_key = '47e5606e1009cf6ae8947807df11615777bccfbdb4e6b9651538e588aadf70bf';
    const api_secret = '3bca54570a8e2d1ed764d1bbae4c2f516381d681c15fcb84e887e0205b496f5f';

    const mtime = new Date().getTime().toString();
    const nonce = mtime.substr(0, 10) + mtime.substr(-5);

    const endpoint = request.url;
    const sign_string = api_key + nonce + endpoint;

    const sign = crypto.HmacSHA1(sign_string, api_secret).toString(crypto.enc.Hex);

    request.headers['x-api-sign'] = sign;
    request.headers['x-api-key'] = api_key;
    request.headers['x-api-nonce'] = nonce;
  // }

  return request;
});

export { api_v1, api_mrr };
