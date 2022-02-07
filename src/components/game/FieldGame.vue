<template>
  <div class="wrap">
    <div class="game-over" v-if="isGameOver">
      <h1 class="congratulation">Congratulations! You have won!</h1>
    </div>
    <div class="game-field" v-if="!isGameOver">
      <div
        :class="[
          allCards[number - 1] && start ? 'item-field' : 'item-field-disabled',
        ]"
        v-for="number in 36"
        :key="number"
      >
        <card
          v-if="allCards[number - 1] && start"
          :card="allCards[number - 1]"
          @flip="$emit('flip', allCards[number - 1])"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import card from "./card.vue";
import GameCounter from "./GameCounter.vue";

export default {
  data() {
    return {
      flipCardSlug: "",
      interval: null,
    };
  },
  props: {
    start: {
      type: Boolean,
    },
    isGameOver: {
      type: Boolean,
    },
  },
  components: { card, GameCounter },
  computed: {
    ...mapGetters(["allCards", "getReverseCards"]),
  },
};
</script>

<style lang="scss" scoped>
.game-over {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.congratulation {
  margin-top: 150px;
  font-size: 80px;
  color: #f4e9dc;
  text-shadow: rgb(233, 221, 119) 1px 0 10px;
}
.item-field-disabled {
  background-color: rgb(31, 31, 57);
  background: linear-gradient(
    318deg,
    rgba(31, 31, 57, 1) 46%,
    rgba(60, 61, 102, 1) 77%,
    rgba(255, 255, 255, 1) 80%,
    rgba(255, 255, 255, 1) 87%,
    rgba(60, 61, 102, 1) 91%
  );
}
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
  font-family: "Orbitron", sans-serif;
  margin: 0 10px;
}

.wrap:after {
  content: "";
  display: block;
  padding-top: 100%;
}

@media screen and (min-width: 1000px) {
}
</style>