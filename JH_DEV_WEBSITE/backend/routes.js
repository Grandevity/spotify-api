const app = require('express');
const axios = require('axios');

const router = app.Router();
const client_id = "hidden from git";
const client_secret = "hidden from git";
const redirect_uri = 'http://localhost:8080/callback';


access_token = '';

const getToken = async () => {
  
  const authOptions = {
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    params: {
      grant_type: 'client_credentials',
      client_id: client_id,
      client_secret: client_secret,
      scope: 'user-top-read user-read-private user-read-email',
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
    },
    json: true
  };
  
  return axios(authOptions)
    .then(response => {
      const access_token = response.data.access_token;
      return access_token;
    })
    .catch(error => {
      console.log(`Error getting access token: ${error}`);
    });

}

function createJsonObj(tracks) {
  
  let jsonObj = {
    "tracks": []
  };

  for(let i = 0; i<tracks.length; i++) {

    let trackName = tracks[i].track.name;
    let trackArtist = tracks[i].track.artists[0].name;
    let trackUrl = tracks[i].track.preview_url;


    if(trackUrl != null) {
      jsonObj.tracks.push({
        "name": trackName,
        "artist": trackArtist,
        "preview_url": trackUrl
      })
    }
  }

  console.log(jsonObj);

  return(jsonObj);

};

const getAccountDetails = async () => {
  const authOptions = {
    method: 'GET',
    url: 'https://api.spotify.com/v1/users/jwhill163',

    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    json: true  

  };

  try {
    const response = await axios(authOptions);
    //console.log(response.data.name);
    return response.data;
  } catch (error) {
    console.log(`Error getting top tracks: ${error}`);
  }
};

const getPlaylist = async () => {
  const authOptions = {
    method: 'GET',
    url: 'https://api.spotify.com/v1/playlists/458132L0oaeF1VRpIVXgNo?si=3f5451b7b5474010/tracks&limit=1',

    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    json: true  

  };

  try {
    const response = await axios(authOptions);

    console.log(response.data.tracks.items[0].track.name)
    console.log(response.data.tracks.items[0].track.artists[0].name)
    console.log(response.data.tracks.items[0].track.preview_url)

    console.log("How many songs :", response.data.tracks.items.length);

    return response.data.tracks.items;
  } catch (error) {
    console.log(`Error getting top tracks: ${error}`);
  }
};

router.get('/', (req, res) => {
    res.send("Backend @ Port 3000, NodeJS, ExpressJS & Axios application. Built entirely by Joseph Hill.")
  });

router.get('/spotify', (req, res) => {

  getToken().then(async token => {
    console.log(`Access token: ${token}`);
    access_token = token;

    getAccountDetails().then(async details => {
      //console.log(details);
      res.send(details);
    })
  });

});

router.get('/spotify_playlist', (req, res) => {

  getToken().then(async token => {
    console.log(`Access token: ${token}`);
    access_token = token;

    getPlaylist().then(async tracks => {
      res.send(createJsonObj(tracks));
    })
  });

});

module.exports = router;