import { ChakraProvider } from "@chakra-ui/react";
import appTheme from "./config/theme-config";
import LayoutWrapper from "./components/layout/layout-wrapper";
import ViewHome from "./views/home";
import ViewMarketFeatures from "./views/market-features";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewTradeFiat from "./views/trade-fiat";
import { QueryClient, QueryClientProvider } from "react-query";
import ViewLogin from "./views/login";
import { useEffect } from "react";

function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    const previousLanguage = localStorage.getItem("appLang");

    if (!previousLanguage) localStorage.setItem("appLang", "en");
  }, []);

  return (
    <ChakraProvider theme={appTheme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          {/* Layout Wrapper */}
          <LayoutWrapper>
            {/* Routes */}
            <Routes>
              <Route path="/" element={<ViewHome />} />
              <Route path="/features" element={<ViewMarketFeatures />} />
              <Route path="/coin/:coin" element={<ViewTradeFiat />} />
              <Route path="/login" element={<ViewLogin />} />
            </Routes>
          </LayoutWrapper>
        </QueryClientProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
