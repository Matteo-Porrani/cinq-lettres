<template>

    <div id="result">
        <i class="fas fa-certificate"
           :class="{
            'text-primary': resultType === 'win',
            'text-danger': resultType === 'loose',
        }"
        ></i>
        <p class="text-center fs-8 p-3">
            <span v-html="resultMessage"></span>
        </p>
    </div>

</template>

<script>
export default {
    name: "TheResult",

    props: {

        resultType: {
            type: String,
            required: true,
        },

    },

    computed: {

        resultMessage() {
            if (this.resultType === 'win') return 'Gagné !';
            return 'Perdu !';
        }

    },
}
</script>

<style lang="scss" scoped>
#result {
    margin-top: 12vh;
    //background-color: yellow;
    height: 35vh;
    width: 100%;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;


    i {
        font-size: 16rem;
        //background-color: pink;
    }


    p {
        //background-color: green;
        position: absolute;
        left: 0;
        top: 35%;
        width: 100%;
        line-height: 1.5;

    }

}

.result-enter-from {
    opacity: .1;
    transform: scale(.2) rotateZ(0);
}

.result-enter-active {
    //transition: all 1s cubic-bezier(0.83, 0, 0.17, 1);
    transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

//.result-leave-active {
//    //transition: all 1s cubic-bezier(0.83, 0, 0.17, 1);
//    transition: all 1s cubic-bezier(0.55, 0, 1, 0.45);
//}

.result-enter-to {
    opacity: 1;
    transform: scale(1) rotateZ(2turn);
}

</style>