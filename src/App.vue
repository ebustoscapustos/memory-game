<template>
  <div id="app">
    <main-layout>
      <router-view></router-view>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';

export default {
  components: {MainLayout},
  name: 'App',
}
    MainLayout;
</script>

