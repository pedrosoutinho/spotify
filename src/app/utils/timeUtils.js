export const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const convertDurationToSeconds = (duration) => {
    const [minutes, seconds] = duration.split(':').map(Number);
    return (minutes * 60) + seconds;
};
