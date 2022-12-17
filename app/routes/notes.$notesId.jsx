import { Link, useLoaderData, useCatch } from '@remix-run/react';
import { json } from '@remix-run/node';
import { supabase } from '../client';

export default function NotesPage() {
  const selectedNote = useLoaderData();
  return (
    <div className="">
      <h1>Hello from {selectedNote}</h1>
      <h1>Hello from selectedNote</h1>
    </div>
  );
}

export async function loader({ params }) {
  const { data } = await supabase.from('notes').select('id');

  const supaId = Number(Object.values(params));
  const selectedNote = data.filter((note) => note.id === supaId);

  if (!selectedNote) {
    throw json({ message: `Page does not exist` }, { status: 404 });
  }
  return Number(Object.values(selectedNote[0]));
}

export function ErrorBoundary({ error }) {
  return (
    <main className="flex flex-col text-center items-center py-96">
      <h1 className="text-5xl text-amber-600 font-playfair italic">
        You have encountered an error in the notes section
      </h1>
      <p className="text-3xl text-red-600 font-playfair py-4">
        {error.message}
      </p>
      <button
        type="button"
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
      >
        <Link to="/">Return to Home Page</Link>
      </button>
    </main>
  );
}

export function CatchBoundary() {
  const caughtResponse = useCatch();
  const statusCode = caughtResponse.status;
  const message = caughtResponse.data.message;
  return (
    <main className="mx-auto">
      <h1 className="text-red-500">{statusCode}</h1>
      <p>{message}</p>
    </main>
  );
}
