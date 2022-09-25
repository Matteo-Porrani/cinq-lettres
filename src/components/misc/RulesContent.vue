<template>
    <div id="rulesContent" class="pt-1">
        <div class="container text-mid">
            <!--            <span class="f-inria text-danger">selectedFrench: {{ selectedFrench }}</span>-->

            <article id="rule1" v-if="locator === 1 && rulesLoaded">

                <p class="f-inria">
                    <span v-html="rules.a1"></span>
                </p>

                <p class="f-inria mt-1">
                    <span v-html="rules.a2"></span>
                </p>


                <p class="text-center fs-5 mt-3">
                    <span v-html="rules.a3"></span>
                </p>

                <p class="text-center">
<!--                    <i class="far fs-6 text-success fa-check-square"></i>-->
                    <i class="far fa-smile fs-6 text-primary"></i>
                </p>

                <p class="f-inria text-center">
                    <span v-html="rules.a4"></span>
                </p>

                <p class="text-center fs-5 mt-3">
                    <span v-html="rules.a5"></span>
                </p>

                <p class="text-center">
                    <i class="far fa-frown fs-6 text-danger"></i>
                </p>

                <p class="f-inria text-center">
                    <span v-html="rules.a6"></span>
                </p>


            </article>


            <!-- RULE 2-->
            <article id="rule2" v-if="locator === 2 && rulesLoaded">

                <p class="f-inria">
                    <span v-html="rules.b1"></span>
                </p>

                <p class="f-inria mt-2">
                    <span v-html="rules.b2"></span>
                </p>

                <p class="text-center fs-5 mt-4">
                    <span v-html="rules.b3"></span>
                </p>

                <p class="f-inria mt-2">
                    <span v-html="rules.b4"></span>
                </p>

                <p class="f-inria mt-2">
                    <span v-html="rules.b5"></span>
                </p>

            </article>

            <!-- RULE 3-->
            <article id="rule3" v-if="locator === 3 && rulesLoaded">

                <p class="f-inria">
                    <span v-html="rules.c1"></span>
                </p>

                <p class="f-inria mt-2">
                    <span v-html="rules.c2"></span>
                </p>

                <p class="fs-5 text-center text-soft mt-2">TRA<span class="ex1 text-primary">I</span>N</p>

                <p class="f-inria mt-2">
                    <span v-html="rules.c4"></span>
                </p>

                <p class="fs-5 text-center text-soft mt-2">M<span class="ex2 striken">E</span>TRO</p>


                <p class="f-inria mt-2">
                    <span v-html="rules.c6"></span>
                </p>

            </article>


        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from "pinia";

import {useRuleStore} from "@/stores/RuleStore.js";
import {useGameStore} from "@/stores/GameStore";

export default {
    name: "RulesContent",

    data() {
        return {
            rules: null,
            rulesLoaded: false,
        }
    },

    computed: {
        ...mapState(useGameStore, [
            'selectedFrench'
        ]),

        ...mapState(useRuleStore, [
            'locator'
        ]),
    },

    methods: {
        ...mapActions(useRuleStore, [
            'getRules',
        ]),

        getContent() {
            const isFR = this.selectedFrench;
            console.log(isFR)
            return this.getRules(isFR);
        },

    },

    mounted() {
        const isFR = this.selectedFrench;
        console.log(isFR)
        console.log(this.getRules(isFR));
        this.rules = this.getRules(isFR);
        this.rulesLoaded = true;
    }

}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

#rulesContent {
    //border: 4px solid #8b2;

    height: 60vh;

}

article p span b {
    color: $primary;
}

.ex1 {
    //background-color: yellow;
    position: relative;

    &:after {
        position: absolute;
        top: -6px;
        left: -10px;
        content: '';
        width: 34px;
        height: 34px;
        border-radius: 50%;

        border: 2px solid $mid;

        animation: animClick1 2.2s infinite;

    }

}

.ex2 {
    //background-color: yellow;
    position: relative;

    &:before {
        position: absolute;
        top: -6px;
        left: -10px;
        content: '';
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 2px solid $mid;
        opacity: 0;

        animation: animClick2 2.8s 2s infinite;

    }

}

.striken {
    color: $soft;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        border-radius: 2px;
        left: 32%;
        top: -4px;
        display: block;
        width: 4px;
        height: 115%;
        transform: rotate(.1turn);
        background-color: $danger;
    }
}

@keyframes animClick1 {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    40% {
        transform: scale(1);
        opacity: 1;
    }

}

@keyframes animClick2 {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    20% {
        transform: scale(1);
        opacity: 1;
    }

    21% {
        transform: scale(0);
        opacity: 0;
    }

    42% {
        transform: scale(1);
        opacity: 1;
    }
}


</style>