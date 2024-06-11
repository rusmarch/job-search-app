import axios from 'axios';

const BASE_API = 'https://jsearch.p.rapidapi.com';
const API_KEY = '45203ca76emshf28a2a359616e77p1463f3jsnf0e7a17a5d90';

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