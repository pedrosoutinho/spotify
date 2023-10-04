import { useState, useEffect, useRef } from 'react';
import { formatTime, convertDurationToSeconds } from '../utils/timeUtils';

export default function MusicPlayerBar({ song, isPlaying}) {
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
            setCurrentTime(0);
            audioRef.current.currentTime = 0;
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [song]);

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
        <div className="fixed-bottom bg-dark p-2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-start align-items-center">
                        <img src={song.albumCover} alt={`${song.title} cover`} className="img-fluid" style={{ maxWidth: '90px' }} />
                    </div>

                    <div className="col-8 d-flex flex-column justify-content-center">
                        <div>
                            <p className="mb-0 text-white">{song.title}</p>
                            <p className="mb-0 text-white">{song.artist}</p>
                        </div>
                        <input
                            className="custom-range mt-2 mb-1"
                            type="range"
                            min="0"
                            max={duration}
                            value={currentTime}
                            onChange={handleTimeChange}
                        />
                        <p className="mb-0 text-center text-white">{formatTime(currentTime)} / {song.duration}</p>
                    </div>

                    <div className="col-2 d-flex align-items-center justify-content-end" >
                        <input
                            className="custom-range"
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            value={volume * 100}
                            onChange={handleVolumeChange}
                        />
                    </div>
                </div>
            </div>
            <audio ref={audioRef} src={song.src} preload="metadata"></audio>
        </div>
    );

}
