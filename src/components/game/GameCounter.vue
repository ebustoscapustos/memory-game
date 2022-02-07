<template>
  <div class="wrapper">
    <div>
      <button @click="startTimer">Start</button>
    </div>
    <div class="timer">{{ formatStringTime }}</div>
    <div class="score">{{ getScore }}</div>
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
  computed: {
    ...mapGetters(["getScore"]),
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
    ...mapMutations(["startGame"]),

    formatItemTime(value) {
      return value < 10 ? `0${value}` : value;
    },

    startTimer() {
        this.interval = setInterval(() => {
            this.time += 1
            this.$emit('changeTime')
        },1000)
        this.$emit('start')
    }
  },
};
</script>

<style lang="scss" scoped>
.timer,
.score {
  font-family: "Orbitron", sans-serif;
  color: #fff;
  font-size: 30px;
}
</style>