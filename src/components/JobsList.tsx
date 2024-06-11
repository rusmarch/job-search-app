'use client'
import { useEffect, useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { getJobsBySearch } from "@/services/getJobs";
import { useLikedJobs } from "@/hooks/useLikedJobs";
import SearchJobs from "./SearchJobs";
import JobCard from "./JobCard";
import type { Job } from "@/types/job";

export default function JobList() {
  const { authState: { user } } = useAuth();
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const profileData = user && user.jobTitle;
  const query = searchQuery || profileData;
  const { data: jobs, isLoading, error, mutate } = useSWR(
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
  console.log(likedJobs);
  return (
    <div>
      <SearchJobs onSearch={handleSearch} />
      <ul>
        {query && jobs.data.map((job: Job) => (
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
