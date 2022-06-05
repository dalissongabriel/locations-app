import locationsValidResponse from "@/mocks/data/locationsValidResponse.json";
import { rest } from "msw";

const LocationsHandlers = [
  rest.get("http://localhost:3001/api/locations", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(locationsValidResponse),
      ctx.delay(150)
    );
  }),
];

export default LocationsHandlers;
