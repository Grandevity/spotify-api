<template>
    <div class="d-flex align-center flex-column width">
        <v-card
        width="70%"
        class="Borders my-5 px-10 py-5 rounded-xl"
        color="#22222A"
        elevation="15"
        >
            <v-card-title class="titles">

                <v-icon class="mr-3" color="#359bdb">
                    mdi-account-alert
                </v-icon>

                <span>About myself</span>
            </v-card-title>


            <v-divider></v-divider>

            <v-card-text class="text-body-1">
            
                Who am I you may ask? well let me tell you.
                <br>
                A <b>fullstack software engineer</b> and AI Enthusiast, currently studying towards a <b>BSC Software Engineering</b> degree

                <br>
                <br>
                I usually work projects using:
                <br>
                <v-list
                density="compact"
                class="vlist px-3 py-5 my-5"
                rounded="xl"
                >
                    <v-list-item><v-icon color="#45a8d6">mdi-vuetify</v-icon> Vue / Vuetify - web frameworks and styling</v-list-item>
                    <v-list-item><v-icon color="#e8c546">mdi-language-javascript</v-icon>  - Web Development</v-list-item>
                    <v-list-item><v-icon color="#3c873a">mdi-nodejs</v-icon> - Node.js Web Servers with express.js </v-list-item>
                    <v-list-item><v-icon color="#e8c546">mdi-language-python</v-icon> - Automation, AI and Scripting</v-list-item>
                    <v-list-item><v-icon color="#45a8d6">mdi-language-cpp</v-icon> - Object Orientated Applications </v-list-item>
                </v-list>

            </v-card-text>

            <v-divider></v-divider>
        </v-card>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.vlist {
    background-color: #1d1d21;
    color: #ccd4db;
}

</style>