import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Upload = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    

    const handleUpload = data =>{
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url ="https://api.imgbb.com/1/upload?key=c4b4e7736bd9f47187e4b7d6d915e836";
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const upload ={
                    message: data.message,
                    image: imgData.data.url
                }
                console.log(upload);

                fetch('http://localhost:5000/uploading',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                       
                    },
                    body: JSON.stringify(upload)
                })
                .then(res =>res.json())
                .then(result =>{
                    console.log(result);
                    toast.success('upload your post')
                })
            }
        })

    }

    return (
        <div>
            <section className="py-6 bg-gray-100 sha  dark:text-black">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Online Platform</h1>
                        <p className="pt-2 pb-4">Shere as many pictures as you like.</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Online Platform City</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>123456789</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>onlineplatform@business.com</span>
                            </p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(handleUpload)} noValidate="" className=" flex justify-center flex-col py-6 border shadow-md   md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <div className='text-center space-y-2 py-4'>
                            <label className="block  ">
                                <label className="label"><span className="label-text pl-5">Message</span></label>
                                <input type="text"
                                    {...register("message",
                                        { required: "please type your message" }
                                    )} className="textarea textarea-bordered border-solid border-black border-2 rounded-lg w-full max-w-md " />
                                {errors.productName && <p className='text-red-700'>{errors.productName?.message}</p>}
                            </label>
                            <label className="block">
                                <label className="label"><span className="label-text pl-5">Image Upload</span></label>
                                <input type="file"
                                    {...register("image",
                                        {
                                            required: "photo is required",

                                        })} className=" border-solid border-black border-2 p-6 rounded-lg  w-full max-w-md" />
                                {errors.image && <p className='text-red-700'>{errors.image?.message}</p>}
                            </label>
                            <input className='btn  w-full mt-4 mb-4 max-w-md focus:ring hover:ring focus:ring-opacity-75 bg-gradient-to-r from-sky-500 to-indigo-500' value='POST' type="submit" />
                            
                       </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Upload;