import {GetAccountProfile} from '../../api/miningApi' 

export const AccountProfile = ()=>{
const data = GetAccountProfile() 

return (
    <div>
      <h1>Data from API</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
} 