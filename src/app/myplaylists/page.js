'use client'
import 'font-awesome/css/font-awesome.min.css';
import { useState, useContext, useEffect } from 'react';
import { registerPlaylist, updateUser, deletePlaylist } from '../services/api';
import Link from 'next/link';
import UserContext from '../components/userContext';


export default function UserPlaylists() {
    const [playlistName, setPlaylistName] = useState('');
    const [playlists, setPlaylists] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user && user.playlists) {
            setPlaylists(user.playlists);
        }
    }, [user]);

    const handleCreatePlaylist = async () => {
        if (playlistName.trim()) {
            const newPlaylist = {
                name: playlistName,
                songs: [],
                creator: user.id
            };

            const createdPlaylist = await registerPlaylist(newPlaylist);

            if (user) {
                let updatedPlaylists = [...playlists, createdPlaylist];

                const updatedUser = {
                    ...user,
                    playlists: updatedPlaylists
                };

                await updateUser(updatedUser);
                setPlaylists(updatedUser.playlists);
            }
            setPlaylistName('');
        }
    };

    const handleDeletePlaylist = async (playlistId) => {
        try {
            await deletePlaylist(playlistId);

            const updatedPlaylists = playlists.filter(pl => pl.id !== playlistId);
            setPlaylists(updatedPlaylists);

            const updatedUser = {
                ...user,
                playlists: updatedPlaylists
            };
            await updateUser(updatedUser);
        } catch (error) {
            console.error('Error deleting playlist:', error);
        }
    };


    console.log('user', user);

    return (
        <main>
            <div className="container">
                <div className="row">
                    {playlists.map(playlist => (
                        <div className="col-md-3" key={playlist.id}>
                            <div className="card h-100">
                                <Link href={`/playlists/currently_playing?id=${playlist.id}`}>
                                    <div className="card-body">
                                        <h5 className="card-title">{playlist.name}</h5>
                                        <button
                                            className="btn btn-danger mt-auto"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                handleDeletePlaylist(playlist.id);
                                            }}
                                        >
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                    <div className="col-md-3">
                        <div className="card h-100" data-bs-toggle="modal" data-bs-target="#createPlaylistModal">
                            <div className="card-body">
                                <h5 className="card-title">+ Create New Playlist</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="createPlaylistModal" tabIndex="-1" aria-labelledby="createPlaylistModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="createPlaylistModalLabel">Create New Playlist</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={playlistName}
                                onChange={(e) => setPlaylistName(e.target.value)}
                                placeholder="Enter playlist name"
                            />
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={handleCreatePlaylist}>Create</button>
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );

}

