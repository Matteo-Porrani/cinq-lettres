<template>
    <article class="word-display-line my-1" :class="{'current': current}">

        <div class="word-col fs-3">

            <h3 :class="{'current': current}">
                <transition-group name="letter-span">
                    <LetterSpan v-for="(letter, idx) in splittedWord" :key="idx" :letter="letter"/>
                </transition-group>
            </h3>
        </div>

        <div v-if="hints" class="output-col fs-3">
            <span class="hint-pl">{{ hints[0] }}</span> / <span class="hint-wp">{{ hints[1] }}</span>
        </div>


    </article>
</template>

<script>
import LetterSpan from "@/components/game/LetterSpan";

export default {
    name: "WordDisplayLine",

    components: {
        LetterSpan,
    },

    props: {
        submittedWord: {
            type: String,
            required: true,
        },
        hints: {
            type: Array,
            required: false,
        },
        current: {
            type: Boolean,
            required: true,
        },
    },

    computed: {
        splittedWord() {
            return this.submittedWord.split('');
        },
    }

}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

.word-display-line {
    //outline: 2px solid #8b2;
    display: flex;
    align-items: center;

    &:not(.current) {
        border-bottom: 3px dotted $mid;
    }

    .word-col {
        //outline: 2px solid $accent-light;
        width: 60%;
        text-align: left;
    }

    .output-col {
        //outline: 3px solid #2cc;
        width: 40%;
        color: $mid;

        .hint-pl {
            color: $accent-dark;
        }

        .hint-wp {
            color: $primary;
        }
    }

    h3 {
        position: relative;
        width: fit-content;
        color: $mid;

        &.current {
            color: $dark;
        }
    }

    h3.current::after {
        content: '';
        position: absolute;
        left: 100%;
        top: 0;
        display: inline-block;
        width: 4px;
        height: 30px;
        background-color: $primary;
        animation: cursorAnim 1.3s ease-in-out infinite;
    }

}

@keyframes cursorAnim {
    0% {
        opacity: 0
    }
    100% {
        opacity: 1
    }
}

.newline-enter-from {
    transform: scaleY(.9);
}

.newline-enter-active {
    //transition: all .3s cubic-bezier(0.34, 1.56, 0.64, 1);
    animation: animNewline .32s ease-out forwards;
}

.newline-enter-to {
    transform: scaleY(1);
}

@keyframes animNewline {
    0% {
        transform: scaleY(1);
        color: $mid;
    }

    60% {
        transform: scaleY(1.5);
        color: $accent-dark !important;
    }

    100% {
        transform: scaleY(1);
        color: $mid;
    }
}

</style>