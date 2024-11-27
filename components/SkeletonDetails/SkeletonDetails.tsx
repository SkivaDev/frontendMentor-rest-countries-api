import React from "react";

export const SkeletonDetails = () => {
  return (
    <main className="flex justify-center items-center w-full pt-[50px] md:pt-[83px]">
      <div className="text-color-text w-full max-w-[90rem] px-[22px] md:px-[80px]">
        {/* Botón de regreso */}
        <section className="w-full flex justify-start items-center mb-[30px] md:mb-[80px]">
          <div className="flex items-center justify-center w-full max-w-[135px] py-2 bg-gray-200 shadow-md rounded-md animate-pulse">
            <div className="w-4 h-4 bg-gray-300 rounded-full mr-2" />
            <div className="h-4 bg-gray-300 rounded-md flex-grow" />
          </div>
        </section>

        {/* Contenido principal */}
        <section className="w-full flex flex-col md:flex-row justify-between gap-8">
          {/* Imagen del país */}
          <div className="flex-1 bg-gray-200 rounded-md shadow-md w-full h-[285.5px] md:h-[400px] animate-pulse"></div>

          {/* Detalles del país */}
          <div className="flex-1 p-6">
            <div className="h-8 bg-gray-300 rounded-md mb-6 w-3/4 animate-pulse" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="h-4 bg-gray-300 rounded-md animate-pulse"
                />
              ))}
            </div>

            {/* Países vecinos */}
            <div className="flex flex-col lg:flex-row gap-3 mt-[30px]">
              <div className="h-5 bg-gray-300 rounded-md w-[150px] animate-pulse mb-2 lg:mb-0" />
              <div className="flex gap-4 flex-wrap">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 px-5 py-2 rounded-md shadow-md w-[100px] h-8 animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
