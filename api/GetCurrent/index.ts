import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import fetch from 'node-fetch';

const GetCurrent: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const location = (req.query.location);
    
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env['WEATHER_API_KEY']}&q=${location}`)
    const weather = await res.json();

    context.res = {
        body: weather
    };
};

export default GetCurrent;