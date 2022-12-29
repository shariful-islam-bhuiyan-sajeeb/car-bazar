import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MediaCard from './MediaCard';

const Media = () => {

    const {data: mediaCards, refetch }= useQuery({
        queryKey:['mediaCards'],
        queryFn: async()=>{
            const rest = await fetch('https://social-media-server-gilt.vercel.app/medialPost') 
            const data = await rest.json()
            return data; 
        }
       
    })
    // console.log(mediaCards);
    return (
        <div className='flex justify-center items-center'>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    mediaCards && mediaCards.map(mediaCard => <MediaCard
                        key={mediaCard.id}
                        mediaCard={mediaCard}
                        refetch={refetch}
                        
                    ></MediaCard>)
                }
           </div>
            
        </div>
    );
};

export default Media;