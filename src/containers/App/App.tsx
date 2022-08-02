import { Routes, Route, HashRouter } from "react-router-dom";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import routesConfig from "@/routes/routesConfig";

import { BASE_URL } from "@/constants/api";

import { PageStyle } from "./App.style";

export const App = () => {
  const client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <PageStyle>
          <Header />

          <Routes>
            {routesConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>

          <Footer />
        </PageStyle>
      </HashRouter>
    </ApolloProvider>
  );
};
