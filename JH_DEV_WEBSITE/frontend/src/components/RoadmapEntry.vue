<template>
    <v-timeline-item
        large
        dot-color="#1d1d21"
        >
        <template v-slot:opposite>
            <v-chip class="px-5 dateChip"><slot name="date">The date</slot></v-chip>
        </template>
        <v-card class="elevation-2 roadmapCard px-5">
            
            <v-card-title class="headline"><slot name="title">The title</slot></v-card-title>


            <v-divider></v-divider>

            <v-card-actions>
                <v-btn
                    text
                    color="#359bdb"
                    @click="reveal = true"
                >
                    Expand Panel
                </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <v-card
                    v-if="reveal"
                    class="transition-fast-in-fast-out v-card--reveal roadmapCard"
                    style="height: 100%;"
                    flat
                >
                <v-card-text>
                    <slot name="content">Some content about this roadmap segment</slot>
                </v-card-text>
                    <v-card-actions class="pt-0">
                    <v-btn
                        text
                        color="#bb2b1b"
                        @click="reveal = false"
                    >
                        Close
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-expand-transition>
        </v-card>
    </v-timeline-item>
</template>

<script>
    export default {
    name: 'RoadmapEntry',

    components: {

    },
    data() {
        return {
            reveal: false,

        };
    },
    }
</script>

<style scoped>

.roadmapCard {
    background-color: #1d1d21;
    color: #ccd4db;
    width: 100%;
}

.dateChip {
    background-color: #1d1d21;
    color: #359bdb;   
}

.headline {
    text-align: center;
}

.v-card-text {
    padding: 0;
}

.v-card-actions {
    justify-content:center
}

</style>