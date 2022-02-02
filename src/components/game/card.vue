<template>
    <div class="front">
        <img v-if="reverse" :src="require(`@/assets/images/${card.image}`)">
        <img class="back" v-if="!reverse" :src="require(`@/assets/images/pokeball.svg`)">
    </div>
</template>

<script>
export default {
    data() {
        return {
            reverse: true
        }
    },
    props: {
        card: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style lang="scss" scoped>
.front {
    position: relative;
    display: flex;
    justify-content: center;
    height: 100%;
}
img {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0; left: 0; bottom: 0; right: 0;
}
.back {
    height: 70%;
    top: 15%;
}
</style>