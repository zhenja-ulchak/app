
import { useEffect, useState } from 'react';
// @ts-ignore
import { api_v1 } from './keyApi'; // Імпортуємо API



const BASE_URL = `https://api.crosscore.app`;

export const  GetAccountProfile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const response =  api_v1.post(`${BASE_URL}/user/external_provider_proxy/16`, {data: {
      url: `/whoami`,
      method: "GET",
      data: {},
  }}, { withCredentials: true }).then(({ data }: any) => {
    const processedData = {
      ...data,
      data: {
        ...data.data,
        external_data: data?.data?.external_data ,
      },
    };
    console.log('Processed Data:', processedData);
    setData(processedData);
    console.log(response);
    
  })
  .catch((error: any) => {
    console.error('Error fetching data:', error);
  });
 
  }, []);

  return data
};

