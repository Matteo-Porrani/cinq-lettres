<template>
<!--    <p class="f-inria text-mid fs-2">{{ 10 - submissions.length }} tentatives restantes</p>-->
    <section id="submitCounter" class="my-1 mb-2">
        <!--    <small>#submitCounter</small>-->


        <FlagIcon v-if="selectedFrench" :colors="['#023e8a', '#fff', '#ef233c']" :selected="true" :small="true" class="me-1"/>
        <FlagIcon v-if="!selectedFrench" :colors="['#25a18e', '#fff', '#ef233c']" :selected="true" :small="true" class="me-1"/>

        <!--    FULL -->

        <i v-for="n in submissions.length" :key="n" class="fas fs-2 fa-circle"></i>
        <i v-for="n in (10 - submissions.length)" :key="n" class="far fs-2 fa-circle"></i>

    </section>
</template>

<script>
import FlagIcon from "@/components/lang/FlagIcon.vue";

import {mapState} from 'pinia';
import {useGameStore} from "@/stores/GameStore.js";

export default {
    name: "SubmitCounter",
    components: {
        FlagIcon,
    },

    computed: {
        ...mapState(useGameStore, [
            'selectedFrench',
            'submissions',
        ]),
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

#submitCounter {
    //outline: 2px solid #d04;
    //background-color: $light-hover;

    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;

    i.fas {
        color: $primary;
    }

    i.far {
        color: $mid;
    }


    .flag-section {
        //display: none;
        //transform: scale(.4) !important;
    }
}

</style>