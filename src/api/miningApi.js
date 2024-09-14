import axios from 'axios';

const external_provider_id = '15'
const BASE_URL = `https://api.crosscore.app`;
export const GetaAccountProfile = async ()=>{
    let retVal = null;
    try {

        const response = await axios.post(`${BASE_URL}/user/external_provider_proxy/${external_provider_id}`, {
            url: `/account/profile`,
            method: "GET",
            withCredentials: true,
            data: {},
        });
        
        retVal = response
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    
    return retVal;
}