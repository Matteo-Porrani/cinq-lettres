<template>
    <div id="baseToggle"
         @click="toggleSwitch"
         :class="{'just-start': selectedLeft, 'just-end': !selectedLeft}"
    >
        <div class="switch"></div>
    </div>
</template>

<script>
export default {
    name: "BaseToggle",

    data() {
        return {
            selectedLeft: true,
        }
    },

    methods: {

        toggleSwitch() {
            console.log('clicked');
            this.selectedLeft = !this.selectedLeft;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

#baseToggle {
    transition: all .2s ease-in-out;
    background-color: $light-hover;
    border-radius: 20px;

    padding-block: 4px;

    display: flex;
    align-items: center;

    height: 40px;
    width: 86px;

    &.just-start {
        //justify-content: start;
        padding-left: 4px;
    }

    &.just-end {
        //justify-content: end;
        padding-left: 50px;
    }

    .switch {
        transition: all .2s ease-in-out;
        //border: 1px solid #d04;
        background-color: $soft;
        border-radius: 16px;
        width: 32px;
        height: 32px;
    }
}

</style>