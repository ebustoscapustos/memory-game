<template>
  <router-link
    :to="dataButton.path"
  >
    {{ dataButton.title }}
  </router-link>
  
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
