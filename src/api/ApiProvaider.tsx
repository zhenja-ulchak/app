import axios from 'axios';
import { AuthForm } from '../types/LoginResponseType';

const BASE_URL = `https://api.crosscore.app`;



export const GetUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user`, {
      withCredentials: true,
    });

    if (response.status === 200) {
      return response.data; // Повертаємо тільки дані
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const GetLogin = async (username: string, password: string) => {
  try {
    const authString = `Basic ${btoa(`${username}:${password}`)}`;
    const response = await axios.get(`${BASE_URL}/user/login`, {
      headers: {
        Authorization: authString,
      },
      withCredentials: true,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const GetLoginRefresh = async (username: string, password: string, ) => {
  try {
    const authString = `Basic ${btoa(`${username}:${password}`)}`;
    const response = await axios.get(`${BASE_URL}/user/login-refresh`, {
      headers: {
        Authorization: authString,
      },
      withCredentials: true,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const Logout = () => {
  // Реалізуйте функціонал виходу
  console.log("Logged out");
};

export const GetTarif = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user/tariff`, {
      withCredentials: true,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getHealth = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tools/health`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
