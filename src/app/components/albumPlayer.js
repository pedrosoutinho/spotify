import albumjson from 'data/albumData.json';

export default function AlbumPlayer({ albumId }) {

    const album = albumjson.albumData[albumId - 1];

    if (!album) {
        return <div>Album not found</div>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img className="w-100 rounded mb-4" src={`/a${albumId}.png`} alt={album.name} />
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
                            {album.songs.map((song, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{song}</td>
                                    <td>{album.durations[index]}</td>
                                    <td>
                                        <audio controls>
                                            <source src={`/a${albumId}/${index + 1}.flac`} type="audio/flac" />
                                            Erro: Seu navegador não suporta o elemento <code>audio</code>.
                                        </audio>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
