import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import appTheme from "./config/theme-config";

import ViewLegalStatement from "@/views/legal-statement";
import ViewSecurityInformation from "@/views/security-information.tsx";
import ViewUserAgreement from "@/views/user-agreement.tsx";
import LayoutWrapper from "./components/layout/layout-wrapper";
import ViewAbout from "./views/about";
import ViewHome from "./views/home";
import ViewLogin from "./views/login";
import ViewMarketFeatures from "./views/market-features";
import ViewTradeFiat from "./views/trade-fiat";

import ViewDownloadApp from "@/views/download-app.tsx";
import "./App.css";

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
              <Route path={"/about"} element={<ViewAbout />} />
              <Route
                path={"/security-information"}
                element={<ViewSecurityInformation />}
              />
              <Route path={"/user-agreement"} element={<ViewUserAgreement />} />
              <Route path="/legal-statement" element={<ViewLegalStatement />} />
              <Route path="/features" element={<ViewMarketFeatures />} />
              <Route path="/coin/:coin" element={<ViewTradeFiat />} />
              <Route path="/login" element={<ViewLogin />} />
              <Route path="/download-app" element={<ViewDownloadApp />} />
            </Routes>
          </LayoutWrapper>
        </QueryClientProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
