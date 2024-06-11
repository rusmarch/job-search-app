'use client'
import useSWR from "swr";
import Link from "next/link";
import { getJobDetails } from "@/services/get-jobs";
import { useLikedJobs } from "@/hooks/use-liked-jobs";
import type { Job } from "@/types/job";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { shortenText } from "@/utils/shorten-text";

type Props = {
  jobId: string;
};

export default function JobDetails({ jobId }: Props) {
  const { data, isLoading, error } = useSWR(jobId ? jobId : null, getJobDetails);
  const job = data && data.length > 0 ? data[0] : null;

  const { addLikedJob, removeLikedJob, checkIsLiked } = useLikedJobs();
  const isLiked = checkIsLiked(job.job_id);

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error loading jobs</h3>;

  return (
    <div className="bg-green shadow-md rounded-lg p-4 m-4">
      {job && (
        <>
          <div className="bg-green rounded-lg p-5 my-0.5 border border-gray-300 w-full min-h-[160px] flex flex-col justify-between">
            <div className="flex justify-between mb-2">
              <Link href={`/jobs/${job.job_id}`}>
                <h4 className="text-base font-semibold">{job.job_title}</h4>
              </Link>
              <div className="flex items-start">
                {isLiked ? (
                  <BiSolidLike
                    size={24}
                    color="orange"
                    className="text-yellow-500 cursor-pointer"
                    onClick={() => removeLikedJob(job.job_id)}
                  />
                ) : (
                  <BiLike
                    size={24}
                    className="text-gray-500 cursor-pointer"
                    onClick={() => addLikedJob(job)}
                  />
                )}
              </div>
            </div>
            <p className="text-gray-600">{shortenText(job.job_description, 800)}</p>
            <div className="flex justify-end mt-2">
            </div>
          </div>

        </>
      )}
    </div>
  );
}
