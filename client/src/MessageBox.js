import React from "react";

const MessageBox = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="border w-full md:w-1/3 bg-gray-200 overflow-y-auto hide-scrollbar md:block">
        {[...Array(22)].map((_, index) => (
          <div
            key={index}
            className="flex items-center p-4 border-b border-gray-100 bg-white shadow-sm h-16"
          >
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h4 className="font-semibold">Alex</h4>
              <p className="text-sm text-gray-500">Last message...</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border w-full hidden md:w-2/3 bg-white md:flex flex-col">
        <div className="flex items-center p-4 border-b border-gray-100 bg-gray-50">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-4"
          />
          <h4 className="font-semibold">Alex</h4>
        </div>
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          <div className="flex items-start space-x-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
              <p>Hello, how are you?</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 justify-end">
            <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
              <p>I'm good, thanks! What about you?</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
              <p>Just working on a project right now.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
