import 'font-awesome/css/font-awesome.min.css';

export default function PlayPauseButton({ song, onPlay, currentPlayingSrc, isPlaying }) {

    const togglePlayPause = () => {
        onPlay(song);
    };

    const isButtonPlaying = currentPlayingSrc === song.src && isPlaying;

    return (
        <button onClick={togglePlayPause}>
            {isButtonPlaying
                ? <i className="fa fa-pause"></i>
                : <i className="fa fa-play"></i>
            }
        </button>
    );
}
