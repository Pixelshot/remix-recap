function NoteList({ notes }) {
  const { data } = notes;
  return (
    <ul className="container mx-auto flex">
      {data.map((result) => (
        <li key={result.id} className="mx-auto mx-w-sm">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {result.title}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
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
