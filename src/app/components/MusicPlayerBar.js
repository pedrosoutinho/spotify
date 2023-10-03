import { useState, useEffect, useRef } from 'react';

const convertDurationToSeconds = (duration) => {
    const [minutes, seconds] = duration.split(':').map(Number);
    console.log(minutes * 60 + seconds);
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
                setCurrentTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isPlaying]);

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
                {currentTime}s
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
