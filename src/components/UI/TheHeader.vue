<template>
<header class="py-1">
    <div class="container">
<!--        <h1><i class="fas fa-sun"></i></h1>-->
        <h1 class="mb-1"><i class="fas fs-3 fa-dice-d6"></i></h1>
<!--        <h1 class="mb-1"><i class="fas fa-dice"></i></h1>-->
<!--        <h1 v-show="this.$route.fullPath === '/'" class="fs-5">PENTA</h1>-->
        <h1 class="fs-3">PENTA</h1>
    </div>
</header>
</template>

<script>
export default {
    name: "TheHeader",

    mounted() {
        console.log(this.$route.fullPath);
    }
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