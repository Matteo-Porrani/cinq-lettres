<template>
    <div class="home">
        <div class="container">

            <h1 class="text-center text-accent-light fs-12 mt-5" style="z-index: 9999;">PENTA</h1>
            <h1 class="text-center fs-12"
                style="transform: translate(-1%, -111%);">
                PENTA
            </h1>

            <h2 class="f-inria text-center mt-2" style="font-weight: normal;">Entre vous et la victoire,<br>seulement 5 petites lettres !</h2>
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
