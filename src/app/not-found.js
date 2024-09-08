// pages/404.js

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-6xl mb-4">🚫 404</div>
      <h1 className="text-4xl font-extrabold mb-2">Oops! Page Not Found</h1>
      <p className="text-lg mb-6">
        We couldn’t find the page you’re looking for. Maybe it was removed or
        you mistyped the URL.
      </p>
      <div className="text-3xl mb-6">
        <span role="img" aria-label="confused face">
          😕
        </span>
      </div>
      <a
        href="/"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
