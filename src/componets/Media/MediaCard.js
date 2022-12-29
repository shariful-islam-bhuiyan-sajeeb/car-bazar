import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { HiHandThumbUp, HiOutlineHeart, IconName } from "react-icons/hi2";
import MediaCardModal from './MediaCardModal';

const MediaCard = ({ mediaCard, refetch }) => {
    
    const { message, image, _id, loveReaction } = mediaCard;

    const [love, setLove] = useState(loveReaction > 1 ? loveReaction : 0+1)

    const handleLove = (id)=>{
        setLove(()=>love +1)
        fetch(`https://social-media-server-gilt.vercel.app/loveReact?id=${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify({love})

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                refetch()

            })


    }
    
    

    return (
        <div className='py-4'>
            <div className="rounded-md border shadow-lg sm:w-96  dark:text-black">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src="https://source.unsplash.com/50x50/?portrait" alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">leroy_jenkins72</h2>
                            <span className="inline-block text-xs leading-none dark:text-gray-400">Somewhere</span>
                        </div>
                    </div>
                    <button title="Open options" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                            <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                            <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                        </svg>
                    </button>
                </div>
                <h2 className='text-center'>{message}</h2>
                <img src={image} alt="" className="object-cover object-center w-full p-4 h-72  rounded-md" />
                <div className="p-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <button onClick={()=> handleLove(_id)} type="button" title="Like post" className="flex items-center justify-center">
                                <h2 className='text-2xl font-bold text-rose-700 '><HiOutlineHeart className=''></HiOutlineHeart></h2>
                                <h2>{loveReaction}</h2>
                            </button>
                            <button  htmlFor="details-modal" type="button" title="Add a comment" className="flex items-center justify-center">
                                <h2 className='text-2xl text-blue-600'><HiHandThumbUp></HiHandThumbUp></h2>
                            </button>
                            {/* <label htmlFor="details-modal" className="btn">open modal</label> */}
                        </div>
                        <button type="button" title="Bookmark post" className="btn btn-outline btn-success flex items-center justify-center">
                            Details
                        </button>
                    </div>
                    <div className="flex flex-wrap items-center pt-3 pb-1">
                        <div className="flex items-center space-x-2">
                            <div className="flex -space-x-1">
                                <img alt="" className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
                                <img alt="" className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?2" />
                                <img alt="" className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?3" />
                            </div>
                            <span className="text-sm">Liked by
                                <span className="font-semibold">Mamba UI</span>and
                                <span className="font-semibold">86 others</span>
                            </span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <input type="text" placeholder="Add a comment..." className="w-full py-2 dark:bg-transparent border rounded text-md pl-0 dark:text-gray-100" />
                    </div>
                </div>
            </div>
            {/* <MediaCardModal></MediaCardModal> */}
        </div>
    );
};

export default MediaCard;