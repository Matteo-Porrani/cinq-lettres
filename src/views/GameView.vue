<template>
    <div class="game">
        <div class="container">

            <GameLoader v-if="loading"/>

            <div v-if="phase === 'end'" class="mt-6">
                <p class="text-center text-mid fs-4 f-inria mb-3">Le mot secret était</p>
                <p class="text-center fs-6">{{ targetWord }}</p>
            </div>


            <transition name="result">
                <TheResult v-if="!loading && phase === 'end'"
                           :result-type="gameResult"/>
            </transition>


            <template v-if="!loading && phase === 'play'">

                <GameWrapper/>

                <!--                <MainButton @click="executeReload" type="secondary">-->
                <!--                    <template #icon>-->
                <!--                        <i class="fas fa-sync-alt"></i>-->
                <!--                    </template>-->
                <!--                    <template v-slot:default>Nouvelle partie</template>-->
                <!--                </MainButton>-->

                <transition name="keyboard">
                    <TheKeyboard v-if="keyboardIsVisible"/>
                </transition>

            </template>


        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'pinia';
import {useGameStore} from "@/stores/GameStore.js";

import GameLoader from "@/components/UI/GameLoader.vue";
import GameWrapper from "@/components/game/GameWrapper.vue";
import TheKeyboard from "@/components/UI/TheKeyboard.vue";
import TheResult from "@/components/UI/TheResult.vue";


export default {
    name: "GameView",

    components: {
        GameLoader,
        GameWrapper,
        TheKeyboard,
        TheResult,
    },

    data() {
        return {
            loading: false,

            keyboardIsVisible: false,
        }
    },

    computed: {
        ...mapState(useGameStore, [
            'targetWord',
            'phase',
            'gameResult',
            'letters',
        ]),
    },

    methods: {
        ...mapActions(useGameStore, [
            'reloadGame',
            'addLetterKeyPress',
            'removeLetterKeyPress',
            'submitWord',
        ]),

        executeReload() {
            this.executeLoader();
            this.reloadGame();
        },

        executeLoader() {
            this.keyboardIsVisible = false;
            // this.loading = true;
            setTimeout(() => {
                // this.loading = false;

                // SHOW KEYBOARD
                setTimeout(() => {
                    this.keyboardIsVisible = true;
                }, 100);

            }, 600);
        },
    },

    mounted() {
        this.executeLoader();
        this.reloadGame();

        document.addEventListener('keyup', e => {

            // if (this.letters.includes(e.key.toUpperCase())) {
            if (e.key.charCodeAt(0) >= 97 && e.key.charCodeAt(0) <= 122) {

                this.addLetterKeyPress(e.key);

            } else if (e.key === 'Backspace') {
                this.removeLetterKeyPress();
            } else if (e.key === 'Enter') {
                this.submitWord();
            }

        })
    }
}
</script>

<style lang="scss" scoped>

</style>