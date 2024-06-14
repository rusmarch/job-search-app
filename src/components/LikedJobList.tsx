'use client'
import { checkIsLiked, useLikedJobs } from "@/hooks/use-liked-jobs";
import JobCard from "./JobCard";
import type { Job } from "@/types/job";

export default function LikedJobList() {
  const { likedJobs, addLikedJob, removeLikedJob } = useLikedJobs();
  return (
    <div className="flex flex-col mt-5 w-full">
      {likedJobs && likedJobs.map((job: Job) => (
        <JobCard
          key={job.job_id}
          job={job}
          onLike={addLikedJob}
          onRemoveLike={removeLikedJob}
          isLiked={checkIsLiked(likedJobs, job.job_id)}
        />
      ))}
    </div>
  );
}
