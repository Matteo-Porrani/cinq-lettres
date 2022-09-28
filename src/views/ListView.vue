<template>
    <div class="rules py-3">
        <div class="container">

<!--            <h2 class="fs-5 text-center text-primary mb-5">Liste des mots</h2>-->

<!--            <p class="f-inria text-mid fs-3 text-center mb-2">-->
<!--                En panne d'inspiration ?-->
<!--            </p>-->

            <p class="f-inria text-mid fs-3 text-center">
                <span>{{ textForWordListing1 }}</span>
                {{ words.length }}
                <span v-html="textForWordListing2"></span> :
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
            'words',
            // getters
            'textForWordListing1',
            'textForWordListing2',

        ]),
    },



    mounted() {

        // FIXME --- vérification paroles
        // this.words.forEach(word => {
        //     const splittedWord = word.split('');
        //     const verifiedWord = [...new Set(splittedWord)];
        //
        //     if (splittedWord.length > verifiedWord.length) {
        //         console.log('Attention ! ', word);
        //     }
        // });
    }
}
</script>

<style scoped>

</style>