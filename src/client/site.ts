import { createPrestashopAdapter } from "./platform.js";

export const adapter = createPrestashopAdapter({
  origin: "https://nutri-beautiful.com",
  hosts: ["nutri-beautiful.com","www.nutri-beautiful.com"],
});
