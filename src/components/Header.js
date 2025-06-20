import React from "react";
import Lottie from "lottie-react";
import beeAnimation from "../assets/bee.json";

const Header = () => {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex flex-col items-center mb-8">
      <div className="flex items-center gap-2">
        <h1 className="text-6xl font-bold text-blue-600">Dobee</h1>
        <div className="w-16 h-16">
          <Lottie animationData={beeAnimation} loop autoplay />
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-2">{today}</p>
    </div>
  );
};

export default Header;
