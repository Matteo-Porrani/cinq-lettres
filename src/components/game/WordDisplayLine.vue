<template>
    <article class="word-display-line my-1">

        <div class="word-col fs-4">
            <h3 :class="{'current': current}">{{ submittedWord }}</h3>
        </div>

        <div v-if="hints" class="output-col fs-3">
            <span class="hint-pl">{{ hints[0] }}</span> / <span class="hint-wp">{{ hints[1] }}</span>
        </div>


    </article>
</template>

<script>


export default {
    name: "WordDisplayLine",

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
    }

}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

.word-display-line {
    //outline: 2px solid #8b2;
    display: flex;
    align-items: center;

    .word-col {
        //outline: 2px solid #fac;
        width: 60%;
        letter-spacing: 6px;
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
    0% { opacity: 0 }
    100% { opacity: 1 }
}
</style>