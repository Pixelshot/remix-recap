import { Form, useActionData } from '@remix-run/react';

export default function NewNote() {
  // const data = useActionData();
  // console.log(data);
  return (
    <Form method="post">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">content</label>
        <input type="text" id="content" name="content" required />
      </p>
      <div className="form-actions">
        <button
          type="submit"
          className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          Create a new note
        </button>
      </div>
    </Form>
  );
}
