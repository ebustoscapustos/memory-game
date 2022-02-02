<template>
  <div class="wrap">
    <div class="game-field">
      <div class="item-field" v-for="(card, index) in shuffleCards" :key="index">
        <card :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import card from "./card.vue";

export default {
  components: { card },
  computed: {
    ...mapGetters(["allCards"]),
    shuffleCards() {
      for (let i = this.allCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.allCards[i], this.allCards[j]] = [this.allCards[j], this.allCards[i]];
      }
      return this.allCards
    },
  },
};
</script>

<style lang="scss" scoped>
.game-field {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  display: grid;
  grid-gap: 5px;
}
.item-field {
  padding: 5px;
  border: 3px solid rgb(187, 149, 101);
  border-image: linear-gradient(
    315deg,
    rgba(187, 149, 101, 1) 33%,
    rgba(249, 235, 218, 1) 39%,
    rgba(255, 255, 255, 1) 45%,
    rgba(252, 245, 236, 1) 58%,
    rgba(242, 209, 168, 1) 71%
  );
  border-image-slice: 1;
  border-radius: 5%;
  background: rgb(101, 103, 149);
  background: linear-gradient(
    180deg,
    rgba(101, 103, 149, 1) 39%,
    rgba(128, 128, 154, 1) 86%
  );
}

.wrap {
  position: relative;
  display: block;
}

.wrap:after {
  content: "";
  display: block;
  padding-top: 100%;
}
</style>