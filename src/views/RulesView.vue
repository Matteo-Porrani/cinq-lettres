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

            <p class="f-inria text-mid fs-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa ducimus enim error et eum
                eveniet, ipsa laboriosam, laborum laudantium magnam nemo nostrum, officia placeat quaerat quisquam
                repellendus totam veritatis.</p>
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