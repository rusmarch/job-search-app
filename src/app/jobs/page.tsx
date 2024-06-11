import JobList from "@/components/JobsList";

export default function JobsPage() {

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Job List</h1>
      <div className="px-30 py-20">
        <JobList />
      </div>
    </div>
  );
}
