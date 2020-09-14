require('dotenv').config()
const ENV_VARS = process.env;

export const google = {
  maps_api_key: ENV_VARS.REACT_APP_GOOGLE_MAPS_API_KEY
};