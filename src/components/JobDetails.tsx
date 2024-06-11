'use client'
import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getJobDetails } from "@/services/get-jobs";
import type { Job } from "@/types/job";

type Props = {
  jobId: string;
};

export default function JobDetails({ jobId }: Props) {
  const { data, isLoading, error } = useSWR(jobId ? jobId : null, getJobDetails);
  const job = data && data.length > 0 ? data[0] : null;

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error loading jobs</h3>;

  return (
    <div className="bg-green shadow-md rounded-lg p-4 m-4">
      {job && (
        <>
          <h4 className="text-xl font-semibold">{job?.job_title}</h4>
          <p className="text-xl font-semibold">{job?.job_publisher}</p>
          {/* <p className="text-gray-600">{job.job_description}</p> */}
          {/* <p className="text-gray-500">{job.location}</p> */}
          <button onClick={() => console.log(job?.job_id)}>Remove</button>
        </>
      )}
    </div>
  );
}
