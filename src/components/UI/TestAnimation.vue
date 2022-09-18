<template>
    <!--    <transition name="icon">-->
    <div id="test">
        <i class="fas fa-certificate"></i>
        <p>Victoire !</p>
    </div>
    <!--    </transition>-->
</template>

<script>
export default {
    name: "TestAnimation"
}
</script>

<style lang="scss" scoped>
#test {
    text-align: center;

    i {
        font-size: 6rem;
    }

}

.icon-enter-from,
.icon-leave-to {
    opacity: .1;
    transform: scale(.2) rotateZ(0);
}

.icon-enter-active {
    //transition: all 1s cubic-bezier(0.83, 0, 0.17, 1);
    transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.icon-leave-active {
    //transition: all 1s cubic-bezier(0.83, 0, 0.17, 1);
    transition: all 1s cubic-bezier(0.55, 0, 1, 0.45);
}

.icon-enter-to,
.icon-leave-from {
    opacity: 1;
    transform: scale(1) rotateZ(3turn);
}

</style>