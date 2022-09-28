<template>
<article @click="pressKey"
         class="key text-center py-1"
         :class="{
            'key-standard': keyType === 'standard',
            'key-primary': keyType === 'special' && content === 'OK',
            'key-special': keyType === 'special',
            'key-danger': keyType === 'special' && content === 'Suppr',
            'key-disabled': (content === 'OK' && word.length < 5) || (content === 'OK' && word.length === 5 && !wordInList),

         }">
    <span class="fs-4">{{ content }}</span>
</article>
</template>

<script>
import {mapState, mapActions} from 'pinia';
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

        ...mapState(useGameStore, [
           'word',
            'wordInList',
        ]),

        keyType() {
            if (['OK', 'Suppr'].includes(this.content)) return 'special';
            return 'standard';
        }
    },

    methods: {
        pressKey() {
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
    //border-width: 1px;
    //border-style: solid;
    border-radius: $spacer;
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
        //user-select: none; /* supported by Chrome and Opera */
        //-webkit-user-select: none; /* Safari */
        //-moz-user-select: none; /* Firefox */
        //-ms-user-select: none; /* Internet Explorer/Edge */
        display: inline-block;
        transform: translate(2px, 2px);
    }

    &.key-standard {
        background-color: $mid;
        color: $light;

        &:hover {
            background-color: $dark;
        }
    }

    &.key-special {
        background-color: $accent-light;
        color: $accent-dark;

        &:hover {
            background-color: $accent-light-hover;
        }
    }

    &.key-primary {
        background-color: $primary;
        color: $light;

        &:hover {
            background-color: $primary-hover;
        }
    }

    &.key-danger {
        background-color: $danger;
        color: $light;

        &:hover {
            background-color: $primary-hover;
        }
    }

    &.key-disabled {
        background-color: $light;
        color: $light-hover;

        &:hover {
            cursor: default;
            background-color: $light;
        }
    }

}
</style>