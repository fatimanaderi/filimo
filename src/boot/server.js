import { makeServer } from "src/api/server";
if (process.env.NODE_ENV === "development") {
  makeServer();
}
