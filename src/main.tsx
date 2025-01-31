import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FrontLoader from "./components/FrontLoader";
const App = React.lazy(() => import("./App"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<FrontLoader />}>
      <App />
    </Suspense>
  </StrictMode>,
);
