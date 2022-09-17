<template>
    <div class="about">
        <div class="container">

            <MainLink route="/" type="outline" size="small">
                <template #icon>
                    <i class="fas fa-arrow-left"></i>
                </template>
                <template v-slot:default>
                    Accueil
                </template>
            </MainLink>

            <h2 class="fs-5 text-center">À propos</h2>
        </div>
    </div>
</template>
