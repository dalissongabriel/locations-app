import addressesValidResponse from "@/mocks/data/addressesValidResponse.json";
import { rest } from "msw";

const AddressesHandlers = [
  rest.get("http://localhost:3001/api/addresses", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(addressesValidResponse),
      ctx.delay(150)
    );
  }),
];

export default AddressesHandlers;
