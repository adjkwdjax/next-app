// VideoRoute.tsx
import { useVideoWatch } from '../hooks/useVideoWatch';

import type { Room } from '@/types';

export default function VideoPlayer(room: Room) {
    const { videoRef, togglePlay } = useVideoWatch(room.currentVideo);

    return (
        <div className='border w-full h-full rounded-xl relative'>
            <video 
                ref={videoRef}
                controls
                src="https://dlcache4.vibio.tv/782e3a84ce78b2e7b9429f46b8683b2b/2867/2867100/output.mq.mp4" 
                className='w-full h-full object-cover rounded-xl'
            />
            
            <div className='absolute bottom-0 left-0 bg-blue-600 w-full h-15 rounded-xl'>
                <button onClick={togglePlay}>123</button>
            </div>
        </div>
    );
}