import {defineStore} from 'pinia';

import availableWords from './availableWords.js';
import hintCalculator from "@/stores/hintCalculator.js";

export const useGameStore = defineStore('game', {

    state: () => {
        return {

            phase: 'play',
            gameResult: 'loose',

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

            defaultLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],

            coloredLetters: [],

            strikenLetters: [],

        }
    },

    getters: {

        wordInList() {
            if (this.word.length < 5) return true;
            return this.word.length === 5 && this.words.includes(this.word);
        }

    },

    actions: {

        setPhase() {
            if (this.submissions.length === 10) {
                this.phase = 'end';
            }
        },

        addLetter(letter) {
            if (this.word.length < 5) {
                this.word += letter;
            }
        },

        addLetterKeyPress(key) {
            console.log('addLetterKeyPress executed');
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

            if (this.word.length > 4 && this.wordInList) {
                // current word is submitted
                this.submissions.push(this.word);
                // current word is resetted
                this.word = '';
                // hints are calculated
                this.updateHints();
                this.checkWord();
                this.setPhase();
            }
        },

        checkWord() {
            console.log(this.submissions[this.submissions.length - 1]);
            if (this.submissions[this.submissions.length - 1] === this.targetWord) {
                this.phase = 'end';
                this.gameResult = 'win';
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
            this.phase = 'play';
            this.result = 'loose';
            this.word = '';
            this.submissions = [];
            this.hints = [];
            this.getRandomWord();
        },


        toggleLetterState(letter) {

            if (this.defaultLetters.includes(letter)) {
                console.log(letter);
                console.log(this.defaultLetters.includes(letter));
                // 1st click
                this.defaultLetters.splice(this.defaultLetters.findIndex(item => item === letter), 1);
                this.coloredLetters.push(letter);
            } else if (this.coloredLetters.includes(letter)) {
                // 2nd click
                this.coloredLetters.splice(this.defaultLetters.findIndex(item => item === letter), 1);
                this.strikenLetters.push(letter);
            } else if (this.strikenLetters.includes(letter)) {
                // 3rd click
                this.strikenLetters.splice(this.defaultLetters.findIndex(item => item === letter), 1);
                this.defaultLetters.push(letter);
            }

        },
    },

});
