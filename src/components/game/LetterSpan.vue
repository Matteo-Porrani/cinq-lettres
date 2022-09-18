<template>
    <span>{{ letter }}</span>
</template>

<script>
export default {
    name: "LetterSpan",

    props: {
        letter: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
span {
    //outline: 1px solid #d04;

    display: inline-block;
    text-align: center;
    width: 24px;
}


.letter-span-enter-from {
    opacity: 0;
    transform: scaleY(.2);
}

.letter-span-enter-active {
    transition: all .3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.letter-span-enter-to {
    opacity: 1;
    transform: scaleY(1);
}

</style>