import {
  Form,
  useActionData,
  useTransition as useNavigation,
} from '@remix-run/react';
import { useEffect, useRef } from 'react';

export default function NewNote() {
  const navigation = useNavigation();
  const data = useActionData();
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
      {data?.message && <p>{data.message}</p>}
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
          minLength={5}
          className="border border-gblue text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 mx-auto p-2.5 bg-white placeholder:font-playfair italic placeholder-gray-400"
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
          minLength={5}
          placeholder="Lorem Ipsum..."
          className="block w-1/2 mx-auto p-4 text-gray-900 border border-gblue rounded-lg sm:text-md focus:ring-3 focus:ring-blue-500 focus:border-blue-500 bg-white placeholder:font-playfair italic placeholder-gray-400"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-64 text-green-700 hover:text-white border border-green-700 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  "
        >
          {isSubmitting ? 'Loading...' : 'Add Note'}
        </button>
      </div>
    </Form>
  );
}
