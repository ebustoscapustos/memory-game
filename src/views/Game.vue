<template>
  <div>
    <field-game :start="start" @flip="flip" />
    <game-counter @changeTime="changeTime" @start="startGame" />
    <result-list />
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
    ...mapGetters(["allCards", "getReverseCards", "getScore"]),
    compareCards() {
      if (this.getReverseCards.length < 2) return false;
      const firstReverseCard = this.getReverseCards[0];
      const secondReverseCard = this.getReverseCards[1];
      return firstReverseCard.slug === secondReverseCard.slug;
    },
    isGameOver() {
      return this.allCards.every((elem) => elem === undefined);
    },
  },
  created() {
    if (localStorage.getItem("results")) {
      this.results = localStorage.getItem("results").split(',');
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
    ]),

    changeTime(time) {
      this.time = time;
    },

    calculateScore() {
      return 50;
    },
    addScore() {
      this.changeScore(this.calculateScore());
    },

    startGame() {
      this.start = true;
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
        this.removeCard({
          firstReverseCard,
          secondReverseCard,
        });
      }, 600);
    },
    isGameOver(value) {
      if (value) {
        this.results.push(this.getScore);
        localStorage.setItem("results", this.results);
      }
    },
  },
};
</script>

<style lang="scss">
</style>