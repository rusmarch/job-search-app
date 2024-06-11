import Link from "next/link";
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
  isLiked
}: Props) {
  return (
    <div className="bg-green shadow-md rounded-lg p-4 m-4">
      <h4 className="text-xl font-semibold">{job.job_title}</h4>
      {/* <p className="text-gray-600">{job.job_description}</p> */}
      {/* <p className="text-gray-500">{job.location}</p> */}
      <button disabled={isLiked} onClick={() => onLike(job)}>Like</button>
      <button
        disabled={!isLiked}
        onClick={() => onRemoveLike(job.job_id)}
      >
        Dislike
      </button>
      <Link href={`/jobs/${job.job_id}`}>Details</Link>
    </div>
  );
}
