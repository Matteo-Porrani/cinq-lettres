<template>
<header class="py-2">
    <div class="container">
<!--        <h1><i class="fas fa-sun"></i></h1>-->
        <h1 class="mb-1"><i class="fas fa-dice-d6"></i></h1>
<!--        <h1 class="mb-1"><i class="fas fa-dice"></i></h1>-->
        <h1 class="fs-5">Cinq Lettres</h1>
    </div>
</header>
</template>

<script>
export default {
    name: "TheHeader"
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';
header {
    background-color: $primary;

}

h1 {
    font-family: 'StribeMarker', sans-serif;
    font-weight: 400;
    letter-spacing: 5px;
    color: $light;
    text-align: center;
    text-transform: uppercase;
}
</style>