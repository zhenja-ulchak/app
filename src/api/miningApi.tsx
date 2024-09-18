import axios from 'axios';
import React, { useEffect, useState } from 'react';
// @ts-ignore
import { api_v1, api_mrr } from './keyApi'; // Імпортуємо API


const external_provider_id = '15'
const BASE_URL = `https://api.crosscore.app`;

export const  GetAccountProfile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Виклик api_v1
    // {url: "/rig/mine", method: "GET", data: {}}
    // data
    // : 
    // {}
    // method
    // : 
    // "GET"
    // url
    // : 
    // "/rig/mine"
    const response =  api_v1.post(`${BASE_URL}/user/external_provider_proxy/16`, {data: {
      url: `/whoami`,
      method: "GET",
      data: {},
  }}, { withCredentials: true }) .then(({ data }: any) => {
    const processedData = {
      ...data,
      data: {
        ...data.data,
        external_data: data?.data?.external_data ,
      },
    };
    console.log('Processed Data:', processedData);
    return processedData;
  })
  .catch((error: any) => {
    console.error('Error fetching data:', error);
  });
 
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
