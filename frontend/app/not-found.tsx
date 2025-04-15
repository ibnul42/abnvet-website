import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-[#f2efec] text-[#5d3e28] px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-center max-w-md mb-6">
        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-[#5d3e28] text-white px-6 py-2 rounded hover:bg-[#4c321f] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
