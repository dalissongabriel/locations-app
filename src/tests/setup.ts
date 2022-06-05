import { server } from "@/mocks/server";
import { afterAll, afterEach, beforeAll } from "vitest";

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
