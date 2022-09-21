<template>
    <section id="gameWrapper" class="text-center px-2 my-1">
<!--        <small>#gameWrapper</small>-->

        <SubmitCounter/>

        <WordDisplay/>

    </section>
</template>

<script>
import {mapState, mapActions} from 'pinia';
import {useGameStore} from "@/stores/GameStore.js";

import SubmitCounter from "@/components/game/SubmitCounter.vue";
import WordDisplay from "@/components/game/WordDisplay.vue";

export default {
    name: "GameWrapper",

    components: {
        SubmitCounter,
        WordDisplay,

    },

    computed: {
        ...mapState(useGameStore, [
            'word',
            'words',
        ]),
    },

    methods: {
        ...mapActions(useGameStore, [
            'getRandomWord',
        ]),


    },

    mounted() {
        this.getRandomWord();
    }
}
</script>

<style lang="scss" scoped>
#gameWrapper {
    //outline: 2px solid #2cc;
    height: 60vh;
    //overflow: scroll;

    input {
        font-family: inherit;
        letter-spacing: 6px;
    }
}
</style>