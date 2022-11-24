import React from 'react';

const PopularBooks = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block mb-2">Popular Books Now</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        <div>
          <img
            className="object-end w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://cdn.pixabay.com/photo/2020/04/28/18/33/key-5105878__340.jpg"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Galaxies Orion
          </p>
          <p className="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://cdn.pixabay.com/photo/2018/07/01/20/01/music-3510326__340.jpg"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Tunguska event
          </p>
          <p className="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Yolo ipsum dolor
          </p>
          <p className="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://cdn.pixabay.com/photo/2016/08/24/16/20/books-1617327__340.jpg"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Curabitur mattis
          </p>
          <p className="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://cdn.pixabay.com/photo/2016/03/27/18/31/book-1283468__340.jpg"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Leverage agile
          </p>
          <p className="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://cdn.pixabay.com/photo/2021/01/27/07/19/baby-5953965__340.jpg"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Babies Books
          </p>
          <p className="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
    );
};

export default PopularBooks;