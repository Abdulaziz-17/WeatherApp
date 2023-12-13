<template>
    <div class="weeks">
        <Day v-for="(day, index) in getDailyWeather" :key="index" :day="day"/>
    </div>
</template>

<script>
import Day from "@/components/Day.vue"
import { mapGetters } from "vuex";
    export default {
        components: {
            Day,
        },

        computed: {
            ...mapGetters(['getDailyWeather'])
        }
    }
</script>

<style lang="scss" scoped>

</style>