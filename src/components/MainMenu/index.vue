<template>
    <div>
        <navigation-btn
        v-for="button in menuButtons"
        :key='button.path'
        :dataButton='button'
        />
    </div>
</template>

<script>
import NavigationBtn from './NavigationItem.vue'

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
    components: {NavigationBtn},
    
}
</script>
