<template>
    <h2 class="fs-5 text-center text-primary mb-5">Instructions</h2>

    <div class="rules text-mid text-center">
        <p class="f-inria mb-2">Le but du jeu est de deviner le mot secret.</p>
        <p class="f-inria">Il s'agit d'un mot de 5 lettres, <br>chaque lettre étant unique.</p>

        <div class="mt-5"></div>

        <p class="text-primary fs-4 my-1">LIVRE</p>
        <p class="text-primary fs-4 my-1">GRAND</p>

        <p class="f-inria">sont des mots admis</p>


        <div class="mt-5"></div>

        <p class="text-danger fs-4 my-1">ARBRE</p>
        <p class="text-danger fs-4 my-1">MAPPE</p>

        <p class="f-inria">ne sont pas admis,<br>car ils contiennent des répétitions</p>

        <div class="mt-5"></div>

        <p class="f-inria">Il faut procéder par tentatives.</p>
        <p class="f-inria">Après chaque tentative on reçoit des indices :</p>

        <div class="mt-5"></div>

        <p class="text-accent-dark fs-4 my-1">4</p>

        <p class="f-inria">Le premier chiffre indique combien<br>de lettres sont dans le mot secret</p>

        <div class="mt-5"></div>

        <p class="text-primary fs-4 my-1">2</p>

        <p class="f-inria">Le deuxième chiffre indique combien<br>de lettres sont à la bonne position</p>

        <div class="mt-5"></div>

        <p class="f-inria">Vous disposez de <u class="fw-bold">10 tentatives maximum</u></p>

        <div class="mt-5"></div>

        <p class="f-inria">Prêts ? À vos dictionnaires !</p>

        <div class="mt-8"></div>

    </div>
</template>

<script>
export default {
    name: "RulesFirstDraft"
}
</script>

<style scoped>

</style>