<template>
<article class="key text-center p-1"
         :class="{
            'key-standard': keyType === 'standard',
            'key-special': keyType === 'special',
         }">
    <span class="fs-2 fw-bold">{{ content }}</span>
</article>
</template>

<script>
export default {
    name: "SingleKey",

    props: {
        content: {
            type: String,
            required: true,
        },
    },

    computed: {
        keyType() {
            if (['Envoi', 'Suppr'].includes(this.content)) return 'special';
            return 'standard';
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

.key {
    cursor: pointer;
    border-radius: $spacer;

    &.key-standard {
        width: 32px;
        border: 1px solid $mid;
        color: $mid;

        &:hover {
            background-color: $light-hover;
        }
    }

    &.key-special {
        //width: 32px;
        border: 1px solid #c80;
        background-color: #fc4;
        color: #c80;

        &:hover {
            background-color: $light-hover;
        }

    }


}
</style>