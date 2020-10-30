import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import axios from 'axios';

const GetCurrent: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const location = (req.query.location);

    axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env['WEATHER_API_KEY']}&q=${location}`)
        .then(res => {
            context.res = {
                status: res.status,
                body: res.data
            }
        })
        .catch(err => {
            context.res = {
                status: 200,
                body: err.data
            }
        });
};

export default GetCurrent;