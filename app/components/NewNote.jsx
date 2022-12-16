import {
  Form,
  useActionData,
  useTransition as useNavigation,
} from '@remix-run/react';
import { useEffect, useRef } from 'react';

export default function NewNote() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  let formRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current?.reset();
      // taskInputRef.current?.focus();
    }
  }, [isSubmitting]);
  return (
    <Form method="post" ref={formRef}>
      <div className="my-6">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ></label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title..."
          // ref={taskInputRef}
          required
          className="border border-gblue text-gray-900 rounded-lg focus:ring-gmustard focus:border-blue-500 block w-1/2 mx-auto p-2.5 bg-gblue dark:border-gray-600 placeholder:font-playfair italic dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="content"
          className="block mb-2 text-gray-900 dark:text-white"
        ></label>
        <textarea
          // type="text"
          id="content"
          name="content"
          required
          placeholder="Lorem Ipsum..."
          className="block w-1/2 mx-auto p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 bg-gdarkblue dark:border-gray-600 placeholder:font-playfair italic dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="form-actions">
        <button
          type="submit"
          disabled={isSubmitting}
          className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          {isSubmitting ? 'Loading...' : 'Add Note'}
        </button>
      </div>
    </Form>
  );
}
