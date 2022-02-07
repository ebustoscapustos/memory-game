<template>
  <div class="main-layout">
    <main-menu />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import MainMenu from "../components/MainMenu/index";

export default {
  components: { MainMenu },
};
</script>

<style lang="scss" scoped>
.main-layout {
  text-align: center;
  width: 100%;
  min-height: 100vh;
  background: rgb(24, 25, 42);
  background: linear-gradient(
    180deg,
    rgba(24, 25, 42, 1) 33%,
    rgba(45, 46, 65, 1) 73%
  );
}
.content {
  padding: 10px calc(50% - 365px);
}
</style>