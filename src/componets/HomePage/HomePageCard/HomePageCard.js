import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MediaCard from '../../Media/MediaCard';

const HomePageCard = () => {
    
    const { data: homepageCards = [], refetch } = useQuery({
        queryKey: ['homepageCards'],
        queryFn: async () => {
            const res = await fetch('https://social-media-server-gilt.vercel.app/popular');
            const data = await res.json();
            return data;
        }
    })
    console.log(homepageCards);

    return (
        <div className='flex justify-center items-center'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    homepageCards.map(mediaCard => <MediaCard
                        mediaCard={mediaCard}
                        refetch={refetch}
                    ></MediaCard>)
                }
            </div>
        </div>
    );
};

export default HomePageCard;