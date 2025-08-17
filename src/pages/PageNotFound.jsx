import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="h-screen bg-gray-50 flex items-center justify-center p-12">
      <div className="bg-white border border-gray-200 rounded-md p-12 max-w-4xl w-full text-center">
        <Heading as="h1" className="mb-8">
          The page you are looking for could not be found 😢
        </Heading>
        <button
          onClick={moveBack}
          className="px-6 py-3 text-lg font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
