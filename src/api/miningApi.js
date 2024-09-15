import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { api_v1, api_mrr } from './keyApi'; // Імпортуємо API


const external_provider_id = '15'
const BASE_URL = `https://api.crosscore.app`;

export const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Виклик api_v1
    api_v1.get('/some-endpoint')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};




export const GetAccountProfile = async ()=>{
    let retVal = null;
    try {

        const response = await axios.post(`${BASE_URL}/user/external_provider_proxy/${external_provider_id}`, {
            url: `/account/profile`,
            method: "GET",
            withCredentials: true,
            data: {},
        });
        console.log(response);
        
        retVal = response
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    
    return retVal;
}
