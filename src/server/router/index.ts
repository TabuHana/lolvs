// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { amiiboRouter } from "./amiibo";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("amiibo.", amiiboRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
