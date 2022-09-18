<template>
    <div class="home">
        <div class="container">

            <h1 class="text-center fs-8 mt-5">PENTA</h1>

            <h2 class="f-inria text-center mt-4" style="font-weight: normal;">Entre vous et la victoire,<br>seulement 5 petites lettres !</h2>
<!--            <h2 class="f-inria text-center mt-4" style="font-weight: normal;">Combien de mots de 5 lettres connaissez-vous ?</h2>-->

            <MainNavigation/>



        </div>



    </div>
</template>

<script>
// @ is an alias to /src
import MainNavigation from "@/components/navigation/MainNavigation.vue";


export default {
    name: 'HomeView',
    components: {
        MainNavigation,

    }
}
</script>
