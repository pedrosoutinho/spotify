import albumjson from 'data/albumData.json';
import Link from "next/link";

export default function AlbumGrid() {
    return (
        <div className="albumGrid">
            {albumjson.albumData.map((album) => (
                <Link href={`/playlists/currently_playing?id=${album.id}`} key={album.id}>
                    <div className="albumItem">
                        <img src={`/a${album.id}.png`} alt={album.name} />
                    </div>
                </Link>
            ))}
        </div>
    );
}
