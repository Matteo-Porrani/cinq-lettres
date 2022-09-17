<template>
    <section id="theKeyboard">

        <div v-for="(row, index) in keyboardRows" :key="index" class="keyboard-row mb-1">
            <SingleKey v-for="(key, keyIndex) in row" :key="keyIndex" :content="key"></SingleKey>
        </div>

    </section>
</template>

<script>
import { mapState } from 'pinia';
import {useGameStore} from "@/stores/GameStore.js";
import SingleKey from "@/components/UI/SingleKey.vue";

export default {
    name: "TheKeyboard",

    components: {
        SingleKey,
    },

    computed: {
        ...mapState(useGameStore, [
            'keyboardRows',
        ]),

    }
}
</script>

<style lang="scss" scoped>
#theKeyboard {
    //outline: 2px solid #fa1;


    .keyboard-row {
        display: flex;
        gap: 5px;
        justify-content: center;
    }
}
</style>