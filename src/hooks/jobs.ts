'use client'
import axios, { AxiosRequestConfig } from 'axios';
import useSWR from 'swr';
import { axiosInstance, endpoints } from '@/utils/axios';
import type { Job } from '@/types/jobs';

const fetcher = (url: string) => axiosInstance.get(url).then(res => res.data);

export const useGetJobs = (query: string) => {
  const { data, isLoading, error } = useSWR(`/search?query=${query}`, fetcher);
  
  return {
    data,
    isLoading,
    error,
  };
}

