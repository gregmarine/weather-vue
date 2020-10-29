export default class Location {
    constructor(
        public name: string,
        public region: string,
        public country: string,
        public lat: number,
        public lon: number,
        public tz_id: number,
        public localtime_epoch: number,
        public localtime: string
    ) {}
}