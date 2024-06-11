'use client'
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useLikedJobs } from "@/hooks/useLikedJobs";
import JobCard from "./JobCard";
import type { Job } from "@/types/job";

export default function LikedJobList() {
  const { authState: { user } } = useAuth();
  const { likedJobs, addLikedJob, removeLikedJob } = useLikedJobs();


  return (
    <div>
      <ul>
        {likedJobs && likedJobs.map((job: Job) => (
          <JobCard
            key={job.job_id}
            job={job}
            onLike={addLikedJob}
            onRemoveLike={removeLikedJob}
            isLiked={likedJobs.some((likedJob) => likedJob.job_id === job.job_id)}
          />
        ))}
      </ul>
    </div>
  );
}
