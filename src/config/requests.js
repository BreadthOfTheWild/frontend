import axios from 'axios';

export const authAxios = () => {
  return axios.create({
    headers: {
      // Authorization: localStorage.getItem('token')
      "Authorization": "Token b52a1759853f39e01ff956b255e7e0077dfc6b9e"
    }
  });
};