import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[DCE2CB]'>
            <div className="mb-16">
                <div className="bg-gray-100">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            Find Your <br />
                            <span>Favourite Books</span> <br />
                            <span>In One Place</span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                        </p>
                    </div>
                    <div className="flex items-center sm:justify-center">
                        <button
                        type="submit"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                        Get started
                        </button>
                        <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                        Learn more
                        </a>
                    </div>
                    </div>
                </div>
                <div className="relative px-4 sm:px-0">
                    <div className="absolute inset-0 bg-gray-100 h-1/2" />
                    <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
                    <div className="inline-block p-8 text-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                        </div>
                        <p className="font-bold tracking-wide text-gray-800">
                        Make it better
                        </p>
                    </div>
                    <div className="inline-block p-8 text-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                        </div>
                        <p className="font-bold tracking-wide text-gray-800">
                        Do it faster
                        </p>
                    </div>
                    <div className="inline-block p-8 text-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                        </div>
                        <p className="font-bold tracking-wide text-gray-800">
                        Working harder
                        </p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Banner;