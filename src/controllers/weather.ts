import { toRefs, reactive } from 'vue';
import axios from 'axios';
import { Location, CurrentWeather } from '../models';

const state = reactive<{ error: any; query: null | string; location: null | Location; currentWeather: null | CurrentWeather }>({
    error: null,
    query: null,
    location: null,
    currentWeather: null
});

export default function () {
    const current = async (_query: string) => {
        state.query = _query;
        axios.get(`/api?query=${_query}`)
        .then(res => {
            state.location = res.data.location;
            state.currentWeather = res.data.current;

            console.log(state.currentWeather);
        })
        .catch(err => {
            state.error = err;
        });
    };

    return {
        ...toRefs(state),
        current
    };
}