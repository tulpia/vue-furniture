<template>
  <main id="app" class="wrapper">
    <app-header></app-header>
    <app-mainSlider></app-mainSlider>
    <app-mainDescription></app-mainDescription>
    <app-mainSuggestions></app-mainSuggestions>
    <app-slider></app-slider>
    <app-footer></app-footer>
  </main>
</template>

<script>
import MainSlider from "./parts/MainSlider.vue";
import MainDescription from "./parts/MainDescription.vue";
import MainSuggestions from "./parts/MainSuggestions.vue";
import Slider from "./parts/AutumnSlider.vue";

export default {
  name: "app",
  components: {
    "app-mainSlider": MainSlider,
    "app-mainDescription": MainDescription,
    "app-mainSuggestions": MainSuggestions,
    "app-slider": Slider
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_general.scss";
</style>
