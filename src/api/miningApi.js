import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { api_v1, api_mrr } from './keyApi'; // Імпортуємо API


const external_provider_id = '15'
const BASE_URL = `https://api.crosscore.app`;

export const  GetAccountProfile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Виклик api_v1
  
    const response =  api_v1.post(`${BASE_URL}/user/external_provider_proxy/${external_provider_id}`, {
      url: `/whoami`,
      method: "GET",
      data: {},
  }).then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

      console.log(response);
  }, []);

  return data
};




// export const GetAccountProfile = async ()=>{
//     let retVal = null;
//     try {

//         const response = await axios.post(`${BASE_URL}/user/external_provider_proxy/${external_provider_id}`, {
//             url: `/account/profile`,
//             method: "GET",
//             withCredentials: true,
//             data: {},
//         });
//         console.log(response);
        
//         retVal = response
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//       }
    
//     return retVal;
// }
