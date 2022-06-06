import { baseURL } from "@/infra/HttpClient";
import locationsValidResponse from "@/mocks/data/locationsValidResponse.json";
import { rest } from "msw";

const LocationsHandlers = [
  rest.get(`${baseURL}/locations`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(locationsValidResponse),
      ctx.delay(500)
    );
  }),
];

export default LocationsHandlers;
