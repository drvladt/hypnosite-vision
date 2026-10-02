import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Recover from stale code chunks (after an update) with a single full page load.
// Load the page the visitor was navigating TO, not reload the one they are leaving.
let activeRouter: { latestLocation?: { href?: string } } | null = null;
if (typeof window !== "undefined") {
  const KEY = "chunk-reload-at";
  const recover = (message: string) => {
    if (!/dynamically imported module|Importing a module script failed|error loading dynamically/i.test(message)) return false;
    const last = Number(sessionStorage.getItem(KEY) || 0);
    if (Date.now() - last < 10000) return false;
    sessionStorage.setItem(KEY, String(Date.now()));
    const target = activeRouter?.latestLocation?.href;
    if (target && target !== window.location.pathname + window.location.search + window.location.hash) {
      window.location.assign(target);
    } else {
      window.location.reload();
    }
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

  if (typeof window !== "undefined") activeRouter = router;
  return router;
};
