<template>
    <div id="theHomeHeader">
        <h1 class="text-center text-accent-light fs-12 mt-5" style="z-index: 9999;">PENTA</h1>
        <h1 class="text-center fs-12"
            style="transform: translate(-1%, -111%);">
            PENTA
        </h1>
        <h2 class="f-inria text-center mt-2" style="font-weight: normal;">
            <span v-html="homeClaim"></span>
        </h2>
    </div>
</template>

<script>
import {mapState} from 'pinia';
import {useGameStore} from "@/stores/GameStore";

export default {
    name: "TheHomeHeader",

    computed: {
        ...mapState(useGameStore, [
            'homeClaim'
        ]),
    }
}
</script>

<style lang="scss" scoped>
#theHomeHeader {
    //border: 1px solid #f06;
}
</style>