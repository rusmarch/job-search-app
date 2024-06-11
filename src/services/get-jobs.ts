import { axiosInstance, endpoints } from '@/utils/axios';
import type { Job } from '@/types/job';

export const getJobsBySearch = async (query: string) => {
  const response = await axiosInstance.get(endpoints.job.search(query));
  // if (!response.ok) throw new Error("Unable to fetch posts.");
  return response.data;
};

export const getJobDetails = async (id: string) => {
  const response = await axiosInstance.get(endpoints.job.details(id));
  // if (!response.ok) throw new Error("Unable to fetch posts.");
  return response.data.data;
};
