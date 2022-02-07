<template>
    <div class="menu">
        <navigation-item
        v-for="button in menuButtons"
        :key='button.path'
        :dataButton='button'
        />
    </div>
</template>

<script>
import NavigationItem from './NavigationItem.vue'

export default {
    name: 'MainMenu',
    data() {
        return {
            menuButtons: [
                {
                    title: 'game',
                    path: '/'
                },
                {
                    title: 'results',
                    path: '/results'
                }
            ]
        }
    },
    components: {NavigationItem},
    
}
</script>


<style lang="scss" scoped>
.menu {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    padding-top: 40px
}
</style>