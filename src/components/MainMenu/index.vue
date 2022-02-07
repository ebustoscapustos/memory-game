<template>
  <div class="menu">
    <navigation-item
      v-for="button in menuButtons"
      :key="button.path"
      :dataButton="button"
    />
  </div>
</template>

<script>
import NavigationItem from "./NavigationItem.vue";

export default {
  name: "MainMenu",
  data() {
    return {
      menuButtons: [
        {
          title: "game",
          path: "/",
        },
        {
          title: "results",
          path: "/results",
        },
      ],
    };
  },
  components: { NavigationItem },
};
</script>


<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  padding-top: 20px;
  font-family: "Orbitron", sans-serif;
}
@media (max-width: 1000px) {
  .menu {
    margin-bottom: 50px;
    padding-top: 50px;
  }
}
@media (max-width: 600px) {
  .menu {
    flex-direction: column;
  }
}
</style>