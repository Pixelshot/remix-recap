import { Link } from '@remix-run/react';

function NoteList({ notes }) {
  const { data } = notes;
  return (
    <ul className="container py-8 mx-auto gap-4 grid sm:grid-cols-2 md:grid-cols-4 overflow-auto max-w-sm md:max-w-max">
      {data.map((result) => (
        <li key={result.id} className="mx-auto">
          <Link
            to="/notes"
            className="text-gblue block p-6 border-2 border-gorange rounded-lg transition ease-in-out shadow-md hover:shadow-xl hover:bg-gray-100 bg-white dark:hover:bg-gskyblue lg:w-64"
          >
            <h5 className="mb-2 text-2xl font-playfair italic tracking-tight text-gblue">
              {result.title}
            </h5>
            <p className="font-playfair text-sm text-gdarkblue h-16 overflow-auto">
              {result.content}
            </p>
            <time className="text-xl font-playfair italic">
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
