import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import axios from 'axios';

const GetCurrent: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const query = (req.query.query);

    const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env['WEATHER_API_KEY']}&q=${query}`);
    context.res = {
        status: res.status,
        body: res.data
    }
};

export default GetCurrent;