import {defineStore} from 'pinia';

import availableWordsFR from './availableWordsFR.js';
import availableWordsIT from './availableWordsIT.js';
import hintCalculator from "@/stores/hintCalculator.js";

export const useGameStore = defineStore('game', {

    state: () => {
        return {

            selectedFrench: true,

            phase: 'play',
            gameResult: 'loose',

            submissions: [],
            hints: [],

            word: '',

            // words: this.selectedFrench ? availableWordsFR : availableWordsIT,
            // sortedWords: availableWordsFR.sort(),

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

        words() {
            return this.selectedFrench ? availableWordsFR : availableWordsIT;
        },

        sortedWords() {
            return this.selectedFrench ? availableWordsFR.sort() : availableWordsIT.sort();
        },

        wordInList() {
            if (this.word.length < 5) return true;
            return this.word.length === 5 && this.words.includes(this.word);
        },

        homeClaim() {
            return this.selectedFrench ? "Entre vous et la victoire,<br>seulement 5 petites lettres !" : "Solo 5 lettere <br> vi separano dalla vittoria!";
        },

        textForPlay() {
            return this.selectedFrench ? "Jouer" : "Gioca";
        },

        textForRules() {
            return this.selectedFrench ? "Instructions" : "Istruzioni";
        },

        textForList() {
            return this.selectedFrench ? "Liste des mots" : "Lista parole";
        },

        textForAbout() {
            return this.selectedFrench ? "À propos" : "Altre info";
        },

        textForInvalidWord() {
            return this.selectedFrench ? "Ce mot n'est pas valide" : "Parola non valida";
        },

        textForWordListing1() {
            return this.selectedFrench ? "Voici les" : "Ecco le";
        },

        textForWordListing2() {
            return this.selectedFrench ? "mots<br>disponibles dans le jeu" : "parole<br>disponibili nel gioco";
        },


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
            this.defaultLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            this.coloredLetters = [];
            this.strikenLetters = [];
            this.getRandomWord();
        },


        toggleLetterState(letter) {
            if (this.defaultLetters.includes(letter)) {
                // 1st click
                this.defaultLetters.splice(this.defaultLetters.findIndex(item => item === letter), 1);
                this.coloredLetters.push(letter);

            } else if (this.coloredLetters.includes(letter)) {
                // 2nd click
                this.coloredLetters.splice(this.coloredLetters.findIndex(item => item === letter), 1);
                this.strikenLetters.push(letter);

            } else if (this.strikenLetters.includes(letter)) {
                // 3rd click
                this.strikenLetters.splice(this.strikenLetters.findIndex(item => item === letter), 1);
                this.defaultLetters.push(letter);
            }

        },

        toggleLanguage() {
            this.selectedFrench = !this.selectedFrench;
        },

    },

});
