import React from "react";

const Tabs = () => {
  // ! Need to change colors for dark mode for text, as currently its white
  return (
    <div className="flex justify-center">
      <div className="flex  border-b border-gray-200 dark:border-gray-700">
        <button className="h-10 px-4 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none">
          Profile
        </button>

        <button className="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
          Account
        </button>

        <button className="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
          Notification
        </button>
      </div>
    </div>
  );
};

export default Tabs;
