
<script>

    // components
import ContactForm from '../components/ContactForm.vue';

    export default{
        name:'ContactMe',

        components: {
        ContactForm,
    }

    }

   

    

</script>

<template>

    <div class="container my-5">
        <h1 class="text-center text-primary mb-3">Contattami</h1>
        <ContactForm></ContactForm>
    </div>
    
</template>

<style lang="scss">

</style>