<template>
    <div id="keyboardAlert"
         class="text-center rounded py-1"
         :class="{'alert-danger': alertType === 'danger'}">

        <p class="f-inria fs-2">
            <span v-html="alertIcon"></span>
            <span class="ms-1">{{ textForInvalidWord }}</span>
        </p>
    </div>
</template>

<script>
import {mapState} from 'pinia';
import {useGameStore} from "@/stores/GameStore.js";

export default {
    name: "TheKeyboardAlert",

    props: {
        alertType: {
            type: String,
            required: true,
        },
        alertIcon: {
            type: String,
            required: true,
        },
        alertMess: {
            type: String,
            required: true,
        },
    },

    computed: {
        ...mapState(useGameStore, [
            'textForInvalidWord',
        ]),
    },

}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

#keyboardAlert {
    //outline: 2px solid #2cc;
    //background-color: $secondary;

    @media (min-width: 768px) {
        max-width: 410px;
        margin: 0 auto;
    }

    &.alert-danger {
        background-color: $danger;
        color: $light;
    }
}

.alert-enter-from {

}

.alert-enter-active {
    animation: animAlert .3s ease-out forwards;
}

.alert-enter-to {

}

@keyframes animAlert {
    0% {
        opacity: 0;
        transform: rotateZ(-3deg) scale(.4);
    }

    60% {
        transform: rotateZ(3deg) scale(.6);
    }

    70% {
        transform: rotateZ(-5deg) scale(1.1);
    }

    85% {
        transform: rotateZ(5deg) scale(1.05);
    }

    100% {
        opacity: 1;
        transform: rotateZ(0) scale(1);
    }
}




</style>