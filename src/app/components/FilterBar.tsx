import React from "react";

const FilterBar = () => {
  return (
    <div className="flex flex-wrap justify-between items-center bg-[#F9F1E7] p-4 rounded-md shadow-sm mb-6">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <button className="flex items-center text-gray-600 bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200">
          <i className="fas fa-filter mr-2"></i> Filter
        </button>
        <p className="text-gray-600">Showing 1–16 of 32 results</p>
      </div>
      <div className="flex items-center gap-4 w-full sm:w-auto mt-4 sm:mt-0">
        <div className="flex flex-col sm:flex-row gap-2">
          <label htmlFor="show" className="text-gray-600 text-sm">
            Show
          </label>
          <select
            id="show"
            className="ml-2 border border-gray-300 rounded-md p-1 text-gray-600"
          >
            <option value="16">16</option>
            <option value="32">32</option>
          </select>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <label htmlFor="sort" className="text-gray-600 text-sm">
            Sort by
          </label>
          <select
            id="sort"
            className="ml-2 border border-gray-300 rounded-md p-1 text-gray-600"
          >
            <option value="default">Default</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
