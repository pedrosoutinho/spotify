import { useState, useEffect, useRef } from 'react';

const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const convertDurationToSeconds = (duration) => {
    const [minutes, seconds] = duration.split(':').map(Number);
    return (minutes * 60) + seconds;
};

export default function MusicPlayerBar({ song, isPlaying }) {
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(1);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef();


    useEffect(() => {
        if (audioRef.current) {
            const durationInSeconds = convertDurationToSeconds(song.duration);
            setDuration(durationInSeconds);
            audioRef.current.volume = volume;
        }
    }, [audioRef, volume, song.duration]);


    useEffect(() => {
        let intervalId;

        if (isPlaying) {
            intervalId = setInterval(() => {
                setCurrentTime(prevTime => {
                    if (prevTime >= duration) {
                        clearInterval(intervalId);
                        if (audioRef.current) {
                            audioRef.current.pause();
                        }
                        return 0;
                    }
                    return prevTime + 1;
                });
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isPlaying, duration]);


    useEffect(() => {
        if (audioRef.current) {
            // Reset the current time and play the song
            setCurrentTime(0);
            audioRef.current.currentTime = 0;
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [song]);  // Listen to changes in the song prop

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);


    const handleVolumeChange = (e) => {
        const sliderValue = e.target.value;
        const newVolume = sliderValue === "0" ? 0 : sliderValue / 100;
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };


    const handleTimeChange = (e) => {
        const newTime = Number(e.target.value);
        setCurrentTime(newTime);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
        }
    };

    return (
        <div className="music-player-bar">
            <div className="song-details">
                <img src={song.albumCover} alt={`${song.title} cover`} width="50" height="50" />
                <p>{song.title}</p>
                <p>{song.artist}</p>
            </div>
            <div className="current-time">
                {formatTime(currentTime)}s
            </div>

            <div className="controls">
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={volume * 100}
                    onChange={handleVolumeChange}
                />
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleTimeChange}
                />
            </div>
            <audio ref={audioRef} src={song.src} preload="metadata"></audio>
        </div>
    );
}
