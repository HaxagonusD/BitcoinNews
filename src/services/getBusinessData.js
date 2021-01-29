import axios from "axios";

export default async function getBusinessData() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = process.env.REACT_APP_API_BUSINESS_URL;
  const query = `${url}${apiKey}`;
  const response = await axios.get(query);
  const { data } = response;
  return data;
}
