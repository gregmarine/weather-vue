import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            text: `Hello from the API. The Weather API Key is ${process.env["WEATHER_API_KEY"]}`
        }
    };

};

export default httpTrigger;