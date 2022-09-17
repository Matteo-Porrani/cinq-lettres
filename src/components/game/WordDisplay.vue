<template>
    <section id="wordDisplay">

        <WordDisplayLine v-for="(submission, index) in submissions"
                         :key="index"
                         :hints="hints[index]"
                         :submitted-word="submission"
                         :current="false"/>

        <WordDisplayLine :submitted-word="word"
                         :current="true"/>
    </section>
</template>

<script>
import WordDisplayLine from "@/components/game/WordDisplayLine.vue";

import {mapState} from 'pinia';
import {useGameStore} from "@/stores/GameStore.js";

export default {
    name: "WordDisplay",
    components: {
        WordDisplayLine,

    },

    computed: {
        ...mapState(useGameStore, [
            'word',
            'submissions',
            'hints'
        ])
    }
}
</script>

<style lang="scss" scoped>
#wordDisplay {
    //outline: 2px solid #189;
}
</style>