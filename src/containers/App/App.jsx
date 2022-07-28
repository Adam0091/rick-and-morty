import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "@components/Header";
import routesConfig from "@routes/routesConfig";
import { PageStyle } from "./App.style";

const App = () => {
  return (
    <>
      <HashRouter>
        <PageStyle>
          <Header />

          <Routes>
            {" "}
            {routesConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}{" "}
          </Routes>
        </PageStyle>
      </HashRouter>
    </>
  );
};

export default App;
