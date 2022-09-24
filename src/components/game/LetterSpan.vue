<template>
    <span @click="toggleSpanState"
          :class="{
            'current': current,
            'default': spanIsDefault,
            'colored': spanIsColored,
            'striken': spanIsStriken,
          }">{{ letter }}</span>
</template>

<script>
import {mapState, mapActions} from "pinia";
import {useGameStore} from "@/stores/GameStore";

export default {
    name: "LetterSpan",

    props: {
        letter: {
            type: String,
            required: true,
        },
        current: {
            type: Boolean,
            required: true,
        },
    },

    // data() {
    //     return {
    //         spanIsDefault: true,
    //         spanIsColored: false,
    //         spanIsStriken: false,
    //     }
    // },

    computed: {
        ...mapState(useGameStore, [
            'defaultLetters',
            'coloredLetters',
            'strikenLetters',
        ]),

        spanIsDefault() {
            return this.defaultLetters.includes(this.letter);
        },

        spanIsColored() {
            return this.coloredLetters.includes(this.letter);
        },

        spanIsStriken() {
            return this.strikenLetters.includes(this.letter);
        },

    },

    methods: {


        ...mapActions(useGameStore, [
           'toggleLetterState',
        ]),

        toggleSpanState() {
            console.log(this.letter);
            this.toggleLetterState(this.letter);

            // if (this.spanIsDefault) {
            //     // 1st click
            //     this.spanIsDefault = false;
            //     this.spanIsColored = true;
            //     this.spanIsStriken = false;
            //
            // } else if (this.spanIsColored) {
            //     // 2nd click
            //     this.spanIsDefault = false;
            //     this.spanIsColored = false;
            //     this.spanIsStriken = true;
            //
            // } else if (this.spanIsStriken) {
            //     // 3rd click
            //     this.spanIsDefault = true;
            //     this.spanIsColored = false;
            //     this.spanIsStriken = false;
            // }
        },

    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

span {
    //outline: 1px solid #d04;

    display: inline-block;
    text-align: center;
    width: 24px;

    &.current.default {
        color: $dark;
    }

    &.default {
        color: $soft;
    }

    &.colored {
        color: $primary;
    }

    &.striken {
        color: $soft;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            border-radius: 2px;
            left: 35%;
            top: -2px;
            display: block;
            width: 3px;
            height: 105%;
            transform: rotate(.1turn);
            background-color: $danger;
        }
    }
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