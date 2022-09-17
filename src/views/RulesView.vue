<template>
    <div class="rules">
        <div class="container">

            <MainLink route="/" type="outline" size="small">
                <template #icon>
                    <i class="fas fa-arrow-left"></i>
                </template>
                <template v-slot:default>
                    Accueil
                </template>
            </MainLink>

            <h2 class="fs-5 text-center">Instructions</h2>
        </div>
    </div>
</template>

<script>
import MainLink from "@/components/navigation/MainLink";

export default {
    name: "RulesView",
    components: {MainLink}
}
</script>

<style scoped>

</style>