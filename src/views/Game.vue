<template>
  <div>
    <field-game :start="start" :isGameOver="isGameOver" @flip="flip" />
    <game-counter @changeTime="changeTime" @start="startGame" :start="start" />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, Store } from "vuex";
import FieldGame from "../components/game/FieldGame.vue";
import GameCounter from "../components/game/GameCounter.vue";
import ResultList from "../components/results/ResultList.vue";
export default {
  components: { FieldGame, GameCounter, ResultList },
  data() {
    return {
      time: 0,
      start: false,
      ednGame: false,
      results: [],
    };
  },
  computed: {
    ...mapGetters([
      "allCards",
      "getReverseCards",
      "getScore",
      "isGameOver",
      "step",
    ]),
    compareCards() {
      if (this.getReverseCards.length < 2) return false;
      const firstReverseCard = this.getReverseCards[0];
      const secondReverseCard = this.getReverseCards[1];
      return firstReverseCard.slug === secondReverseCard.slug;
    },
  },
  created() {
    if (localStorage.getItem("results")) {
      this.results = localStorage.getItem("results").split(",");
    }
  },
  methods: {
    ...mapActions(["getAllCards"]),
    ...mapMutations([
      "removeCard",
      "reverseAllCards",
      "flipCard",
      "changeScore",
      "updateResults",
      "clearScore",
      "stepCounter",
      "stepRefresh",
    ]),

    changeTime(time) {
      this.time = time;
    },

    calculateScore() {
      const score = (1000 * Math.ceil((1 - this.time / 1000) * 100)) / 100;
      if (score < 100) return 100;
      return score;
    },
    addScore() {
      this.changeScore(this.calculateScore());
    },

    startGame() {
      this.stepRefresh();
      this.start = !this.start;
      this.getAllCards();
      this.reverseAllCards("front");
      this.interval = setTimeout(() => {
        this.reverseAllCards();
        clearTimeout(this.interval);
      }, 3000);
    },

    flip(card) {
      if (card.reverse) return;
      clearTimeout(this.interval);
      if (this.getReverseCards.length === 2) {
        this.reverseAllCards();
      }
      this.flipCard(card);
      this.interval = setTimeout(() => {
        this.reverseAllCards();
        clearTimeout(this.interval);
      }, 3000);
    },
  },
  watch: {
    compareCards(value) {
      if (!value) return;
      this.addScore();
      const firstReverseCard = this.getReverseCards[0];
      const secondReverseCard = this.getReverseCards[1];
      setTimeout(() => {
        this.stepCounter();
        this.removeCard({
          firstReverseCard,
          secondReverseCard,
        });
      }, 600);
    },
    isGameOver(value) {
      if (value) {
        this.start = !this.start;
        this.results.push(this.getScore);
        localStorage.setItem("results", this.results);
        this.clearScore();
      }
    },
  },
};
</script>

<style lang="scss">
</style>