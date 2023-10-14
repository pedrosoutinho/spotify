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

export const registerUser = async (user) => {
    try{
        const response = await axios.post(`${API_URL}/users`, user);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchAlbums = async () => {
    try {
        const response = await axios.get(`${API_URL}/albumData`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchAlbum = async (albumId) => {
    try {
        const response = await axios.get(`${API_URL}/albumData/${albumId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
