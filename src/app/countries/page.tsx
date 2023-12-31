"use client";

import React from "react";
import Link from "next/link";
import countries from "@/config";

type Country = {
  cca3: string;
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
};

const CountriesPage = () => {
    return (
      <div className="p-6">

        <h1 className="text-center text-2xl " >Countries Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {countries.map((country: Country, index: number) => (
            <Link key={index} href={`/details/${country.cca3}`} passHref>
              <div className="block border rounded-lg overflow-hidden hover:bg-slate-600 hover:shadow-lg transition duration-200 ease-in-out">
                <div className="w-full h-40">
                  <img src={country.flags.png} alt={country.name.common} className="w-full h-full object-cover object-center" />
                </div>
                <h3 className="mt-1 font-semibold text-lg p-1">{country.name.common}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default CountriesPage;