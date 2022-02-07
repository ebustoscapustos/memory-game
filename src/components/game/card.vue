<template>
  <div class="card" @click="flip">
    <img
      class="front"
      v-if="card.reverse"
      :src="require(`@/assets/images/${card.image}`)"
    />
    <img
      class="back"
      v-if="!card.reverse"
      :src="require(`@/assets/images/pokeball.svg`)"
    />
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
    },
  },
  methods: {
    flip() {
      this.$emit("flip", this.card);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
img {
  position: absolute;
  max-height: 100%;
  width: 100%;
}
</style>