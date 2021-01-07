const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Apprendre Vue et Refiner Français",
      courseGoalB: "Apprendre Allemand",
      courseLink: "https://v3.vuejs.org/",
    };
  },
  // NEW: methods. on y va
  methods: {
    outputGoal() {
      const randomChiffre = Math.floor(Math.random() * 10);
      console.log(randomChiffre);
      return randomChiffre < 5 ? "Apprendre Vue" : "Maîtriser Vue";
    },
    outputGoal2() {
      // NEW: Max is talking further about data, specifically this
      // NEW: "vue takes all the data we return and merges it to our global vue instance object". this is why this.propertyName works
      const randomChiffre = Math.floor(Math.random() * 50);
      console.log(randomChiffre);
      return randomChiffre < 25 ? this.courseGoalA : this.courseGoalB;
    },
    // my reliable reload page function is backk
    reloadPage() {
      window.location.reload();
    },
  },
});

app.mount("#user-goal");
