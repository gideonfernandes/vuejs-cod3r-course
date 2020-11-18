new Vue({
  el: '#desafio',
  data: {
    name: 'Gideon Fernandes',
    age: 22,
    googleImage: 'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png',
  },
  methods: {
    timesAge() {
      return this.age * 3;
    },
    randomNumber() {
      return Math.random();
    },
  },
});
