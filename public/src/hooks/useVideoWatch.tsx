import { useRef, useState, useCallback } from "react";

import type { Video } from '@/types/video.types'


export function useVideoWatch(video: Video) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = useCallback(() => {
        if (!videoRef.current) return;
        
        if (!isPlaying) {
            videoRef.current.play();
            setIsPlaying(!isPlaying);
        } else {
            videoRef.current.pause();
            setIsPlaying(!isPlaying);
        }
    }, [isPlaying]);

    return {
        videoRef,
        isPlaying,
        togglePlay
    };
}