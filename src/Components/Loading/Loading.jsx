import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[864px]">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full "
        role="status"
      >
        <span className="visually-hidden">.</span>
      </div>
    </div>
  );
};

export default Loading;
