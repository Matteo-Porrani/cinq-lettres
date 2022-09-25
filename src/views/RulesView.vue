<template>
    <div class="rules py-2">


        <TheRulesLocator/>


        <RulesContent/>

        <TheRulesNav/>
    </div>

</template>

<script>
import TheRulesLocator from "@/components/navigation/TheRulesLocator.vue";
import RulesContent from "@/components/misc/RulesContent.vue";
import TheRulesNav from "@/components/navigation/TheRulesNav.vue";

export default {
    name: 'RulesView',

    components: {
        TheRulesLocator,
        RulesContent,
        TheRulesNav,
    },

}

</script>

<style lang="scss" scoped>
@import '../assets/css/variables.scss';

.rules {
    //border: 2px solid #e72;
}


</style>