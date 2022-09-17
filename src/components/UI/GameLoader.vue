<template>
<div id="gameLoader">
    <i class="fas fs-8 fa-spinner fa-spin"></i>
</div>
</template>

<script>
export default {
    name: "GameLoader"
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';
#gameLoader {
    //outline: 2px solid #906;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        color: $mid;
    }
}
</style>