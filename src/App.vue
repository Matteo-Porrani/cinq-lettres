<template>
    <TheHeader/>
    <router-view/>
</template>

<style lang="scss">

nav {
    border: 2Px solid #e72;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #906;
        }
    }
}
</style>
<script>
import TheHeader from "@/components/UI/TheHeader";

export default {
    components: {TheHeader}
}
</script>