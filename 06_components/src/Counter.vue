<template>
  <section id="counter">
    <h1>{{ counter }}</h1>
    <button @click="plusCounter">PLUS</button>
    <button @click="lessCounter">LESS</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    plusCounter() {
      this.counter++
    },
    lessCounter() {
      this.counter--
    }
  }
}
</script>

<style scoped>
  #counter {
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  #counter > button {
    width: 150px;
    height: 40px;
    border-radius: 3px;
    color: white;
    background-color: blueviolet;
    margin: 6px;
    border: 0;
  }
</style>