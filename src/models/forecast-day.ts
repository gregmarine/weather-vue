import Day from './day';
import Astro from './astro';
import Hour from './hour';

export default interface ForecastDay {
    date: string;
    date_epoch: number;
    day: Day;
    astro: Astro;
    hour: Hour[];
}