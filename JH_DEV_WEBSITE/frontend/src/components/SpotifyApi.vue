<template>
    <div>
        <v-card
        width="100%"
        class="Borders my-5 px-10 py-5 rounded-xl"
        color="#22222A"
        elevation="15"
        >
            <v-card-title class="titles">

                <v-icon class="mr-3" color="#1DB954">
                  mdi-spotify
                </v-icon>

                <span>Spotify API</span>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="text-body-1">
              <v-card class="info-card px-5 py-5 d-inline-flex">

                <div>
                  <h3> <v-icon>mdi-account</v-icon> Username</h3>
                  {{ strDisplayName }}
                  <v-spacer></v-spacer>   
                </div>
                <div>
                  <h3><v-icon>mdi-account-multiple</v-icon> Followers</h3>
                  {{ strFollowers }}
                  <v-spacer></v-spacer>
                </div>

              </v-card>
            </v-card-text>

            <v-card-text v-if="SpotifyDataSent == true" class="api-pill-container">

                <spotify-api-pill v-for="index in 10" :key="index">

                  <template v-slot:title>
                      <h2>{{(this.kSpotifyPlaylist.data.tracks[index-1].name)}}</h2> <!-- .tracks.items[index].track.name-->
                  </template>
                  <template v-slot:artist>
                      {{this.kSpotifyPlaylist.data.tracks[index-1].artist}} <!-- .tracks.items[index].track.artists[index].name-->
                  </template>
                  <template v-slot:url>
                    <v-btn v-on:click="handleClick(index)" icon="mdi-play" class="playButton"></v-btn>
                  </template>

                </spotify-api-pill>

            </v-card-text>

        </v-card>

    </div>
</template>

<script>
import api from '@/api';
import SpotifyApiPill from '@/components/SpotifyApiPill.vue'


//audio variable to be used
let audio = new Audio();

export default {
  name: 'SpotifyApi',

  components: {
    SpotifyApiPill,


  },
  data() {
    return {
      kSpotify: [],
      kSpotifyPlaylist: [],
      strDisplayName: "",
      strFollowers: "",
      strExternalUrl: "",
      SpotifyDataSent: false,
      currentSongPlaying: "",
      audioSync: false
    };
  },
  
  created() {
    api.getSpotify().then((response) => {
      this.kSpotify = response.data;
      this.strDisplayName = this.kSpotify.display_name;
      this.strFollowers = this.kSpotify.followers.total;
      this.strExternalUrl = this.kSpotify.external_urls.spotify;
    });

    api.getSpotifyPlaylist().then((response) => {
      this.kSpotifyPlaylist = response;
      console.log(this.kSpotifyPlaylist.data);
      console.log(this.kSpotifyPlaylist.data.tracks[0].name);
      this.SpotifyDataSent = true;
      
    });

  },
  methods: {
        handleClick(index) {

            audio.pause();

            this.currentSongPlaying = this.kSpotifyPlaylist.data.tracks[index-1].preview_url;

            audio = new Audio(this.currentSongPlaying);
            audio.volume = 0.05;
            audio.play();
        },
    }
  
}
</script>

<style scoped>
.playButton {
    background-color: #131314;
    color: #1DB954;
}

.api-pill-container {
  height: 436px;
  overflow-y: scroll;
}

.info-card {
  width: 100%;
  background-color: #1d1d21;
  color: #ccd4db;
  justify-content: space-evenly;
  text-align: left;
  
}

</style>