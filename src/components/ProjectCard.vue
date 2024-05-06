<script>
export default {
      name:"ProjectCard",

      props:{
        card: Object,
      },

    data(){
        return{

        }
    }
}
</script>

<template>


  <li class="py-3 d-flex gap-4 ">


    <div class="card">

      <img :src="'http://localhost:8000/storage' + card.thumb" class="card-img-top" :alt="card.title">

      <div class="card-body">
        <h5 class="card-title text-center mb-2">{{ card.title }}</h5>

        <div class="d-flex gap-2 ">
          <span v-for="technology in card.technologies"  class="badge rounded-pill px-3 py-2 my_badge text-black " :style="{'background-color': technology.color ?? 'rgba(255, 255, 255, 0.6)' }">
            {{ technology.name }}
          </span>
        </div>

        <p class="card-text">{{ card.description }}</p>
        
        <router-link :to="{name: 'single-project', params: {slug: card.slug}}"  class="btn btn-outline-info btn-outline">Mostra</router-link>
      </div>
    </div>

     

  </li>

</template>

<style lang="scss" scoped>

li {
  width: calc(100% / 2 - 20px / 2);

  .card {
    width: 100%;
  }
}
</style>