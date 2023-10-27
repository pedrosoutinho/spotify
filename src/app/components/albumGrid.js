'use client'
import { useState, useEffect } from 'react';
import Link from "next/link";
import { fetchPlaylists } from "../services/api";

export default function AlbumGrid() {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const albumData = await fetchPlaylists();
                setAlbums(albumData);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch album data:", error);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="albumGrid">
            {albums.map((album) => (
                <Link href={`/playlists/currently_playing?id=${album.id}`} key={album.id}>
                    <div className="albumItem">
                        <img src={`/a${album.id}/cover.png`} alt={album.name} />
                    </div>
                </Link>
            ))}
        </div>
    );
}

