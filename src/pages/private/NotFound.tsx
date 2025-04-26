import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white py-12">
      <div className="text-center">
        <h2 className="mb-4 text-6xl font-bold text-zinc-950">404</h2>
        <h3 className="mb-6 text-2xl font-semibold text-zinc-600">
          Page Not Found
        </h3>
        <p className="mb-8 text-gray-500">
          Sorry, we couldn't find the page you are looking for. It doesn't exist
          or has been moved.
        </p>
        <button
          onClick={goBack}
          className="rounded-md bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
//  You don't have permission to access this page.

// {!isAuthenticated
  // ? "You need to sign in to access this page."
  // : "Sorry, you don't have permission to access this page."}