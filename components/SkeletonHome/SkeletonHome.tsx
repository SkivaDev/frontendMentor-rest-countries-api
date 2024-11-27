import React from "react";

const SkeletonHome = () => {
  return (
    <main className="flex justify-center items-center w-full pt-[3.125rem]">
      <div className="text-color-text w-full max-w-[1440px] px-[1.375rem] md:px-[5rem]">
        <section className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6">
          {/* Skeleton para FilterNameCountry */}
          <div className="flex items-center gap-3 border rounded-lg px-[1.75rem] py-[.9375rem] shadow-md w-full max-w-[30rem] bg-gray-200 animate-pulse">
            <div className="w-6 h-6 bg-gray-300 rounded-full" />
            <div className="flex-grow h-4 bg-gray-300 rounded-md" />
          </div>

          {/* Skeleton para FilterRegions */}
          <div className="relative inline-block w-full max-w-[12.5rem] shadow-md">
            <div className="flex justify-between items-center w-full bg-gray-200 border border-gray-300 rounded-md px-[1.3125rem] py-[.9375rem] animate-pulse">
              <div className="w-3/4 h-4 bg-gray-300 rounded-md" />
              <div className="w-4 h-4 bg-gray-300 rounded-full" />
            </div>
          </div>
        </section>

        {/* Skeleton para la lista de tarjetas de países */}
        <section>
          <div className="countries-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 md:gap-x-[4.6875rem] gap-y-10 md:gap-y-[4.5625rem] mt-[2.9375rem]">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 shadow-md rounded-md overflow-hidden animate-pulse"
              >
                <div className="w-full h-[12.5rem] bg-gray-300" />
                <div className="p-6">
                  <div className="h-5 bg-gray-300 rounded-md mb-4" />
                  <div className="h-4 bg-gray-300 rounded-md mb-2" />
                  <div className="h-4 bg-gray-300 rounded-md mb-2" />
                  <div className="h-4 bg-gray-300 rounded-md mb-2" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default SkeletonHome;
