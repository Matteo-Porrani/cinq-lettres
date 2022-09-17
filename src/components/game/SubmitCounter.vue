<template>

    <section id="submitCounter" class="my-1 mb-3">
        <!--    <small>#submitCounter</small>-->

        <!--    FULL -->
        <i v-for="n in submissions.length" :key="n" class="fas fa-circle"></i>
        <i v-for="n in (10 - submissions.length)" :key="n" class="far fa-circle"></i>

    </section>
</template>

<script>
import {mapState} from 'pinia';
import {useGameStore} from "@/stores/GameStore.js";

export default {
    name: "SubmitCounter",

    computed: {
        ...mapState(useGameStore, [
            'submissions',
        ]),
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

#submitCounter {
    //outline: 2px solid #d04;

    display: flex;
    gap: 10px;
    justify-content: center;

    i.fas {
        color: $primary;
    }

    i.far {
        color: $light-hover;
    }
}

</style>