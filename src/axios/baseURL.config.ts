const baseURL =
  import.meta.env.VITE_REACT_ENVIRONMENT === "dev"
    ? import.meta.env.VITE_APP_API_URL_DEV
    : import.meta.env.VITE_APP_API_URL_PROD;
export default baseURL;
// TODO console.log(`*${env.REACT_ENVIRONMENT}* Environments\nBaseURL : ${baseURL}`);
