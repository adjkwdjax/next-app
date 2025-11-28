import type { Room } from '@/types';

import { CarouselSources } from './CarouselSources';

export function VideoRoute(room: Room) {

    return (
        <div className='w-full h-full rounded-xl relative flex items-center justify-center'>
            <div className='bg-[#1c1c1c] w-1/2 h-1/2 rounded-xl'>
                <CarouselSources />
            </div>
        </div>
    );
}