function NoteList({ notes }) {
  const { data } = notes;
  return (
    <ul className="container py-8 mx-auto gap-4 grid grid-cols-4 auto-rows-max">
      {data.map((result) => (
        <li key={result.id} className="mx-auto mx-w-sm text-white">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gblue dark:border-gdarkblue dark:hover:bg-gorange"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {result.title}
            </h5>
            <p className="font-normal text-white dark:text-gray-400">
              {result.content}
            </p>
            <time>
              {new Date(result.created_at).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
