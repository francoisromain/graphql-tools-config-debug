import "dotenv/config";

import * as express from "express";
import { graphql } from "./graphql";

const app = express();

app.use("/", graphql);

const port = 5000;

app.listen(port, () => {
  console.info(`http://localhost:${port}`);
});
