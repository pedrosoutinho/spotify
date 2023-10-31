import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = 'http://localhost:3001';

  const fetchSongs = async () => { //pegar as musicas
    try {
      const response = await axios.get(`${API_URL}/songs`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (searchText) {
      setLoading(true);
      fetchSongs() //aqui
        .then((songs) => {
          const filteredResults = songs.filter((song) =>
            song.title.toLowerCase().includes(searchText.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchText.toLowerCase()) ||
            song.album.toLowerCase().includes(searchText.toLowerCase())
          );
          setSearchResults(filteredResults);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Erro ao buscar resultados: ', error);
          setLoading(false);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchText]);

  const redirectToAlbumPage = (albumId) => { //função de redirecionamento
    const albumPageURL = `http://localhost:3000/playlists/currently_playing?id=${albumId}`; // se colocar sem o http ele da 404 pq a URL nao muda antes do playlists
    window.location.href = albumPageURL;
  };

  return (
    <div>
      <input
        className='custom-input-searchbar'
        type="text"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul className='custom-ul'>
          {searchResults.map((result) => (
            <li
              key={result.id}
              className='custom-li-searchbar'
              onClick={() => redirectToAlbumPage(result.albumId)} // Vai mandar pro album se clicar no li
            >
              <div className='li-itens'>
                <div><strong>{result.title}</strong></div>
                <div>Artist - {result.artist}</div>
                <div>Album - {result.album}</div>
                <div>Duration - {result.duration}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
