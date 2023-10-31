import axios from 'axios'

const API_URL = 'http://localhost:3001';

export const loginUser = async (credentials) => {
    try {
        const { email, password } = credentials;
        const response = await axios.get(`${API_URL}/users?email=${email}`);
        const users = response.data;
        if (users.length === 1 && users[0].password === password) {
            return { success: true, user: users[0] };
        } else {
            throw new Error('Invalid credentials');
        }
    } catch (error) {
        throw error;
    }
};

export const doesEmailExist = async (email) => {
    try {
        const response = await axios.get(`${API_URL}/users?email=${email}`);
        return response.data.length > 0;
    } catch (error) {
        throw error;
    }
};

export const registerUser = async (user) => {
    try{
        const response = await axios.post(`${API_URL}/users`, user);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchPlaylists = async () => {
    try {
        const response = await axios.get(`${API_URL}/playlists`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchPlaylist = async (playlistId) => {
    try {
        const response = await axios.get(`${API_URL}/playlists/${playlistId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchSongs = async () => {
    try {
        const response = await axios.get(`${API_URL}/songs`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateUser = async (user) => {
    try {
        const { id, ...userData } = user;
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.id === id) {
            const response = await axios.put(`${API_URL}/users/${id}`, userData);
            const updatedUser = response.data;

            localStorage.setItem('user', JSON.stringify(updatedUser));

            return updatedUser;
        } else {
            throw new Error('User not found in local storage');
        }
    } catch (error) {
        throw error;
    }
};


export const registerPlaylist = async (playlist) => {
    try {
        const response = await axios.post(`${API_URL}/playlists`, playlist);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deletePlaylist = async (playlistId) => {
    try {
        await axios.delete(`${API_URL}/playlists/${playlistId}`);
        return { success: true };
    } catch (error) {
        throw error;
    }
};

export const addSongToPlaylist = async (playlistId, songId) => {
    try {
        const response = await axios.get(`${API_URL}/playlists/${playlistId}`);
        const playlist = response.data;

        if (!playlist.songs.includes(songId)) {
            playlist.songs.push(songId);
        }

        const updateResponse = await axios.put(`${API_URL}/playlists/${playlistId}`, playlist);
        return updateResponse.data;
    } catch (error) {
        throw error;
    }
};

export const deleteSongFromPlaylist = async (playlistId, songId) => {
    try {
        const response = await axios.get(`${API_URL}/playlists/${playlistId}`);
        const playlist = response.data;
        playlist.songs = playlist.songs.filter(song => song !== songId);
        await axios.put(`${API_URL}/playlists/${playlistId}`, playlist);
        return { success: true };
    } catch (error) {
        throw error;
    }
};


