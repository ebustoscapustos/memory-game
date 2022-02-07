<template>
  <div>
    <result-list :results="results" />
  </div>
</template>


<script>
import ResultList from "../components/results/ResultList.vue";

export default {
  components: { ResultList },
  data() {
    return {
      results: [],
    };
  },
  created() {
    if (localStorage.getItem("results")) {
      const localData = localStorage.getItem("results").split(",");
      if (localData.length > 20) {
        localData.splice(0, localData.length - 20);
      }
      this.results = localData;
    }
    if (this.results.length > 20) {
      this.results.shift();
    }
  },
};
</script>