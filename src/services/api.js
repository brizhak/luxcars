import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://6500459418c34dee0cd49ffa.mockapi.io',
});

export const fetchBrands = async () => {
  const { data } = await instance.get('/brands');
  return data;
};

export const fetchCarsList = async page => {
  const limit = 12;
  const { data } = await instance.get(`/cars?page=${page}&limit=${limit}`);
  return data;
};

export const fetchCarById = async(id) => {
  const {data} = await instance.get(`/cars?id=${id}`)
  return data[0]
}
