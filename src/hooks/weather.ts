import { toRefs, reactive } from 'vue';
import axios from 'axios';
import { CurrentWeather, ForecastDay, Location } from '../models';

const API_URL = 'https://api.weatherapi.com/v1/';

const state = reactive<{ error: any; query: null | string; location: null | Location; currentWeather: null | CurrentWeather; forecast: null | ForecastDay[] }>({
    error: null,
    query: null,
    location: null,
    currentWeather: null,
    forecast: null
});

export default function () {
    const getCurrentWeather = async (_query: string) => {
        state.query = _query;
        axios.get(`${ API_URL }current.json?key=${ process.env.VUE_APP_WEATHER_API_KEY }&q=${ _query }`)
        .then(res => {
            state.location = res.data.location;
            state.currentWeather = res.data.current;
        })
        .catch(err => {
            state.error = err;
        });
    };

    const getForecastWeather = async (_query: string, _days: number) => {
        state.query = _query;
        axios.get(`${ API_URL }forecast.json?key=${ process.env.VUE_APP_WEATHER_API_KEY }&q=${ _query }&days=${ _days }`)
        .then(res => {
            state.location = res.data.location;
            state.currentWeather = res.data.current;
            state.forecast = res.data.forecast.forecastday;
        })
        .catch(err => {
            state.error = err;
        });
    };

    return {
        ...toRefs(state),
        getCurrentWeather,
        getForecastWeather
    };
}