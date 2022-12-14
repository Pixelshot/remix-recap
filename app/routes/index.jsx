import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div className="flex flex-col">
      <h1 className="py-8 text-3xl text-center text-rose-800 font-bold">
        Your One Stop Notes App!
      </h1>
      <button
        type="button"
        className=" text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
      >
        <Link to="/notes">Click here to view your notes</Link>
      </button>
    </div>
  );
}
