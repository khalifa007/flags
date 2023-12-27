// CountryDetailsPage.tsx
'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import countries from '@/config'; // Assuming you have a CountryType interface
import AppBar from '@/app/appBar';

const CountryDetailsPage: React.FC = () => {
  const { id } = useParams();

  const country = countries.find(c => c.cca3 === id);

  if (!country) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-lg font-semibold">Country not found</span>
      </div>
    );
  }

  const youtubeEmbedUrl = `https://www.youtube.com/embed/${country.youtubeVideoId}`;

  return (
    <>
      <AppBar/>
      <div className="p-4 mx-auto max-w-4xl">
        <img 
          src={country.flags.png} 
          alt={country.name.common} 
          className="w-full h-48 object-cover rounded-lg shadow-md" 
        />
        <h1 className="text-3xl font-bold mt-6 mb-2">{country.name.common}</h1>
        <p className="text-lg mt-2">{country.description}</p>
        <div className="aspect-w-16 aspect-h-9 mt-4">
          <iframe
            src={youtubeEmbedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default CountryDetailsPage;
