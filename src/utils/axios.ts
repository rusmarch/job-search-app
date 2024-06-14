import axios from 'axios';

const BASE_API = 'https://jsearch.p.rapidapi.com';
const API_KEY = 'a797884676msh124cee9377b0a15p17626djsn58a183601bd6';

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