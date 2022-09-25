<template>
    <div id="languageSelector" class="my-4">

        <div class="flag-section">
            <FlagIcon :colors="['#023e8a', '#fff', '#ef233c']" :selected="selectedFrench"/>
        </div>

        <div class="toggle-section">
            <BaseToggle @click="toggleLanguage"/>
        </div>

        <div class="flag-section">
            <FlagIcon :colors="['#25a18e', '#fff', '#e12']" :selected="!selectedFrench"/>
        </div>

    </div>
</template>

<script>
import {mapState, mapActions} from "pinia";
import {useGameStore} from "@/stores/GameStore";

import FlagIcon from "@/components/lang/FlagIcon.vue";
import BaseToggle from "@/components/UI/BaseToggle.vue";

export default {
    name: "LanguageSelector",
    components: {
        FlagIcon,
        BaseToggle,
    },

    computed: {
        ...mapState(useGameStore, [
            'selectedFrench',
        ]),
    },

    methods: {
        ...mapActions(useGameStore, [
            'toggleLanguage'
        ]),
    },
}
</script>

<style lang="scss" scoped>
#languageSelector {
    //border: 1px solid #e12;
    height: 70px;

    display: flex;

    .flag-section {
        width: 30%;
        //background-color: yellow;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .toggle-section {
        //border: 1px solid #8b2;
        display: flex;
        justify-content: center;
        align-items: center;


        flex-grow: 1;
    }


}
</style>