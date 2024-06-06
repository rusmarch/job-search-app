'use client'
import Link from "next/link";
import { useGetJobs } from "@/hooks/jobs";
import type { Job } from "@/types/jobs";

export default function JobList() {
  const { data, isLoading, error } = useGetJobs('python developer in texas, usa');
  console.log(typeof data);
  return isLoading ? (
    <h3>Loading... </h3>
  ) : (
    <ul>
      {/* {data && data.map((job: Job) => (
        <li key={job.job_id}>
          <Link href={`/blog/${job.job_id}`}>{job.job_title}</Link>
        </li>
      ))} */}
    </ul>
  );
}
