import React from "react";

const SkeletonHome = () => {
  return (
    <main className="flex justify-center items-center w-full pt-[50px]">
      <div className="text-color-text w-full max-w-[90rem] px-[22px] md:px-[80px]">
        <section className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6">
          {/* Skeleton para FilterNameCountry */}
          <div className="flex items-center gap-3 border rounded-lg px-[28px] py-[15px] shadow-md w-full max-w-[480px] bg-gray-200 animate-pulse">
            <div className="w-6 h-6 bg-gray-300 rounded-full" />
            <div className="flex-grow h-4 bg-gray-300 rounded-md" />
          </div>

          {/* Skeleton para FilterRegions */}
          <div className="relative inline-block w-full max-w-[200px] shadow-md">
            <div className="flex justify-between items-center w-full bg-gray-200 border border-gray-300 rounded-md px-[21px] py-[15px] animate-pulse">
              <div className="w-3/4 h-4 bg-gray-300 rounded-md" />
              <div className="w-4 h-4 bg-gray-300 rounded-full" />
            </div>
          </div>
        </section>

        {/* Skeleton para la lista de tarjetas de países */}
        <section>
          <div className="countries-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 md:gap-x-[75px] gap-y-10 md:gap-y-[73px] mt-[47px]">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 shadow-md rounded-md overflow-hidden animate-pulse"
              >
                <div className="w-full h-[200px] bg-gray-300" />
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
