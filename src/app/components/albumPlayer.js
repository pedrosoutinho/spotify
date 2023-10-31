import 'font-awesome/css/font-awesome.min.css';
import { useEffect, useState } from 'react';
import PlayPauseButton from './PlayPauseButton';
import MusicPlayerBar from './MusicPlayerBar';
import { fetchPlaylist, fetchSongs, addSongToPlaylist, deleteSongFromPlaylist } from "../services/api";
import styles from './albumPlayer.module.css';


export default function AlbumPlayer({ albumId }) {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playlist, setPlaylist] = useState(null);
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    useEffect(() => {
        const updateSongs = async () => {
            try {
                const allSongs = await fetchSongs();
                const relevantSongs = allSongs.filter(song => playlist.songs.includes(song.id));
                setSongs(relevantSongs);
            } catch (error) {
                console.error("Failed to update songs after adding:", error);
            }
        };

        if (playlist) {
            updateSongs();
        }
    }, [playlist]);


    const handlePlay = (song) => {
        if (currentSong && currentSong.src === song.src) {
            setIsPlaying(!isPlaying);
        } else {
            setCurrentSong(song);
            setIsPlaying(true);
        }
    };

    const handleSearch = async () => {
        try {
            const allSongs = await fetchSongs();
            const results = allSongs.filter(song =>
                song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                song.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
        } catch (error) {
            console.error("Failed to search songs:", error);
        }
    };

    const handleAddSong = async (songId) => {
        try {
            await addSongToPlaylist(playlist.id, songId);
            const updatedPlaylist = await fetchPlaylist(albumId);
            setPlaylist(updatedPlaylist);
        } catch (error) {
            console.error("Failed to add song to playlist:", error);
        }
    };

    const handleDeleteSong = async (songId) => {
        try {
            await deleteSongFromPlaylist(playlist.id, songId);
            const updatedPlaylist = await fetchPlaylist(albumId);
            setPlaylist(updatedPlaylist);
        } catch (error) {
            console.error("Failed to delete song from playlist:", error);
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
                    <img className="w-100 rounded mb-4" src={`/a${albumId}/cover.png`} alt="" />
                    <h2 className="text-2xl font-bold">{playlist.name}</h2>
                    <p>{playlist.artist}</p>
                    {playlist.creator !== 'public' &&
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addSongModal">Add Songs to Playlist</button>
                    }
                </div>
                <div className="col-md-8" style={{ height: '600px', overflow: 'scroll' }}>
                    <table className="table table-bordered">
                        <thead className="bg-gray-100">
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Duration</th>
                                <th>Play</th>
                                {playlist.creator !== 'public' && <th>Delete</th>}
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
                                                albumCover: `/a${song.albumId}/cover.png`,
                                                src: `/a${song.albumId}/${index + 1}.flac`,
                                                duration: song.duration
                                            }}
                                            onPlay={handlePlay}
                                            currentPlayingSrc={currentSong ? currentSong.src : null}
                                            isPlaying={isPlaying}
                                        />
                                    </td>
                                    {playlist.creator !== 'public' && (
                                        <td>
                                            <button
                                                className="btn btn-danger ml-2"
                                                onClick={() => handleDeleteSong(song.id)}
                                            >
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {currentSong && <MusicPlayerBar song={currentSong} isPlaying={isPlaying} />}
            <div className="modal fade" id="addSongModal" tabIndex="-1" aria-labelledby="addSongModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addSongModalLabel">Add Songs to Playlist</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input
                                className="form-control"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                placeholder="Search for songs..."
                            />
                            <button className="btn btn-primary mt-2" onClick={handleSearch}>Search</button>
                            {searchResults.map(song => (
                                <div key={song.id} className={styles.searchedSongText}>
                                    {song.title} - {song.artist}
                                    <button className={styles.addButton} onClick={() => handleAddSong(song.id)}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

