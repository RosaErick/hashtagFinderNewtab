const APIGET = "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?filterByFormula=Squad%3D%22150222%22"



export async function getList(){
  
  const requestOptions = {
    method: "GET",
    headers: {
      authorization: "Bearer key2CwkHb0CKumjuM",
      "Content-Type": "application/json",
    },

  };
  
  const response = await fetch(APIGET, requestOptions);
  const data = await response.json();
  console.log(data);
  return data;
  
    
};
