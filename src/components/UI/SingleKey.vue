<template>
<article @click="pressKey"
         class="key text-center p-1"
         :class="{
            'key-standard': keyType === 'standard',
            'key-special': keyType === 'special',
         }">
    <span class="fs-2">{{ content }}</span>
</article>
</template>

<script>
import {mapActions} from 'pinia';
import {useGameStore} from "@/stores/GameStore.js";

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
            if (['OK', 'Suppr'].includes(this.content)) return 'special';
            return 'standard';
        }
    },

    methods: {
        pressKey() {
            console.log(this.content);

            if (!['OK', 'Suppr'].includes(this.content)) {
                this.addLetter(this.content);
            }

            if (this.content === 'Suppr') {
                this.removeLetter();
            }

            if (this.content === 'OK') {
                this.submitWord();
            }
        },

        ...mapActions(useGameStore, [
            'addLetter',
            'removeLetter',
            'submitWord',
        ]),
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

.key {
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
    border-radius: $spacer;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
        display: inline-block;
        transform: translate(2px, 2px);
    }

    &.key-standard {
        width: 28px;
        border: 1px solid $mid;
        color: $mid;

        &:hover {
            background-color: $light-hover;
        }
    }

    &.key-special {
        //width: 32px;
        border-color: $accent-dark;
        background-color: $accent-light;
        color: $accent-dark;

        &:hover {
            background-color: $mid;
            color: $accent-light;
            border-color: $accent-light;
        }

    }


}
</style>