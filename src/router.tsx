import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Recover from stale code chunks (after an update) with a single reload.
if (typeof window !== "undefined") {
  const KEY = "chunk-reload-at";
  const recover = (message: string) => {
    if (!/dynamically imported module|Importing a module script failed|error loading dynamically/i.test(message)) return false;
    const last = Number(sessionStorage.getItem(KEY) || 0);
    if (Date.now() - last < 10000) return false;
    sessionStorage.setItem(KEY, String(Date.now()));
    window.location.reload();
    return true;
  };
  window.addEventListener("vite:preloadError", (event) => {
    event.preventDefault();
    recover("dynamically imported module");
  });
  window.addEventListener("unhandledrejection", (event) => {
    if (recover(String(event.reason?.message ?? event.reason))) event.preventDefault();
  });
  window.addEventListener("error", (event) => {
    recover(String(event.message));
  });
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
