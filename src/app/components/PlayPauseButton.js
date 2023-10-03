import 'font-awesome/css/font-awesome.min.css';
import { useState, useEffect } from "react";

export default function PlayPauseButton({ song, onPlay, currentPlayingSrc }) {
    const [isButtonPlaying, setIsButtonPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsButtonPlaying(!isButtonPlaying);
        onPlay(song);
    };

    useEffect(() => {
        if (currentPlayingSrc !== song.src) {
            setIsButtonPlaying(false);
        }
    }, [currentPlayingSrc, song.src]);

    return (
        <button onClick={togglePlayPause}>
            {isButtonPlaying
                ? <i className="fa fa-pause"></i>
                : <i className="fa fa-play"></i>
            }
        </button>
    );
}

