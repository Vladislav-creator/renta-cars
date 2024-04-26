import axios from 'axios';



export const getAllcarPages = async (page) => {
  const { data } = await axios.get(`https://65e77cfb53d564627a8ee5a5.mockapi.io/api/v1/auto-rent?page=${page}&limit=12`);
   return data;
  
};

export const getAllcar = async () => {
  const { data } = await axios.get(
    `https://65e77cfb53d564627a8ee5a5.mockapi.io/api/v1/auto-rent`
  );

  return data;
};

export const getCarById = async (carId) => {
  const { data } = await axios.get(
    `https://65e77cfb53d564627a8ee5a5.mockapi.io/api/v1/auto-rent/${carId}`
  );

  return data;
};