<template>
    <div class="main-layout">
        <main-menu/>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import MainMenu from '../components/MainMenu/index'


export default{
   components: {MainMenu}
}
</script>

<style lang="scss" scoped>
.main-layout {
    text-align: center;
    width: 100%;
    min-height: 100vh;
}
.content {
    border: 1px solid red;
    margin-top: 20px;
    padding: 10px calc(50% - 465px);
}
</style>