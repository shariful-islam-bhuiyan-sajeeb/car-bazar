import React from 'react';
import car1 from '../../Assese/car/Car 1.jfif'
import car2 from '../../Assese/car/car 2.jfif'
import car3 from '../../Assese/car/car 3.jfif'
import car4 from '../../Assese/car/car 4.jfif'

const Banner = () => {
    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16  dark:text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src={car3} alt="" className="w-full h-60 sm:h-96 " />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md shadow-lg text-black dark:bg-slate-100">
                    <div className="space-y-2 ">
                        <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">Welcome to our Online service.</a>
                        <p className="text-xs dark:text-black">On
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">line platform</a>
                        </p>
                    </div>
                    <div className="">
                        <p>Insert the actual text content here...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;