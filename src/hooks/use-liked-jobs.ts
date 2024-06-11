'use client'
import type { Job } from '@/types/job';
import { useLocalStorage } from './use-local-storage';

type ReturnType = {
  likedJobs: Job[] | [];
  addLikedJob: (job: Job) => void;
  removeLikedJob: (jobId: string) => void;
  checkIsLiked: (id: string) => boolean;
}

export const useLikedJobs = (): ReturnType => {
  const [likedJobs, setLikedJobs] = useLocalStorage<Job[] | []>('likedJobs', [])

  const addLikedJob = (job: Job) => {
    const updatedLikedJobs = [...likedJobs, job];
    setLikedJobs(updatedLikedJobs);
  };

  const removeLikedJob = (jobId: string) => {
    const updatedLikedJobs = likedJobs.filter((job) => job.job_id !== jobId);
    setLikedJobs(updatedLikedJobs);
  };

  const checkIsLiked = (jobId: string): boolean => 
    likedJobs.some((job) => job.job_id === jobId);
  

  return { likedJobs, addLikedJob, removeLikedJob, checkIsLiked };
};
