import axios from 'axios';

const BASE_API = 'https://jsearch.p.rapidapi.com';
const API_KEY = '66e90568cbmsh301c370f045b79bp149c00jsn4afaef3abbd1';

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
      details: (id: string) => `/job-details?job_id=${id}`,
    },
}