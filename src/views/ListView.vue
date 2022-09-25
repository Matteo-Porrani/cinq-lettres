<template>
    <div class="rules py-3">
        <div class="container">

            <h2 class="fs-5 text-center text-primary mb-5">Liste des mots</h2>

            <!--            <p class="f-inria text-mid fs-3 text-center">Voici la liste des mots<br>disponibles à ce jour :</p>-->
            <p class="f-inria text-mid fs-3 text-center mb-2">
                En panne d'inspiration ?
            </p>

            <p class="f-inria text-mid fs-3 text-center">
                Voici les {{ words.length }} mots<br>disponibles dans le jeu :
            </p>

            <WordListing/>

        </div>
    </div>
</template>

<script>
import {mapState} from "pinia";
import {useGameStore} from "@/stores/GameStore";
import WordListing from "@/components/misc/WordListing";

export default {
    name: "ListView",
    components: {
        WordListing
    },

    computed: {
        ...mapState(useGameStore, [
            'words'
        ]),
    },
}
</script>

<style scoped>

</style>