import axios from 'axios';


const BASE_URL = `https://api.crosscore.app`;
export const GetUsers = async (username: any, password: any)=>{
    let retVal = null;
    try {

        const response = await axios.get(`${BASE_URL}/user`, {
            withCredentials: true,
       
        });
        
        retVal = response
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    
    return retVal;
}

// export const GetUsers2 = ()=>{
//     let retVal = null;
   
//     retVal = userRespons;
//     return retVal;
// }

//GetLogin("INDYN\\tester","1234")
export const GetLogin = async (username: string, password: string) => {
    try {
      const authString = `Basic ${btoa(`${username}:${password}`)}`;
      const response = await axios.get(`${BASE_URL}/user/login`, {
        headers: {
          Authorization: authString,
        },
        withCredentials: true 
      });
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
    
  };
  
  export const GetLoginRefresh = async (username: any, password: any) => {
      console.log(username);
      
    try {
 
      const authString = `Basic ${btoa(`${username}:${password}`)}`;
      
  
      const response = await axios.get(`${BASE_URL}/user/login-refresh`, {
        headers: {
          Authorization: authString,
        },
        withCredentials: true 
      });
  
      console.log(response);
      
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
    
  };


  export const Logout = ()=>{
      console.log("Logout out");
      
  }


export const GetTarif = async () => {
    try {
  
      const response = await axios.get(`${BASE_URL}/user/tariff`, {

        withCredentials: true 
      });
  
   
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

export const getHealth = async () => {
    try {
      const response = await axios.get(BASE_URL + "/tools/health");
   
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };