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

            <h2 class="fs-5 text-center text-primary mb-5">Liste des mots</h2>

<!--            <p class="f-inria text-mid fs-3 text-center">Voici la liste des mots<br>disponibles à ce jour :</p>-->
            <p class="f-inria text-mid fs-3 text-center">
                En panne d'inspiration ?
            </p>

            <p class="f-inria text-mid fs-3 text-center">
                Voici les mots disponibles à ce jour :
            </p>

            <WordListing/>

        </div>
    </div>
</template>

<script>
import WordListing from "@/components/misc/WordListing";

export default {
    name: "ListView",
    components: {
        WordListing
    }
}
</script>

<style scoped>

</style>