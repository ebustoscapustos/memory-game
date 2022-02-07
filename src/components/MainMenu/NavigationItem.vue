<template>
  <div class="button">
    <router-link
      :to="dataButton.path"
    >
      {{ dataButton.title }}
    </router-link>
  </div>
  
</template>

<script>
export default {
  props: {
    dataButton: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  text-transform: uppercase;
  font-size: 20px;
  background-color: #717394;
  padding: 10px 0;
  text-align: center;
  margin: 0 10px;
  border: 2px solid #9E8463;
  box-shadow: 0px 7px 10px 10px rgba(0, 0, 0, 0.3);
}
.button:hover {
  background-color: #b9bbdd;
  border-color: rgb(187,149,101);
  border-image: linear-gradient(0deg, rgba(187,149,101,1) 43%, rgba(249,235,218,1) 52%, rgba(255,255,255,1) 60%);
  border-image-slice: 1;
}
.button:active {
  background-color: rgb(81,82,106);
  background: linear-gradient(0deg, rgba(81,82,106,1) 0%, rgba(33,34,59,1) 62%);
}
a {
    text-decoration: none;
    color: #fff;
    padding: 10px 50px;
  }
@media (max-width: 600px) {
    .button {
      margin: 10px;
    }
}
</style>