const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Apprendre Vue et Refiner Français",
      courseLink: "https://v3.vuejs.org/",
    };
  },
});

// mounting our app to a unique selector in our HTML.
// usually, in general, this is pretty global. But we're doing this this way to better learn Vue
app.mount("#user-goal");
