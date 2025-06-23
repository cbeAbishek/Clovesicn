"use client";

import { useState, useEffect } from "react";

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`preloader fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
        <p className="mt-4 text-gray-700 font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Preloader;
