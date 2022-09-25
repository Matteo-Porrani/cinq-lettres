import {defineStore} from 'pinia';

export const useRuleStore = defineStore('rule', {
    state() {
        return {

            locator: 1,

            rulesFR: {
                a1: "Le but du jeu est de deviner le mot secret.",
                a2: "Il s'agit d'un mot de 5 lettres, et chaque lettre est différente.",
                a3: "<span class=\"text-primary\">TRAIN</span><br><span class=\"text-primary\">PLAGE</span><br>",
                a4: "sont des mots admis,<br>car chaque lettre est différente",
                a5: "<span class=\"text-danger\">PERTE</span><br><span class=\"text-danger\">COLLE</span><br>",
                a6: "ne sont pas admis,<br>car ils contiennent des répétitions",

                b1: "Vous disposez de 10 tentatives maximum.",
                b2: "Après chaque tentative vous recevez 2 indices :",
                b3: "<span class=\"text-accent-dark\">4</span><span class=\"text-soft\"> / </span><span class=\"text-primary\">2</span>",
                b4: "le premier chiffre indique le nombre de lettres présentes dans le mot secret",
                b5: "le deuxième indique le nombre de lettres à la bonne place",

                c1: "Pour vous aider dans la recherche vous pouver marquer les lettres :",
                c2: "cliquez <b>une fois</b> pour marquer une lettre",
                c3: "",
                c4: "cliquez <b>deux fois</b> pour la rayer",
                c5: "",
                c6: "cliquez <b>trois fois</b> pour supprimer le marquage",
            },

            rulesIT: {
                a1: "Lo scopo del gioco è indovinare la parola misteriosa",
                a2: "È una parola di 5 lettere, dove ogni lettera è diversa dall'altra.",
                a3: "<span class=\"text-primary\">ASTRO</span><br><span class=\"text-primary\">TRENO</span><br>",
                a4: "sono parole possibili,<br>perché ogni lettera è diversa",
                a5: "<span class=\"text-danger\">PIEDE</span><br><span class=\"text-danger\">COLLA</span><br>",
                a6: "non sono ammesse,<br>perché contengono delle ripetizioni",

                b1: "Avete a disposizione 10 tentativi.",
                b2: "Dopo ogni tentativo si ricevono 2 indizi:",
                b3: "<span class=\"text-accent-dark\">4</span><span class=\"text-soft\"> / </span><span class=\"text-primary\">2</span>",
                b4: "il primo numero indica le lettere presenti nella parola misteriosa",
                b5: "il secondo indica le lettere ben posizionate",

                c1: "Per aiutarvi nella ricerca potete segnare le lettere:",
                c2: "cliccate <b>una volta</b> per segnare una lettera",
                c3: "",
                c4: "cliccate <b>due volte</b> per barrarla",
                c5: "",
                c6: "cliccate <b>tre volte</b> pour cancellare",
            },


        }
    },

    getters: {

    },

    actions: {

        getRules(selectedFrench) {
            if (selectedFrench) {
                return this.rulesFR;
            } else {
                return this.rulesIT;
            }
        },

        prevLocator() {
            if (this.locator > 1) {
                this.locator--;
            }
        },

        nextLocator() {
            if (this.locator < 3) {
                this.locator++;
            }
        },

        resetLocator() {
            this.locator = 1;
        },

    },

});