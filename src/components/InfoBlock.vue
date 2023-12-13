<template>
  <div class="infoBlock" v-if="weather">
    <div class="infoBlock__left">
      <div class="infoBlock__search">
        <input @keydown.enter="inputCity" v-model="search" type="text" class="infoBlock__input" placeholder="Выбрать город"/>
      </div>
      <img src="@/assets/images/sun.svg" alt="" class="infoBlock__left-img"
      v-if="getDescr == 'Clear'" />
      <img src="@/assets/images/mainly_cloudy.svg" alt="" class="infoBlock__left-img" 
      v-else-if="getDescr == 'Clouds'"/>
      <img src="@/assets/images/rain.svg" alt="" class="infoBlock__left-img" 
      v-else-if="getDescr == 'Rain'"/>
      <img src="@/assets/images/small_rain.svg" alt="" class="infoBlock__left-img" 
      v-else-if="getDescr == 'Drizzle'"/>
      <img src="@/assets/images/snow.png" alt="" class="infoBlock__left-img" 
      v-else-if="getDescr == 'Snow'"/>
      <h1 class="infoBlock__title">{{Math.round(weather.current.temp)}}°</h1>
      <h2 class="infoBlock__today">Сегодня</h2>
      <p class="infoBlock__time">Время: {{time}}</p>
      <p class="infoBlock__city">Город: {{weather.city}}</p>
    </div>
    <div class="infoBlock__right">
        <img src="@/assets/images/cloud.png" alt="" class="infoBlock__right-img">
      <div class="infoBlock__right-item">
        <div class="infoBlock__right-icon">
          <img src="@/assets/images/temp.svg" alt="" />
        </div>
        <span class="infoBlock__right-title">Температура</span>
        <span class="infoBlock__right-about">{{Math.round(weather.current.temp)}}° - ощущается как {{Math.round(weather.current.feels_like)}}°</span>
      </div>
      <div class="infoBlock__right-item">
        <div class="infoBlock__right-icon">
          <img src="@/assets/images/pressure.svg" alt="" />
        </div>
        <span class="infoBlock__right-title">Давление </span>
        <span class="infoBlock__right-about">{{weather.current.pressure}} мм ртутного столба - нормальное</span>
      </div>
      <div class="infoBlock__right-item">
        <div class="infoBlock__right-icon">
          <img src="@/assets/images/precipitation.svg" alt="" />
        </div>
        <span class="infoBlock__right-title">Осадки</span>
        <span class="infoBlock__right-about">{{weather.current.humidity}} с/в</span>
      </div>
      <div class="infoBlock__right-item">
        <div class="infoBlock__right-icon">
          <img src="@/assets/images/wind.svg" alt="" />
        </div>
        <span class="infoBlock__right-title">Ветер</span>
        <span class="infoBlock__right-about">{{ Math.round(weather.current.wind_speed) }} м/с юго-запад - легкий ветер</span>
      </div>
    </div>
  </div>
</template>

<script> 
import { mapActions } from "vuex";
import { mapState } from "vuex";

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

  computed: {
    ...mapState(['weather']),
    getDescr(){
      return this.weather.current.weather[0].main
    },
    time(){
      return new Date ().toLocaleString('ru-Ru', {
        timeZone: this.weather.timezone,
        hourCycle: 'h24',
        timeStyle: 'short'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>