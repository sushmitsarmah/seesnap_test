<template>
    <div class="home">
        <Welcome :name="userName" />
    </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import { NAME } from '@/constants.json'

export default {
    name: 'home',
    data: () => {
        return {
            userName: NAME
        }
    },
    components: {
        Welcome
    }
}
</script>

<style lang="scss">
.home {
    @media (max-width: 1024px) {
        margin-top: 80%;
    }
}
</style>
