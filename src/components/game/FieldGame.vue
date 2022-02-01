<template>
  <div class="wrap">
      <div class="game-field">
        <div class="item-field" v-for="(card, index) in allCards" :key="index">
          <div class="card">{{ card }}</div>
        </div>
      </div>
  </div>
 
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["allCards"]),
};
</script>

<style lang="scss" scoped>
.game-field {
  border: 1px solid blue;
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
  border: 1px solid red;
}



.wrap {
    border: 1px solid red;
  position: relative;
  display: block;
}

.wrap:after {
  content: '';
  display: block;
  padding-top: 100%;
}

.card {
    height: 100%;
}
</style>