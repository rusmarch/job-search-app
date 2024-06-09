import axios from 'axios';

const BASE_API = 'https://jsearch.p.rapidapi.com';
const API_KEY = '85528b6b8dmsh6ec63d029ce82eap1e7d3cjsn797f70fdb5fd';

export const axiosInstance = axios.create({
  baseURL: BASE_API,
  headers: { 
    'Content-Type': 'application/json',
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'jsearch.p.rapidapi.com',
   },
});

export const endpoints = {
    job: {
      search: (query: string) => `/search?query=${query}`,
      details: (id: string) => `/job-details/${id}`,
    },
}