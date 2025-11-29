import { useVideoSearch } from '../hooks/useVideoSearch';
import { VideoCard } from './VideoCard';

import type { VideoInfo } from '@/types';

const film1: VideoInfo = {
    'name': 'Крепкий орешек',
    'author': 'Жека Жекович',
    'preview': 'https://img3.zonapic.com/images/film_240/44/44974.jpg',
    'duration': 228
}

export function VideoSearch() {
    return (
        <div id='search' className='flex flex-col w-full h-full rounded-xl'>
            
            <div id='searchInput' className='w-full h-20 rounded-xl flex items-center justify-center'>
                <input type="text" className='w-1/3 h-2/3 flex text-2xl text-center bg-[#1b1b1b] rounded-xl outline-none pl-2 pr-2' placeholder='название фильма'/>
            </div>

            <div id='searchChoose' className='flex-1 rounded-xl overflow-auto grid grid-cols-4 gap-6 pr-12 pl-12 pt-6 pb-6 justify-content-center'>

                <VideoCard VideoInfo={film1}/>
                
            </div>

        </div>
    );
}