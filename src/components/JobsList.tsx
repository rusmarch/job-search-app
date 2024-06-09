'use client'
import { useEffect, useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { getJobsBySearch } from "@/services/getJobs";
import SearchJobs from "./SearchJobs";
import type { Job } from "@/types/jobs";

export default function JobList() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const profileData = user && user.jobTitle;
  const query = searchQuery || profileData;
  const { data: jobs, isLoading, error } = useSWR(
    query ? query : null,
    getJobsBySearch
  );

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
    <div>
      <SearchJobs onSearch={handleSearch} />
      <ul>
        {query && jobs.data.map((job: Job) => (
          <li key={job.job_id}>
            <Link href={`/blog/${job.job_id}`}>{job.job_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
