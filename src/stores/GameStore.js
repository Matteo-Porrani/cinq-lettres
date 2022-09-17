import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {

    state: () => {
        return {

            counter: 11,

            keyboardRows: [
                ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
                ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
                ['Envoi', 'W', 'X', 'C', 'V', 'B', 'N', 'Suppr'],
            ]

        }
    },

    getters: {

    },

    actions: {
        increase() {
            this.counter++;
        }
    },


});