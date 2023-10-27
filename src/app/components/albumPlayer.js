import { useEffect, useState } from 'react';
import PlayPauseButton from './PlayPauseButton';
import MusicPlayerBar from './MusicPlayerBar';
import { fetchPlaylist, fetchSongs } from "../services/api";


export default function AlbumPlayer({ albumId }) {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playlist, setPlaylist] = useState(null);
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const playlistData = await fetchPlaylist(albumId);
                const allSongs = await fetchSongs();
                const relevantSongs = allSongs.filter(song => playlistData.songs.includes(song.id));
                setPlaylist(playlistData);
                setSongs(relevantSongs);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, [albumId]);


    const handlePlay = (song) => {
        if (currentSong && currentSong.src === song.src) {
            setIsPlaying(!isPlaying);
        } else {
            setCurrentSong(song);
            setIsPlaying(true);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!playlist) {
        return <div>Playlist not found</div>;
    }

    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-4">
                    <img className="w-100 rounded mb-4" src={`/a${albumId}/cover.png`} alt={playlist.name} />
                    <h2 className="text-2xl font-bold">{playlist.name}</h2>
                    <p>{playlist.artist}</p>
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
                            {songs.map((song, index) => (
                                <tr key={song.id}>
                                    <td>{index + 1}</td>
                                    <td>{song.title}</td>
                                    <td>{song.duration}</td>
                                    <td>
                                        <PlayPauseButton
                                            song={{
                                                title: song.title,
                                                artist: song.artist,
                                                albumCover: `/a${albumId}/cover.png`,
                                                src: `/a${albumId}/${index + 1}.flac`,
                                                duration: song.duration
                                            }}
                                            onPlay={handlePlay}
                                            currentPlayingSrc={currentSong ? currentSong.src : null}
                                            isPlaying={isPlaying}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {currentSong && <MusicPlayerBar song={currentSong} isPlaying={isPlaying} />}
        </div>
    );
}

