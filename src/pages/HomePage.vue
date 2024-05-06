
<script>
// chri
import axios from 'axios';

// components
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: "HomePage",

    data() {

        return {

            projects: [],

            baseApiUrl: 'http://127.0.0.1:8000/api',

        }

    },

    mounted() {
        
        axios.get(this.baseApiUrl + '/projects').then(res => {

            this.projects = res.data.results;

        })

    },

    methods: {
        
        
    },

    components: {
        ProjectCard,
    },

}

</script>

<template>

<div class="container py-4">

    <div>
        <ul>
            
            <ProjectCard 
            v-for="project in projects" 
            :card="project"
            >
            
            </ProjectCard>
        
        </ul>
    </div>
    <div class="col-auto d-flex justify-content-center ">
        <router-link :to= "{name:'contattami'}">contattami</router-link>
    </div>
    


</div>

</template>

<style lang="scss">
.container {
    ul {
       display: flex;
       flex-wrap: wrap;
       gap: 20px;
    }
}
</style>
