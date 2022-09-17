<template>
    <div class="game">
        <div class="container">

            <MainLink route="/" type="outline">
                <template #icon>
                    <i class="fas fa-arrow-left"></i>
                </template>
                <template v-slot:default>Retour à l'accueil</template>
            </MainLink>

            <h2 class="fs-7 text-center">Game Page</h2>

            <TheKeyboard></TheKeyboard>

        </div>
    </div>
</template>

<script>
import TheKeyboard from "@/components/UI/TheKeyboard.vue";
export default {
    name: "GameView",

    components: {
        TheKeyboard,
    }
}
</script>

<style lang="scss" scoped>

</style>