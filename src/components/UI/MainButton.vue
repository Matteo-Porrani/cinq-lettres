<!-- THIS IS A GLOBAL COMPONENT -->

<template>
    <div class="py-1 my-2 rounded"
         :class="{
            'link-primary': type === 'primary',
            'link-secondary': type === 'secondary',
            'link-outline': type === 'outline',
         }">
        <p class="px-4"
                :class="{
                    'fs-1': size === 'small',
                    'fs-3': size === 'normal',
                    'fs-5': size === 'big',
                 }"
        >
            <slot name="icon">
                <i class="fas fa-star"></i>
            </slot>
            <span class="ms-2">
                <slot>Button Name</slot>
            </span>
        </p>
    </div>
</template>

<script>
export default {
    name: "MainLink",

    props: {

        type: {
            type: String,
            required: false,
            validator: value => {
                return [
                    'primary',
                    'secondary',
                    'dark',
                    'outline',
                ].includes(value);
            },
        },

        size: {
            type: String,
            required: false,
            validator: value => {
                return [
                    'small',
                    'normal',
                    'big',
                ].includes(value);
            },
        },

    },

    computed: {
        itemStyle() {
            return '';
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.scss";

div {
    cursor: pointer;
    border-width: 2px;
    border-style: solid;

    button {
        border: 0;
        background-color: transparent;
        font-family: inherit;
        display: block;
        width: 100%;
        height: 100%;
    }

    & .link-primary {
        background-color: $primary;
        border-color: $primary;

        & p {
            color: $light !important;
        }

        &:hover {
            background-color: $primary-hover;
            border-color: $primary-hover;
        }
    }

    & .link-secondary {
        background-color: $accent-light;
        border-color: $accent-light;

        & p {
            color: $accent-dark !important;
        }

        &:hover {
            background-color: $accent-light-hover;
            border-color: $accent-light-hover;
        }
    }

    & .link-outline {
        background-color: transparent;
        border-color: $mid;

        & p {
            color: $mid !important;
        }

        &:hover {
            background-color: $light-hover;
        }
    }

}

</style>