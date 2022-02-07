<template>
  <div>
    <h1 class="empty" v-if="results.length === 0">result table is empty</h1>
    <div class="wrapper">
      <ol class="results-list">
        <li
          class="results-item"
          v-for="(result, index) of results"
          :key="index"
        >
          {{ +result }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  font-family: "Orbitron", sans-serif;
  margin: 0 10px;
  padding: 0 20px;
  background-color: rgb(126, 126, 170);
  background: linear-gradient(
    180deg,
    rgba(126, 126, 170, 1) 22%,
    rgba(79, 79, 120, 1) 75%
  );
  border-radius: 10px;
}
.results-item {
  color: #fff;
  font-size: 30px;
  border-bottom: 1px solid #fff;
  margin: 0 10px;
}
.empty {
    color: #fff;
    text-transform: uppercase;
    font-size: 40px;
}
</style>