import { useState } from 'react';
import albumjson from '../data/albumData.json';
import PlayPauseButton from './PlayPauseButton';
import MusicPlayerBar from './MusicPlayerBar';

export default function AlbumPlayer({ albumId }) {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const album = albumjson.albumData[albumId - 1];

    const handlePlay = (song) => {
        if (currentSong && currentSong.src === song.src) {
            setIsPlaying(!isPlaying);
        } else {
            setCurrentSong(song);
            setIsPlaying(true);
        }
    };

    if (!album) {
        return <div>Album not found</div>;
    }

    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-4">
                    <img className="w-100 rounded mb-4" src={`/a${albumId}/cover.png`} alt={album.name} />
                    <h2 className="text-2xl font-bold">{album.name}</h2>
                    <p>{album.artist}</p>
                </div>
                <div className="col-md-8" style={{ height: '600px', overflow: 'scroll' }}>
                    <table className="table table-bordered">
                        <thead className="bg-gray-100">
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Duration</th>
                                <th>Play</th>
                            </tr>
                        </thead>
                        <tbody>
                            {album.songs.map((song) => {
                                const songIndex = album.songs.indexOf(song);
                                return (
                                    <tr key={song}>
                                        <td>{songIndex + 1}</td>
                                        <td>{song}</td>
                                        <td>{album.durations[songIndex]}</td>
                                        <td>
                                            <PlayPauseButton
                                                song={{
                                                    title: song,
                                                    artist: album.artist,
                                                    albumCover: `/a${albumId}/cover.png`,
                                                    src: `/a${albumId}/${songIndex + 1}.flac`,
                                                    duration: album.durations[songIndex]
                                                }}
                                                onPlay={handlePlay}
                                                currentPlayingSrc={currentSong ? currentSong.src : null}
                                                isPlaying={isPlaying}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {currentSong && <MusicPlayerBar song={currentSong} isPlaying={isPlaying} />}
        </div>
    );
}

