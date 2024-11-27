import React from "react";

export const SkeletonDetails = () => {
  return (
    <main className="flex justify-center items-center w-full pt-[83px]">
      <div className="animate-pulse w-full max-w-[90rem] px-[80px]">
        {/* Back Button Skeleton */}
        <section className="w-full flex justify-start items-center mb-6">
          <div className="w-[135px] h-[40px] bg-gray-300 rounded-md"></div>
        </section>

        {/* Content Skeleton */}
        <section className="w-full">
          <div className="flex justify-between mt-[80px] gap-8">
            {/* Image Skeleton */}
            <div className="flex-1">
              <div className="w-[560px] h-[400px] bg-gray-300 rounded-md"></div>
            </div>

            {/* Text Skeleton */}
            <div className="flex-1 p-6">
              <div className="h-[35px] bg-gray-300 rounded-md mb-4 w-3/4"></div>
              {/* Country Information Skeleton */}
              <div className="grid grid-cols-2 gap-y-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-[20px] bg-gray-300 rounded-md w-5/6"
                  ></div>
                ))}
              </div>

              {/* Borders Skeleton */}
              <div className="flex flex-col mt-[30px]">
                <div className="h-[18px] bg-gray-300 rounded-md mb-3 w-1/3"></div>
                <div className="flex gap-4 flex-wrap">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="w-[100px] h-[30px] bg-gray-300 rounded-md"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
