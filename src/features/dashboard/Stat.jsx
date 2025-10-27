function Stat({ icon, title, value, color }) {
  const colorClasses = {
    blue: {
      bg: "bg-blue-100 dark:bg-blue-900/40",
      text: "text-blue-600 dark:text-blue-400",
    },
    green: {
      bg: "bg-green-100 dark:bg-green-900/40",
      text: "text-green-600 dark:text-green-400",
    },
    yellow: {
      bg: "bg-yellow-100 dark:bg-yellow-900/40",
      text: "text-yellow-600 dark:text-yellow-400",
    },
    red: {
      bg: "bg-red-100 dark:bg-red-900/40",
      text: "text-red-600 dark:text-red-400",
    },
    gray: {
      bg: "bg-gray-100 dark:bg-gray-700",
      text: "text-gray-600 dark:text-gray-300",
    },
  };

  const { bg, text } = colorClasses[color] || colorClasses.gray;

  return (
    <div
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                 rounded-md p-5 transition-all duration-200 
                 grid grid-cols-[4rem_1fr] grid-rows-[auto_auto] gap-x-4 gap-y-1 items-center"
    >
      {/* Icon */}
      <div
        className={`row-span-2 ${bg} rounded-full flex items-center justify-center 
                    w-12 h-12`}
      >
        <span className={`text-2xl ${text}`}>{icon}</span>
      </div>

      {/* Title */}
      <h5 className="self-end text-sm uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400">
        {title}
      </h5>

      {/* Value */}
      <p className="text-2xl font-semibold leading-none text-gray-800 dark:text-gray-100">
        {value}
      </p>
    </div>
  );
}

export default Stat;
