import type { VideoInfo } from '@/types/index'

interface VideoCardProps {
    VideoInfo: VideoInfo;
}

export function VideoCard({ VideoInfo }: VideoCardProps) {

    return (
        <div className='w-60 h-80 rounded-xl bg-blue-500 border'>{VideoInfo.name}</div> 
    );
}