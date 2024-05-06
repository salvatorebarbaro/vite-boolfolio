<script>
export default {
      name:"AppFooter",

    data(){
        return{

        }
    }
}
</script>

<template>
<footer>

  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">Questo sito è stato realizzato con VUE + LARAVEL</p>
    </div>
    <div class="card-footer text-body-secondary">
      copyright@2024
    </div>
  </div>
  
</footer>

</template>

<style lang="scss" scoped>

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

</style>