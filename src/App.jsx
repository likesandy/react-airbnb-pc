import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

const App = memo(() => {
  return <>{useRoutes(routes)}</>;
});

export default App;
