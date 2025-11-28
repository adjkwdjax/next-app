// hooks/useVideoWatch.ts
import { useRef, useState, useCallback } from "react";

export function useVideoWatch() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = useCallback(() => {
        // videoRef уже привязан когда вызывается togglePlay
        if (!videoRef.current) return;
        
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, []);

    return {
        videoRef, // Хук сам управляет ref
        isPlaying,
        togglePlay
    };
}