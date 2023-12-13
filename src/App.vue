<template>
  <div class="container"> 
    <InfoBlock/>
    <Weeks/>
    <video src="@/assets/videos/clouds.mp4" autoplay loop playsinline class="weather__video"></video>
  </div>
</template>

<script>
import InfoBlock from "@/components/InfoBlock.vue";
import Weeks from "@/components/Weeks.vue";
  export default {
    components:{
      InfoBlock,Weeks
    },
    created(){
      this.$store.dispatch('getWeather')
    }
  }
</script>

<style lang="scss" scoped>

</style>