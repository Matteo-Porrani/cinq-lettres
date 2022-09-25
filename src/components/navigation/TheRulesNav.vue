<template>
    <div id="theRulesNav" class="p-2">
        <button v-if="locator > 1" @click="prevLocator" class="py-1 px-3">
            <i class="fas fs-5 fa-arrow-left"></i>
        </button>

<!--        <div class="locator">-->
<!--            <span>{{ locator }}</span>-->
<!--        </div>-->

        <button v-if="locator < 3" @click="nextLocator" style="margin-left: auto" class="py-1 px-3">
            <i class="fas fs-5 fa-arrow-right"></i>
        </button>
    </div>
</template>

<script>
import {mapState, mapActions} from "pinia";
import {useRuleStore} from "@/stores/RuleStore.js";

export default {
    name: "TheRulesNav",

    computed: {
        ...mapState(useRuleStore, [
            'locator',
        ]),
    },

    methods: {
        ...mapActions(useRuleStore, [
            'prevLocator',
            'nextLocator',
        ]),
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

#theRulesNav {
    //border: 1px solid #19e;
    //background-color: #fd3;


    //position: absolute;
    //left: 0;
    //right: 0;
    //bottom: 0;
    //z-index: 9999;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        color: $primary;
        background-color: $light;
        border: 2px solid $primary;
        border-radius: 10px;

    }
}
</style>