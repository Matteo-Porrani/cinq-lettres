<template>
    <TheHeader/>
    <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
            <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
</template>

<script>
import TheHeader from "@/components/UI/TheHeader";

export default {
    components: {TheHeader}
}
</script>

<style lang="scss" scoped>

.route-enter-from,
.route-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.route-enter-to,
.route-leave-from {
    opacity: 1;
    transform: translateY(0px);
}

.route-enter-active,
.route-leave-active {
    transition: all .3s ease-out;
}

</style>
