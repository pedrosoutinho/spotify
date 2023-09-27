import Link from "next/link";

export default function AlbumGrid() {

    const albumData = [
        { id: 1, name: 'Ants From Up There', artist: 'Black Country, New Road' },
        { id: 2, name: 'Illinois', artist: 'Sufjan Stevens' },
        { id: 3, name: 'The Glow Pt. 2', artist: 'The Microphones' },
        { id: 4, name: 'White Pony', artist: 'Deftones' },
        { id: 5, name: 'For the First Time', artist: 'Black Country, New Road' },
        { id: 6, name: 'Deathconsciousness', artist: 'Have a Nice Life' },
        { id: 7, name: 'Masked Dancers: Concern in So Many Things You Forget Where You Are', artist: 'The Brave Little Abacus' },
        { id: 8, name: 'Soundtracks for the Blind', artist: 'Swans' },
    ];

    return (
        <div className="albumGrid">
            {albumData.map((album) => (
                <Link href={`/playlists/currently_playing?id=${album.id}`} key={album.id}>
                    <div className="albumItem">
                        <img src={`/a${album.id}.png`} alt={album.name} />
                    </div>
                </Link>
            ))}
        </div>
    );
}
