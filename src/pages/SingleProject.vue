<script>

import axios from 'axios';

export default {
    name: 'SingleProject',

    data() {
        return {
            project: null,
            projectSlug: null,

            apiBaseUrl: 'http://127.0.0.1:8000/api',
        }
    },

    mounted() {
        this.projectSlug = this.$route.params.slug;
        
        axios.get(this.apiBaseUrl + '/projects/' + this.projectSlug).then(res => {

            console.log(res)

            if(res.data.success) {
                
                // se troviamo il post lo salviamo
                this.project = res.data.project

            } else {
                // altrimenti torniamo alla home
                this.$router.push({name: 'home'})
            }


        })
    },
}

</script>

<template>


<div v-if="project" class="container py-5 fs-2">
    <h1 class="py-4">PAGINA DEL POST SINGOLO </h1>
<!----->
<div class="card bg-info"  style="width: 70rem;">
  <img :src="'http://localhost:8000/storage' + project.thumb" class="card-img-top" alt="...">
  <div class="card-body">
    <ul class="nav flex-column">
            <li><strong>Project title : </strong>{{ project.title }}</li>
            <li><strong>Project description : </strong>{{project.description}}</li>
            <li><strong>Project type : </strong>{{project.type?.name}}</li>
            <li><strong>Project technologies : </strong>
                <span v-for=" technology in project.technologies " class="badge rounded-pill text-bg-success">
                    {{ technology.name}}
                </span>
            </li>
        </ul>
  </div>
</div>
<!----->

    </div>

  

  

  

    <div v-else>
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

</template>


<style lang="scss" scoped>
</style>