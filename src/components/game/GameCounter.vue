<template>
  <div class="wrapper">
    <div>
      <button class="game-button" @click="startTimer">{{ start ? "End" : "Start" }}</button>
    </div>
    <div class="timer">{{ formatStringTime }}</div>
    <div class="score">{{'SCORE: ' + getScore }}</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      time: 0,
      interval: null,
    };
  },
  props: {
    start: {
      typeof: Boolean,
    },
  },
  computed: {
    ...mapGetters(["getScore", 'isGameOver']),
    formatStringTime() {
      const hour = parseInt(this.time / 3600);
      const minute = parseInt((this.time % 3600) / 60);
      const sec = parseInt(this.time % 60);
      return `${this.formatItemTime(hour)}:${this.formatItemTime(
        minute
      )}:${this.formatItemTime(sec)}`;
    },
  },
  methods: {
    ...mapMutations(["startGame", 'clearScore']),

    formatItemTime(value) {
      return value < 10 ? `0${value}` : value;
    },

    startTimer() {
      if (this.start) {
        clearInterval(this.interval);
        this.time = 0
        this.clearScore()
        this.$emit("start");
      } else {
        this.interval = setInterval(() => {
          this.time += 1;
          this.$emit("changeTime", this.time);
        }, 1000);
        this.$emit("start");
      }
    },
  },
  watch: {
    isGameOver(value) {
      if (value) {
        clearInterval(this.interval);
        this.time = 0
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 15px;
}
.timer,
.score {
  font-family: "Orbitron", sans-serif;
  color: #fff;
  font-size: 30px;
}
.game-button {
  font-family: "Orbitron", sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  background-color: #717394;
  padding: 10px 20px;
  text-align: center;
  margin: 0 10px;
  border: 2px solid #9E8463;
  box-shadow: 0px 7px 10px 10px rgba(0, 0, 0, 0.3);
  color: #fff;
}
.game-button:hover {
  background-color: #b9bbdd;
  border-color: rgb(187,149,101);
  border-image: linear-gradient(0deg, rgba(187,149,101,1) 43%, rgba(249,235,218,1) 52%, rgba(255,255,255,1) 60%);
  border-image-slice: 1;
}
.game-button:active {
  background-color: rgb(81,82,106);
  background: linear-gradient(0deg, rgba(81,82,106,1) 0%, rgba(33,34,59,1) 62%);
}
</style>