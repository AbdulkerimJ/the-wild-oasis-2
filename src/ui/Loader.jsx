const Loader = ({ type = "section" }) => {
  // Full-page loader
  if (type === "page") {
    return (
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[5px] z-50">
        <div className="loader w-16 h-16 aspect-square border-t-2 border-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Section loader (covers only its parent)
  if (type === "section") {
    return (
      <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm z-10">
        <div className="loader w-12 h-12 aspect-square border-t-2 border-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Button loader (small spinner)
  if (type === "button") {
    return (
      <div className="loader w-4 h-4 aspect-square border-t-2 border-blue-600 rounded-full animate-spin"></div>
    );
  }

  // Default inline loader
  return (
    <div className="loader w-4 h-4 aspect-square border-t-2 border-blue-600 rounded-full animate-spin"></div>
  );
};

export default Loader;
