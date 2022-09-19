import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";

const App = memo(() => {
  return (
    <div className="app">
      <div className="header">
        <AppHeader />
      </div>
      <div className="main">{useRoutes(routes)}</div>
      <div className="footer">
        <AppFooter />
      </div>
    </div>
  );
});

export default App;
