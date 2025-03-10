import React from "react";
import Icons from "./Icons";

const Header = () => {
  return (
    <div className="wrapper flex justify-between items-center py-4 box-shadow-1 bg-[#f5f8ff]">
      <div className="w-2/3 border-2 rounded-full border-gray-200 flex items-center">
        <input
          type="text"
          placeholder="Search Image here..."
          className="w-full px-4 py-2 rounded-full text-gray-700 focus:outline-none"
        />
        <div className="me-1">
          <button className="btn-primary transition rounded-full">
            {Icons.search}
          </button>
        </div>
      </div>

      <div className="w-1/3 flex justify-end">
        <button className="btn-primary transition rounded-lg">
          {Icons.upload} Upload Image
        </button>
      </div>
    </div>
  );
};

export default Header;
