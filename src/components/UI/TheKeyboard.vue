<template>

    <section id="theKeyboard" class="">

        <div class="alert-zone p-1">
            <transition name="alert">
                <TheKeyboardAlert v-show="alertIsVisible"
                                  :alert-type="alertType"
                                  :alert-icon="alertIcon"
                                  :alert-mess="alertMess"
                />
            </transition>
        </div>


        <div class="keyboard-zone p-1 pb-1">
            <div v-for="(row, index) in keyboardRows"
                 :key="index"
                 class="keyboard-row mb-1"
            >
                <SingleKey v-for="(key, keyIndex) in row" :key="keyIndex" :content="key"></SingleKey>
            </div>
        </div>

    </section>
</template>

<script>
import {mapState} from 'pinia';
import {useGameStore} from "@/stores/GameStore.js";
import SingleKey from "@/components/UI/SingleKey.vue";
import TheKeyboardAlert from "@/components/UI/TheKeyboardAlert.vue";

export default {
    name: "TheKeyboard",

    components: {
        SingleKey,
        TheKeyboardAlert,
    },

    data() {
        return {
            alertIsVisible: false,

            alertType: '',
            alertIcon: '',
            alertMess: '',
        }
    },

    computed: {
        ...mapState(useGameStore, [
            'keyboardRows',
            'wordInList'
        ]),

    },

    watch: {
        wordInList(isInList) {

            if (!isInList) {
                this.alertType = 'danger';
                this.alertIcon = '<i class="fas fa-exclamation-triangle"></i>';
                this.alertMess = "Ce mot n'est pas valide";
                this.alertIsVisible = true;
            } else {
                this.resetAlert();
            }

        }
    },

    methods: {
        resetAlert() {
            this.alertType = '';
            this.alertIcon = '';
            this.alertMess = '';
            this.alertIsVisible = false;

        },
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

#theKeyboard {
    //outline: 2px solid #fa1;
    //background-color: lightblue;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;


    & .alert-zone {
        //background-color: pink;
    }

    & .keyboard-zone {
        background-color: $light-hover;

        // 'similar' rules as .container
        max-width: 100%;
        margin: 0 auto;

        @media (min-width: 768px) {
            max-width: 380px;
        }
    }

    .keyboard-row {
        //outline: 2px solid #906;
        display: flex;
        gap: 4px;
        justify-content: center;
    }
}

// ENTER
.keyboard-enter-from {
    transform: translateY(100%);
}

.keyboard-enter-active {
    transition: all .3s ease-out;
}

.keyboard-enter-to {
    transform: translateY(0);
}

// LEAVE
.keyboard-leave-from {
    opacity: 1;
}

.keyboard-leave-to {
    opacity: 0;
}

.keyboard-leave-active {
    transition: all .1s linear;
}

</style>