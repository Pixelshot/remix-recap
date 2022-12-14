import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import NewNote from '~/components/NewNote';
import NoteList from '~/components/NoteList';
import { supabase } from '../client';

export default function NotesPage() {
  const notes = useLoaderData();
  return (
    <main className="text-center text-3xl py-8">
      <h1>Welcome to your notes page</h1>
      <NewNote />
      <NoteList notes={notes} />
      <button
        type="button"
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
      >
        <Link to="/">Return to Home Page</Link>
      </button>
    </main>
  );
}

export async function loader() {
  const { data, error } = await supabase.from('notes').select();
  const notes = { data, error };
  return notes;
}

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  const { title, content } = noteData;
  const { data, error } = await supabase
    .from('notes')
    .insert({ title, content })
    .select();
  const notes = { data, error };
  return notes;
}
