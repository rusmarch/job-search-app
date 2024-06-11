import useSWR from "swr";
import { useRouter } from "next/navigation";
import JobDetails from "@/components/JobDetails";
import { getJobDetails } from "@/services/get-jobs";
import type { Job } from "@/types/job";

type Props = {
  params: {
    id: string;
  };
};

export default async function JobsDetailsPage({ params }: Props) {
  const { id } = params;
  return (
    <div>
      <h1>Job Details</h1>
      <JobDetails jobId={id} />
    </div>
  );
}
