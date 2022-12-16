import { Link } from '@remix-run/react';

function NoteList({ notes }) {
  const { data } = notes;
  return (
    <ul className="container py-8 mx-auto gap-4 grid sm:grid-cols-2 md:grid-cols-4 overflow-auto">
      {data.map((result) => (
        <li key={result.id} className="mx-auto text-white">
          <Link
            to="/notes"
            className="block p-6 border-2 border-gblue hover:border-4 rounded-lg transition ease-in-out shadow-md hover:shadow-xl hover:bg-gray-100 dark:bg-gblue dark:hover:bg-gskyblue"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {result.title}
            </h5>
            <p className="text-white dark:text-gray-300 h-16 overflow-auto">
              {result.content}
            </p>
            <time>
              {new Date(result.created_at).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
