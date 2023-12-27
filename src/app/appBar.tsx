// components/AppBar.tsx
"use client";
import Link from 'next/link';
import React from 'react';

const AppBar: React.FC = () => {


  const handleBack = () => {
  
  };

  return (
    <nav className="bg-black shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center">
              <Link
                href="/countries"
                className="flex flex-row"
              >
                {/* Icon or text for the back button */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className=" text-white">رجوع</span>
              </Link>
            </div>
            {/* Other AppBar content here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
