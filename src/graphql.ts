import * as expressGraphql from "express-graphql";
import { IncomingMessage } from "http";

import rootValue from "./api/resolvers";
import schema from "./api/schema";

interface IAuthRequestHttp extends IncomingMessage {
  user?: {
    [id: string]: string;
  };
}

const graphql = expressGraphql((req: IAuthRequestHttp) => ({
  context: { user: req.user },
  customFormatErrorFn: (err) => ({
    locations: err.locations,
    message: err.message,
    path: err.path,
    stack: err.stack ? err.stack.split("\n") : [],
  }),
  graphiql: true,
  pretty: true,
  rootValue,
  schema,
}));

export { graphql };
