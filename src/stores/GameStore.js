import {defineStore} from 'pinia';

import availableWords from './availableWords.js';
import hintCalculator from "@/stores/hintCalculator.js";

export const useGameStore = defineStore('game', {

    state: () => {
        return {

            submissions: [],
            hints: [],

            word: '',

            words: availableWords,

            targetWord: '',

            keyboardRows: [
                ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
                ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
                ['OK', 'W', 'X', 'C', 'V', 'B', 'N', 'Suppr'],
            ],

        }
    },

    getters: {},

    actions: {

        addLetter(letter) {
            if (this.word.length < 5) {
                this.word += letter;
            }
        },

        addLetterKeyPress(key) {
            if (this.word.length < 5) {
                this.word += key.toUpperCase();
            }
        },

        removeLetter() {
            if (this.word.length > 0) {
                const currentWordArray = this.word.split('');
                currentWordArray.pop();
                this.word = currentWordArray.join('');
            }
        },

        removeLetterKeyPress() {
            if (this.word.length > 0) {
                const currentWordArray = this.word.split('');
                currentWordArray.pop();
                this.word = currentWordArray.join('');
            }
        },

        submitWord() {

            if (this.word.length > 4) {
                // current word is submitted
                this.submissions.push(this.word);
                // current word is resetted
                this.word = '';
                // hints are calculated
                this.updateHints();
            }
        },

        updateHints() {
            const hints = hintCalculator(this.targetWord, this.submissions[this.submissions.length - 1]);
            this.hints.push(hints);
        },

        getRandomWord() {
            const min = 0;
            const max = this.words.length - 1;
            this.targetWord = this.words[Math.floor(Math.random() * (max - min + 1)) + min];
        },

        reloadGame() {
            this.word = '';
            this.submissions = [];
            this.hints = [];
            this.getRandomWord();
        },
    },

});
