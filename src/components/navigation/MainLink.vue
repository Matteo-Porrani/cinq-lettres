<!-- THIS IS A GLOBAL COMPONENT -->

<template>
    <div class="py-1 my-2 rounded"
         :class="{
            'link-primary': type === 'primary',
            'link-secondary': type === 'secondary',
            'link-outline': type === 'outline',
         }">
        <router-link :to="route"
                     class="px-6"
                     :class="{
                        'fs-2': size === 'small',
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
        </router-link>
    </div>
</template>

<script>
export default {
    name: "MainLink",

    props: {

        route: {
            type: String,
            required: true,
            validator: value => {
                return value[0] === '/';
            }
        },

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

    a {
        text-decoration: none;
        display: block;
        width: 100%;
    }

    & .link-primary {
        background-color: $primary;
        border-color: $primary;
        & a {
            color: $light !important;
        }
    }

    & .link-secondary {
        background-color: $secondary;
        border-color: $secondary;
        & a {
            color: $dark !important;
        }
    }

    & .link-outline {
        background-color: transparent;
        border-color: $mid;
        & a {
            color: $mid !important;
        }
    }

}

</style>