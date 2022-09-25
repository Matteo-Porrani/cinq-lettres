<template>
    <div id="theRulesLocator" class="p-1 text-center">
        <div class="container">

            <div class="locator text-mid">
                <span>{{ locator }} / 3</span>
            </div>

        </div>
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
            'testLog',
        ]),
    },
}
</script>

<style lang="scss" scoped>
#theRulesLocator {
    //border: 1px solid #929;

}
</style>