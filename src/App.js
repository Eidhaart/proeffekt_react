import React from "react";
import routes from "./routes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        {routes.map((route, idx) => (
          <Route path={route.path} element={route.component} key={idx} />
        ))}
      </Routes>
    </React.Fragment>
  );
}

export default App;
