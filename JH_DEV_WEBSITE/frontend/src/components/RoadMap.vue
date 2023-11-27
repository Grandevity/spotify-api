<template>
    <div class="d-flex align-center flex-column width">
        <v-card
        width="100%"
        class="Borders my-5 px-10 py-5 rounded-xl"
        color="#22222A"
        elevation="15"
        >
            <v-card-title class="titles">

                <v-icon class="mr-3" color="#359bdb">
                    mdi-sitemap
                </v-icon>

                <span>Roadmap</span>
            </v-card-title>


            <v-divider></v-divider>

            <v-card-text class="text-body-1">

                <v-timeline>
                    <RoadmapEntry>
                        <template v-slot:date>
                            2016 - 2018
                        </template>

                        <template v-slot:title>
                            Sixth Form
                        </template>

                        <template v-slot:content>
                            <table>
                                <tr>
                                    <th>Subject</th>
                                    <th>Grade</th>
                                </tr>
                                <tr>
                                    <td>Computer Science</td>
                                    <td>B</td>
                                </tr>
                                <tr>
                                    <td>Economics</td>
                                    <td>B</td>
                                </tr>
                                <tr>
                                    <td>Business</td>
                                    <td>C</td>
                                </tr>
                            </table>
                        </template>
                    </RoadmapEntry>
                    <RoadmapEntry>
                        <template v-slot:date>
                            2019
                        </template>

                        <template v-slot:title>
                            My <i> COVID-19 </i> response
                        </template>

                        <template v-slot:content>
                            <ul>
                                <li><b>Technical Engineer, NHS Support Provider<br><br></b></li>
                                <li>Remote Desktop Support</li>
                                <li>Clinical Software installation & configuration</li>
                                <li>OS Support, including Active Directory Administration</li>
                                <li>Business Client & bespoke Software Support</li>
                                <li>Liaising with Field Engineers, planning & logistics</li>
                                <li>Server & SQL Database Management</li>
                                <li>Cybersecurity support</li>
                            </ul>

                        </template>
                    </RoadmapEntry>
                    <RoadmapEntry>
                        <template v-slot:date>
                            2020 - 2022
                        </template>

                        <template v-slot:title>
                            Bournemouth University
                        </template>

                        <template v-slot:content>
                            
                            <ul>
                                <li><b>BSc Honours Software Engineering<br><br></b></li>
                                <li>Python (Including web frameworks)</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>HTML5, Vue3, Vuetify</li>
                                <li>NodeJS, Express</li>
                                <li>SQL</li>
                                <li>Unified Modelling Language UML</li>
                                <li>Kotlin (JVM), Android Development</li>
                            </ul>

                        </template>
                    </RoadmapEntry>
                    <RoadmapEntry>
                        <template v-slot:date>
                            2022 - 2023
                        </template>

                        <template v-slot:title>
                            <span class="card-container">Micro Nav Ltd Software</span>
                        </template>

                        <template v-slot:content>
                            <ul>
                                <li><b>Full stack Engineer, R&D<br><br></b></li>
                                <li>C++ Product Maintenance</li>
                                <li>JavaScript</li>
                                <li>Vue3, Vuetify</li>
                                <li>Web Design</li>
                                <li>SQL Heidi</li>
                                <li>API Integration</li>
                                <li>Bespoke routing</li>
                            </ul>

                        </template>
                    </RoadmapEntry>
                    
                </v-timeline>

                

            </v-card-text>

            <v-divider></v-divider>
            
        </v-card>
    </div>
</template>

<script>
import RoadmapEntry from '@/components/RoadmapEntry.vue'



export default {
  name: 'RoadMap',

  components: {
    RoadmapEntry,


  },
  data() {
    return {

    
    };
  },
};
</script>

<style scoped>

table {
    margin: 0 auto;
}
th, td {
    text-align: left;
    padding-right: 10px;
}

ul {
    padding: 10px;
    text-align: center;
}

.timeline-container {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px; /* adjust as needed */
  margin: 0 auto;
}

span {
    width: 5px;
}

</style>