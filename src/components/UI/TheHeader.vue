<template>
    <header>
        <div class="container">

            <!--            <div class="wrapper"-->
            <!--                 :class="{'just-between': this.$route.fullPath === '/game', 'just-center': this.$route.fullPath !== '/game'}">-->

            <div class="wrapper just-start">


                <!-- LEFT -->
                <div class="left-guy w-0" :class="{'flex-grow': this.$route.fullPath !== '/'}">

                    <transition name="return">
                        <div class="return" v-if="this.$route.fullPath !== '/'">
                            <MainLink route="/" type="outline-light" size="small">
                                <template #icon>
                                    <i class="fas fa-arrow-left"></i>
                                </template>
                                <template v-slot:default></template>
                            </MainLink>
                        </div>
                    </transition>

                </div>

                <!-- RIGHT -->
                <div class="right-guy text-center" :class="{'flex-grow': this.$route.fullPath === '/'}">
                    <h1 class="py-1">
                        <i class="fas fs-3 fa-dice-d6"></i>
                    </h1>
                </div>


            </div>

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
    height: 50px;

    .wrapper {
        //border: 1px solid $danger;
        transition: all .8s ease-in-out;
        display: flex;
        align-items: center;
        height: 50px;
    }


    .left-guy {
        transition: all .8s ease-in-out;
        //border: 1px solid red;

        &.w-0 {
            width: 0;
        }

        &.flex-grow {
            flex-grow: 1;
        }

        div {
            width: 60% !important;
            margin: 0 !important;
        }
    }

    .right-guy {
        transition: all .8s ease-in-out;
        //border: 1px solid blue;

        &.flex-grow {
            flex-grow: 1;
        }

    }

}

h1 {
    //border: 1px solid $accent-light;
    transition: all 2s ease-in-out;
    font-family: 'StribeMarker', sans-serif;
    font-weight: 400;
    letter-spacing: 5px;
    color: $light;
    text-transform: uppercase;

}

.return-enter-from,
.return-leave-to {
    opacity: 0;
}

.return-enter-active {
    transition: all .3s .5s ease-in-out;
}

.return-leave-active {
    transition: all .3s ease-in-out;
}

.return-enter-to,
.return-leave-from {
    opacity: 1;
}

</style>