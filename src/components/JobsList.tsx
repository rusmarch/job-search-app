'use client'
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useAuth } from "@/hooks/use-auth";
import { getJobsBySearch } from "@/services/get-jobs";
import { useLikedJobs } from "@/hooks/use-liked-jobs";
import SearchJobs from "./SearchJobs";
import JobCard from "./JobCard";
import type { Job } from "@/types/job";

export default function JobList() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const profileData = user && user.jobTitle;
  const query = searchQuery || profileData;
  const { data: jobs, isLoading, error } = useSWR(
    query ? query : null,
    getJobsBySearch
  );
  const { likedJobs, addLikedJob, removeLikedJob } = useLikedJobs();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (user && !searchQuery) {
      setSearchQuery(profileData);
    }
  }, [user, profileData, searchQuery]);

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error loading jobs</h3>;

  return (
    <>
      <SearchJobs onSearch={handleSearch} />
      <div className="flex flex-col mt-10 w-full">
        {query && jobs.data.map((job: Job) => (
          <JobCard
            key={job.job_id}
            job={job}
            onLike={addLikedJob}
            onRemoveLike={removeLikedJob}
            isLiked={likedJobs.some((likedJob) => likedJob.job_id === job.job_id)}
          />
        ))}
      </div>
    </>
  );
}
