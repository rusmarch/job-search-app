'use client'
import { FormEventHandler, useState } from "react";

type Props = {
  onSearch: (query: string) => void;
}

export default function SearchJobs({ onSearch }: Props) {
  const [query, setQuery] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> =
    async (event) => {
      event.preventDefault();
      onSearch(query);
      setQuery('');
    };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center mb-4"
    >
      <input
        type="search"
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 w-full"
        placeholder="search job"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        type="submit"
        disabled={!query}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >Search</button>
    </form>
  );
}
