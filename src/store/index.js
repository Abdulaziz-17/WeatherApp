import { createStore } from 'vuex'
import axios from "axios";
import { apiKey } from "@/key";
export default createStore({
  state: {
    weather: null
  },
  getters: {
    getDailyWeather: (state) => state.weather?.daily.filter((el, i) => i != 0)
  },
  mutations: {
    getWeather(state, payload) {
      state.weather = payload
    }
  },
  actions: {
    async getWeather({commit},city = 'Toshkent') {
      try {
        const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
        const { lat, lon, name } = res.data[0]
        const res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${apiKey}&units=metric&lang=ru`)
       res2.data.city = name
        commit('getWeather', res2.data)
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})

