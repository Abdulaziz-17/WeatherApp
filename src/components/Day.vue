<template>
    <div class="day">
        <h3 class="day__title">{{ weekDay }}</h3>
        <p class="day__date">{{ numeric }} {{ month }}</p>
        <img src="@/assets/images/sun.svg" alt="" class="day__img" v-if="getDescr == 'Clear'" />
        <img src="@/assets/images/mainly_cloudy.svg" alt="" class="day__img" v-else-if="getDescr == 'Clouds'" />
        <img src="@/assets/images/rain.svg" alt="" class="day__img" v-else-if="getDescr == 'Rain'" />
        <img src="@/assets/images/small_rain.svg" alt="" class="day__img" v-else-if="getDescr == 'Drizzle'" />
        <img src="@/assets/images/snow.png" alt="" class="day__img" v-else-if="getDescr == 'Snow'" />
        <p class="day__temp-day">{{Math.round(day.temp.day)}}°</p>
        <p class="day__temp-night">{{Math.round(day.temp.night)}}°</p>
        <p class="day__descr">{{ day.weather[0].description }}</p>
    </div>
</template>

<script>
export default {

    props: {
        day: Object,
    },


    computed: {
        weekDay() {
            return new Date(this.day.dt * 1000).toLocaleDateString('ru-RU', { weekday: 'short' })
        },
        month() {
            return new Date(this.day.dt * 1000).toLocaleDateString('ru-RU', { month: 'short' })
        },
        numeric() {
            return new Date(this.day.dt * 1000).toLocaleDateString('ru-RU', { day: 'numeric' })
        },
        getDescr(){
      return this.day.weather[0].main
    },
    }
}
</script>

<style lang="scss" scoped></style>