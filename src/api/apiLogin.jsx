const APIGET = "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?filterByFormula=Squad%3D%22150222%22"

const loginApi = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      authorization: "Bearer key2CwkHb0CKumjuM",
      "Content-Type": "application/json",
    },

  };
  fetch(APIGET, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export { loginApi };