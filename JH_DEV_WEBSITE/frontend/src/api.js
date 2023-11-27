import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  
  getHello() {
    console.log("hello");
    return apiClient.get('/')
  },
  getSpotify() {
    return apiClient.get('/spotify')
  },
  getSpotifyPlaylist() {
    return apiClient.get('/spotify_playlist')
  },
};