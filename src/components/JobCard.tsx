import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { BiSolidLike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";

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
    <div className="bg-green shadow-md rounded-lg p-3 my-0.5 border border-gray-300 w-full">
      <div className="flex justify-between">
        <h4 className="text-base font-semibold">{job.job_title}</h4>
        <div className="flex items-start">
          {isLiked ? (
            <BiSolidLike
              size={22}
              color="orange"
              className="text-yellow-500 cursor-pointer"
              onClick={() => onRemoveLike(job.job_id)}
            />
          ) : (
            <BiLike
              size={22}
              className="text-gray-500 cursor-pointer"
              onClick={() => onLike(job)}
            />
          )}
        </div>
      </div>
      {/* <p className="text-gray-600">{job.job_description}</p> */}
      {/* <p className="text-gray-500">{job.location}</p> */}
      <div className="flex justify-end items-end align-items gap-2">
        <button className="bg-blue-500 text-white text-sm px-4 rounded" >
          <Link href={`/jobs/${job.job_id}`}>Details</Link>
        </button>
      </div>
    </div>
  );
}
