export default function PlayPauseButton({ song, onPlay, isPlaying }) {
    const togglePlayPause = () => {
        onPlay(song);
    };

    return (
        <button onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
        </button>
    );
}
