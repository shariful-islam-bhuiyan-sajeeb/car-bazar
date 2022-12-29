import React from 'react';
import AboutUpdateModal from './AboutUpdateModal';

const Aboute = () => {
    return (
        <section className="p-6 w-full mx-auto dark:text-gray-100">
            <form noValidate="" className="container border w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow-lg text-black dark:bg-gray-100 ng-untouched ng-pristine ng-valid">
                <div className=' flex justify-between'>
                    <h2 className="w-full text-3xl font-bold leading-tight text-black">About us!</h2>
                    <label htmlFor="about-modal" className="btn btn-success">Edit</label>
                </div>

                <div className='shadow-md  text-black flex justify-center items-center border sm:text-xl text-sm '>
                    <div className='p-4'>
                        <h2 className='pt-3'> <span className='font-semibold'>Name:-</span>  Shariful Islam bhuiyan</h2>
                        <h2 className='pt-3'><span className='font-semibold'>Email:-</span> sharifulislambhuiyan93@gmail.com</h2>
                        <h2 className='pt-3'><span className='font-semibold'>University:-</span> Tejgoan College,Dhaka.</h2>
                        <h2 className='pt-3'><span className='font-semibold'>Present Address:-</span> Framgate,Dhaka.</h2>
                    </div>
                </div>
            </form>
            <AboutUpdateModal></AboutUpdateModal>
        </section>
    );
};

export default Aboute;