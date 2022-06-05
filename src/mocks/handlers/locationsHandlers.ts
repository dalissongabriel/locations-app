import locationsValidResponse from "@/mocks/data/locationsValidResponse.json";
import { baseURL } from "@/services/BaseAPI";
import { rest } from "msw";

const LocationsHandlers = [
  rest.get(`${baseURL}/locations`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(locationsValidResponse),
      ctx.delay(150)
    );
  }),
];

export default LocationsHandlers;
