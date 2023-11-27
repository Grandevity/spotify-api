<template>
    <div>
        <v-card
        class="spotifyPill px-5 py-5 rounded-pill my-3"
        shaped
        width="100%"

        >
        <div class="d-flex">
            <slot name=url>
                <v-btn @click="handleClick()" icon="mdi-play" class="playButton"></v-btn>
            </slot>

            <div class="align-center inner-pill-container">
                <slot name="title">Title</slot>

                <slot name="artist">Artist Name</slot>
            </div>
        </div>

        
        </v-card>
    </div>
</template>

<script>
    export default {
    name: 'SpotifyApiPill',

    components: {

    },
    data() {
        return {

        };
    },
    methods: {
        handleClick() {
            const audio = new Audio('https://p.scdn.co/mp3-preview/aee1b255542c05cb8eec6d95d7a2a6403e35451e?cid=5e2af2706cd64af592cae449c505e35b');
            audio.play();
        },
    }
    }
</script>

<style scoped>

.spotifyPill {
    background-color: #1d1d21;
    color: #ccd4db;
    color: white;
}


.playButton {
    background-color: #131314;
    color: #1DB954;
}

.inner-pill-container {
    text-align: left;
    margin-top: auto;
    margin-left: 20px;
}

</style>