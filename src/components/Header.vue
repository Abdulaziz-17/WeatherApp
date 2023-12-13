<template>
  <!-- <header class="header">
    <nav class="header__nav">
      <!-- <a href="" class="logo">
        <img src="@/assets/images/logo.svg" alt="" />
        vue weather
      </a> -->
      <!-- <div class="header__search">
        <img src="@/assets/images/gulp.svg" alt="" />
        <input @keydown.enter="inputCity" v-model="search" type="text" class="header__input" placeholder="Выбрать город"/>
      </div> -->
    </nav>
  </header> -->
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      search:null
    }
  },
  methods: {
    ...mapActions(['getWeather']),
    inputCity() {
     if (this.search) {
      this.getWeather(this.search)
      this.search = null
     }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>