import Link from "next/link";
import Image from 'next/image';
import { BiSolidLike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { shortenText } from "@/utils/shorten-text";
import type { Job } from "@/types/job";

type Props = {
  job: Job;
  onLike: (likedJob: Job) => void;
  onRemoveLike: (id: string) => void;
  isLiked: boolean;
};

export default function JobCard({
  job,
  onLike,
  onRemoveLike,
  isLiked,
}: Props) {
  return (
    <div className="bg-green shadow-md rounded-lg p-5 my-0.5 border border-gray-300 w-full min-h-[160px] flex flex-col justify-between">
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
              onClick={() => onRemoveLike(job.job_id)}
            />
          ) : (
            <BiLike
              size={24}
              className="text-gray-500 cursor-pointer"
              onClick={() => onLike(job)}
            />
          )}
        </div>
      </div>
      <p className="text-gray-600">{shortenText(job.job_description, 500)}</p>
      <div className="flex justify-end mt-2">
        <button className="bg-blue-500 text-white text-sm px-5 py-1 rounded" >
          <Link href={`/jobs/${job.job_id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
}
