<template>
  <v-app class="app">
    <v-main>
      <NavBar ></NavBar >
      <TypeWriter></TypeWriter>
      <AboutMe></AboutMe>

      <v-container fluid class="box-container px-0">
        <v-row>
          <v-col cols="12" md="7"> <!-- 70% width on medium and larger screens -->
            <!-- your left panel component code here -->
            <RoadMap></RoadMap>
          </v-col>
          <v-col cols="12" md="5"> <!-- 30% width on medium and larger screens -->
            <!-- your right panel component code here -->
            <SpotifyApi></SpotifyApi>
          </v-col>
        </v-row>
      </v-container>

      <AboutMe></AboutMe>



      <v-card
      class="mt-10 pa-md-4 mx-lg-auto text-center"
      max-width="960"
      variant="outlined"
      color="white"
      >Sent from node server : {{ message }}
    </v-card>
    </v-main>
  </v-app>
</template>

<script>


//importing the api.js file to connect to node backend
import api from '@/api';
import NavBar from '@/components/NavBar.vue'
import AboutMe from '@/components/AboutMe.vue'
import TypeWriter from '@/components/TypeWriter.vue'
import RoadMap from '@/components/RoadMap.vue'
import SpotifyApi from '@/components/SpotifyApi.vue'

export default {
  name: 'App',

    components: {
    NavBar,
    AboutMe,
    TypeWriter,
    RoadMap,
    SpotifyApi,

    },
    data() {
      return {
        message: '',
      };
    },
    created() {
      api.getHello().then((response) => {
        this.message = response.data;

      });
    },
}
</script>

<style>

.app {
  background-color: #1d1d21;
  align-content: center;
}

.titles {
    letter-spacing: 0.15em;
    font-family: sans-serif;    
}

.box-container {
  max-width: 70%;
}

.Borders {
    color: #ccd4db;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px #1d1d21; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #0c0c0e; 
  border-radius: 10px;
}

/* use this to handle screensizes and CSS for the different screensizes */
@media (max-width: 768px) {

.box-container {
  max-width: 90%;
}

}

</style>
