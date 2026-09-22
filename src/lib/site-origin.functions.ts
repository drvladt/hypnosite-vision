import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

import { resolveSiteOrigin } from "./site-origin.server";

/** Returns the canonical public origin for SSR and client-side route transitions. */
export const getSiteOrigin = createServerFn({ method: "GET" }).handler(() =>
  resolveSiteOrigin(getRequest()),
);
