import React from "react";

const BackgroundGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-yellow-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-to-r from-yellow-500/15 to-purple-600/15 rounded-full blur-3xl animate-pulse delay-1500"></div>
    </div>
  );
};

export default BackgroundGradient;
