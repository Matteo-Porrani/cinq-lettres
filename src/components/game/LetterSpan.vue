<template>
    <span @click="toggleSpanState"
          :class="{
            'colored': spanIsColored,
            'striked': spanIsStriked,
          }">{{ letter }}</span>
</template>

<script>
export default {
    name: "LetterSpan",

    props: {
        letter: {
            type: String,
            required: true,
        }
    },

    data() {
        return {
            spanIsDefault: true,
            spanIsColored: false,
            spanIsStriked: false,
        }
    },

    methods: {
        toggleSpanState() {
            if (this.spanIsDefault) {
                this.spanIsDefault = false;
                this.spanIsColored = true;
                this.spanIsStriked = false;
            } else if (this.spanIsColored) {
                this.spanIsDefault = false;
                this.spanIsColored = false;
                this.spanIsStriked = true;
            } else if (this.spanIsStriked) {
                this.spanIsDefault = true;
                this.spanIsColored = false;
                this.spanIsStriked = false;
            }




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

    &.colored {
        color: $accent-dark;
    }

    &.striked {
        color: $light-hover;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            border-radius: 2px;
            left: 35%;
            top: 0;
            display: block;
            width: 4px;
            height: 100%;
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