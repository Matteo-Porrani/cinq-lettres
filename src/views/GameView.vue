<template>
    <div class="game">
        <div class="container">
            <!--            <h2 class="fs-7 text-center">Game Page</h2>-->


            <GameLoader v-if="loading"/>


            <template v-if="!loading">

                <MainLink route="/" type="outline" size="small">
                    <template #icon>
                        <i class="fas fa-arrow-left"></i>
                    </template>
                    <template v-slot:default>Accueil</template>
                </MainLink>


                <GameWrapper/>

                <MainButton @click="executeReload" type="secondary">
                    <template #icon>
                        <i class="fas fa-sync-alt"></i>
                    </template>
                    <template v-slot:default>Nouvelle partie</template>
                </MainButton>


                <TheKeyboard/>

            </template>




        </div>
    </div>
</template>

<script>
import {mapActions} from 'pinia';
import {useGameStore} from "@/stores/GameStore.js";

import GameLoader from "@/components/UI/GameLoader.vue";
import GameWrapper from "@/components/game/GameWrapper.vue";
import TheKeyboard from "@/components/UI/TheKeyboard.vue";


export default {
    name: "GameView",

    components: {
        GameLoader,
        GameWrapper,
        TheKeyboard,
    },

    data() {
        return {
            loading: true,
        }
    },

    methods: {
        ...mapActions(useGameStore, [
            'reloadGame'
        ]),

        executeReload() {
            this.executeLoader();
            this.reloadGame();
        },

        executeLoader() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 600);
        },
    },

    mounted() {
        this.executeLoader();
    }
}
</script>

<style lang="scss" scoped>

</style>