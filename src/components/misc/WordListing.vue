<template>
    <div id="wordListing" class="my-5">
        <!--        <div class="list-col text-center">-->
        <!--            <p class="f-inria" v-for="(word, idx) in getColAContent" :key="idx">{{ word }}</p>-->
        <!--        </div>-->
        <!--        <div class="list-col text-center">-->
        <!--            <p class="f-inria" v-for="(word, idx) in getColBContent" :key="idx">{{ word }}</p>-->
        <!--        </div>-->


        <span class="av-word f-inria text-center text-mid rounded px-2"
              v-for="(w, idx) in sortedWords"
              :key="idx">{{ w }}</span>
    </div>
</template>

<script>
import {mapState} from 'pinia';
import {useGameStore} from "@/stores/GameStore.js";

export default {
    name: "WordListing",

    data() {
        return {
            halfList: 0,
        }
    },

    computed: {
        ...mapState(useGameStore, [
            'words',
            'sortedWords',
        ]),

        getColAContent() {
            return this.words.slice(0, this.halfList);
        },

        getColBContent() {
            return this.words.slice(this.halfList);
        },

    },

    mounted() {
        console.log(this.words);

        this.halfList = Math.ceil(this.words.length / 2);

    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

#wordListing {
    //border: 2px solid #1be;

    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    justify-content: space-between;
    align-items: start;

    span {
        border: 1px solid $mid;
        width: 30%;

        &:nth-child(3n + 2) {
            margin-top: 10px;
            //background-color: yellow;
        }

        &:nth-child(3n) {
            margin-top: 20px;
            //background-color: cyan;
        }
    }

    //.list-col {
    //    width: 50%;
    //    border: 2px solid #8b2;
    //}
}
</style>