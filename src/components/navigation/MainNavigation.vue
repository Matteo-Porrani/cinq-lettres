<template>
    <section id="mainNavigation" class="mt-8">
        <!--        <small>#mainNavigation</small>-->

        <!-- GAME -->
        <MainLink route="/game" type="primary" size="normal">
            <template v-slot:icon>
                <i class="fas fa-puzzle-piece"></i>
            </template>
            <template v-slot:default>{{ textForPlay }}</template>
        </MainLink>


        <!-- RULES -->
        <MainLink route="/rules" type="outline" size="normal">
            <template #icon>
                <i class="fas fa-question-circle"></i>
            </template>
            <template v-slot:default>{{ textForRules }}</template>
        </MainLink>


        <!-- LIST -->
        <MainLink route="/list" type="outline" size="normal">
            <template #icon>
                <i class="fas fa-sort-alpha-down"></i>
            </template>
            <template v-slot:default>{{ textForList }}</template>
        </MainLink>


        <!-- ABOUT -->
        <MainLink route="/about" type="outline" size="normal">
            <template #icon>
                <i class="fas fa-ghost"></i>
            </template>
            <template v-slot:default>{{ textForAbout }}</template>
        </MainLink>


        <!--        <button class="fs-5" @click="toggleIcon">Toggle</button>-->

        <!-- Here we use a child component wrapped in <transition> and provide a name -->
        <!-- in the parent component we set the v-if condition -->
        <!-- in the child component we set scoped CSS classes for animation -->

        <transition name="icon">
            <TestAnimation v-if="iconIsVisible"/>
        </transition>

    </section>
</template>

<script>
import {mapState} from 'pinia';
import {useGameStore} from "@/stores/GameStore";

import TestAnimation from "@/components/UI/TestAnimation";

export default {
    name: "MainNavigation",

    components: {
        TestAnimation,
    },

    data() {
        return {
            iconIsVisible: false,
        }
    },

    computed: {
        ...mapState(useGameStore, [
            'textForPlay',
            'textForRules',
            'textForList',
            'textForAbout',
        ]),
    },

    methods: {
        toggleIcon() {
            this.iconIsVisible = !this.iconIsVisible;
        }
    },

}
</script>

<style lang="scss" scoped>
#mainNavigation {
    //border: 1px solid #19e;
}

//#test {
//    text-align: center;
//
//    i {
//        font-size: 6rem;
//    }
//
//}
//
//.icon-enter-from,
//.icon-leave-to {
//    opacity: .1;
//    transform: scale(.2) rotateZ(0);
//}
//
//.icon-enter-active {
//    //transition: all 1s cubic-bezier(0.83, 0, 0.17, 1);
//    transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
//}
//
//.icon-leave-active {
//    //transition: all 1s cubic-bezier(0.83, 0, 0.17, 1);
//    transition: all 1s cubic-bezier(0.55, 0, 1, 0.45);
//}
//
//.icon-enter-to,
//.icon-leave-from {
//    opacity: 1;
//    transform: scale(1)  rotateZ(3turn);
//}

</style>