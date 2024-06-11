'use client'
import { useEffect, useState } from 'react';
import type { Job } from '@/types/job';

type ReturnType = {
  likedJobs: Job[] | [];
  addLikedJob: (job: Job) => void;
  removeLikedJob: (jobId: string) => void;
}

export const useLikedJobs = (): ReturnType => {
  const [likedJobs, setLikedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const storedLikedJobs = localStorage.getItem('likedJobs');
    if (storedLikedJobs) {
      setLikedJobs(JSON.parse(storedLikedJobs));
    }
  }, []);

  const addLikedJob = (job: Job) => {
    const updatedLikedJobs = [...likedJobs, job];
    setLikedJobs(updatedLikedJobs);
    localStorage.setItem('likedJobs', JSON.stringify(updatedLikedJobs));
  };

  const removeLikedJob = (jobId: string) => {
    const updatedLikedJobs = likedJobs.filter((job) => job.job_id !== jobId);
    setLikedJobs(updatedLikedJobs);
    localStorage.setItem('likedJobs', JSON.stringify(updatedLikedJobs));
  };

  return { likedJobs, addLikedJob, removeLikedJob };
};
