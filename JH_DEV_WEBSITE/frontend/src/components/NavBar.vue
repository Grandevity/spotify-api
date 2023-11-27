<template>
    <div>
        <v-app-bar
        app
        dark
        class="NavBar overflow-none elevation-10"
        permanent
        mini-variant-width="70"
        width="310"
        clipped
        stateless
        density="comfortable">
            <v-app-bar-title
            class="titles"
            >
            Joseph Hill, Software Engineer, London, UK</v-app-bar-title>

            <v-btn icon="mdi-github"></v-btn>
            <v-btn icon="mdi-linkedin"></v-btn>
            <v-btn icon="mdi-email"></v-btn>
        </v-app-bar>

         
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.NavBar {
    background-color: #22222A;
    color: #ccd4db;
    letter-spacing: 0.15em;
    font-family: sans-serif;
}
</style>