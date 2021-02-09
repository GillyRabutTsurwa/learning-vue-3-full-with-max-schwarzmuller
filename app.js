const app = Vue.createApp({
  data() {
    return {
      counter: 0, // ceci est utilisé directement sous le template HTML
      counter2: 0, // ceci est utilisé ici sur le Javascript
      counter3: 0,
      incrementer: 15,
    };
  },
  methods: {
    increment() {
      this.counter2++;
    },
    decrement() {
      this.counter2--;
    },
    fluidIncrement(num) {
      this.counter3 = this.counter3 + num;
    },
    fluidDecrement(num) {
      this.counter3 = this.counter3 - num;
    },
    reloadPage() {
      window.location.reload();
    },
  },
});

app.mount("#events");
