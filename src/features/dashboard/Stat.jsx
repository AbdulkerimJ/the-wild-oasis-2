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
                 rounded-md p-4 sm:p-5 transition-all duration-200
                 flex items-center gap-3 w-full flex-wrap"
    >
      {/* Icon */}
      <div
        className={`${bg} rounded-full flex items-center justify-center flex-shrink-0
                    w-10 sm:w-12 h-10 sm:h-12`}
      >
        <span className={`text-lg sm:text-xl md:text-2xl ${text} leading-none`}>
          {icon}
        </span>
      </div>

      {/* Text container */}
      <div className="flex flex-col flex-1 break-words">
        {/* Title */}
        <h5
          className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wide font-semibold 
                     text-gray-500 dark:text-gray-400 leading-tight whitespace-normal"
        >
          {title}
        </h5>

        {/* Value */}
        <p
          className="font-semibold text-gray-800 dark:text-gray-100
                     text-base sm:text-lg md:text-2xl lg:text-[1.75rem] leading-tight
                     whitespace-normal break-words"
        >
          {value}
        </p>
      </div>
    </div>
  );
}

export default Stat;
