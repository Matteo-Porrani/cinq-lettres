<template>
    <div class="home">
        <div class="container">

            <MainNavigation/>



        </div>



    </div>
</template>

<script>
// @ is an alias to /src
import MainNavigation from "@/components/navigation/MainNavigation.vue";


export default {
    name: 'HomeView',
    components: {
        MainNavigation,

    }
}
</script>
