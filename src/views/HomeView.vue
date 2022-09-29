<template>
    <div class="home">
        <div class="container">

            <TheHomeHeader/>

            <LanguageSelector/>

            <MainNavigation/>

        </div>
    </div>
</template>

<script>
import {mapActions} from "pinia";

import {useRuleStore} from "@/stores/RuleStore.js";


// @ is an alias to /src
import TheHomeHeader from "@/components/UI/TheHomeHeader.vue";
import LanguageSelector from "@/components/UI/LanguageSelector.vue";
import MainNavigation from "@/components/navigation/MainNavigation.vue";


export default {
    name: 'HomeView',
    components: {
        TheHomeHeader,
        LanguageSelector,
        MainNavigation,
    },

    methods: {
        ...mapActions(useRuleStore, [
            'resetLocator',
            'reloadGame',
        ]),
    },

    mounted() {
        this.resetLocator();
    }
}
</script>
