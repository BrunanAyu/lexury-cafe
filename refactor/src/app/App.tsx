import { HomePage } from "@/modules/home";

// Single-page site: there is only one screen, so no router is used here.
// If additional routes are ever needed, add react-router-dom (or similar)
// and turn this into a route switch.
export function App() {
  return <HomePage />;
}
