<template>
    <section id="mainNavigation" class="mt-10">
<!--        <small>#mainNavigation</small>-->

        <MainLink route="/game" type="primary" size="normal">
            <template v-slot:icon>
                <i class="fas fa-puzzle-piece"></i>
            </template>
            <template v-slot:default>Jouer</template>
        </MainLink>

        <MainLink route="/rules"
                  type="outline"
                  size="normal"
        >

            <template #icon>
                <i class="fas fa-question-circle"></i>
            </template>

            <template v-slot:default>Instructions</template>
        </MainLink>

        <MainLink route="/about"
                  type="outline"
                  size="normal"
        >
            <template #icon>
                <i class="fas fa-smile-wink"></i>
            </template>
            <template v-slot:default>À propos</template>
        </MainLink>

    </section>
</template>

<script>
// import MainLink from "@/components/navigation/MainLink.vue";

import MainLink from "@/components/navigation/MainLink";
export default {
    name: "MainNavigation",

    components: {
        MainLink
        // MainLink,
    },


}
</script>

<style lang="scss" scoped>
#mainNavigation {
    //border: 2px solid #19e;
}
</style>