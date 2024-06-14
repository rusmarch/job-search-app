import LikedJobList from "@/components/LikedJobList";

export default function LikedJobsPage() {

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Liked Jobs</h1>
      <div className="list-container">
        <LikedJobList />
      </div>
    </div>
  );
}
