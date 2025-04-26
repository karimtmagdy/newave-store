import { useNavigate } from "react-router-dom";

const ErrorBoundary = ({ error }: { error: Error }) => {
  const nav = useNavigate();
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
      <div className="rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-red-600">
          Something went wrong!
        </h1>
        <p className="mb-4 text-gray-700">{error.message}</p>
        <button
          onClick={() => nav("/")}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Go back to home
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundary;
