<template>
<div id="flagIcon" :class="{'selected': selected, 'flag-small': small}">
    <div class="flag-stripe" :style="'background-color: ' + colors[0]"></div>
    <div class="flag-stripe" :style="'background-color: ' + colors[1]"></div>
    <div class="flag-stripe" :style="'background-color: ' + colors[2]"></div>
</div>
</template>

<script>
export default {
    name: "FlagIcon",

    props: {
        colors: {
            type: Array,
            required: true,
        },
        selected: {
            type: Boolean,
            required: true,
        },
        small: {
            type: Boolean,
            required: false,
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';
#flagIcon {
    position: relative;
    transition: all .3s ease-in-out;
    border: 2px solid $mid;

    height: 40px;
    width: 40px;
    display: flex;

    border-radius: 50%;
    overflow: hidden;


    &.selected {
        height: 60px;
        width: 60px;

        &.flag-small {
            height: 24px;
            width: 24px;
        }
    }

    .flag-stripe {
        height: 100%;
        flex-grow: 1;
    }

    .flag-stripe:nth-child(1) {
        background-color: #555;
    }
    .flag-stripe:nth-child(2) {
        background-color: #999;
    }
    .flag-stripe:nth-child(3) {
        background-color: #DDD;
    }

    &:not(.selected) {
        border: 2px solid $soft;

        &::after {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            content: '';
            background-color: rgba(255, 255, 255, 0.6);
        }
    }

    //&:not(.selected)::after {
    //
    //    position: absolute;
    //    width: 100%;
    //    height: 100%;
    //    top: 0;
    //    left: 0;
    //    content: '';
    //    background-color: rgba(255, 255, 255, 0.6);
    //
    //}
}
</style>