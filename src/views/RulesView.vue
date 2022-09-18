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

            <h2 class="fs-5 text-center mb-3">Instructions</h2>
            <h3 class="fs-8 text-center text-primary my-8">
                <i class="fas fa-tools"></i>
            </h3>
            <p class="f-inria text-mid fs-4 text-center">Page en construction</p>

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