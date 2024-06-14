'use client'
import { useLocalStorage } from './use-local-storage';
import type { Job, JobList } from '@/types/job';

type ReturnType = {
  likedJobs: JobList | [];
  addLikedJob: (job: Job) => void;
  removeLikedJob: (jobId: string) => void;
}

export const useLikedJobs = (): ReturnType => {
  const [likedJobs, setLikedJobs] = useLocalStorage<JobList | []>('likedJobs', [])

  const addLikedJob = (job: Job) => {
    const updatedLikedJobs = [...likedJobs, job];
    setLikedJobs(updatedLikedJobs);
  };

  const removeLikedJob = (jobId: string) => {
    const updatedLikedJobs = likedJobs.filter((job) => job.job_id !== jobId);
    setLikedJobs(updatedLikedJobs);
  };

  return { likedJobs, addLikedJob, removeLikedJob };
};

  export const checkIsLiked = (likedJobs: JobList, jobId: string): boolean => 
    likedJobs.some((likedJob) => likedJob.job_id === jobId);
  
