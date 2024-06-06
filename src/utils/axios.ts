import axios, { AxiosRequestConfig } from 'axios';

const BASE_API = 'https://jsearch.p.rapidapi.com';
const API_KEY = '7f863811f4mshef8d5f0229ada5fp18ff82jsnd1c5fa8d921b'

export const axiosInstance = axios.create({
  baseURL: BASE_API,
  headers: { 
    'Content-Type': 'application/json',
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'jsearch.p.rapidapi.com',
   },
});

// export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
//   const [url, config] = Array.isArray(args) ? args : [args];
//   const res = await axiosInstance.get(url, { ...config });
//   return res.data;
// };

export const endpoints = {
    job: {
      list: '/search',
      details: (id: string) => `/job-details/${id}`,
    },
}