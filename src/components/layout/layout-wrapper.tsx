import { Box } from "@chakra-ui/react";
import ConfigSelectors from "../config-selectors";
import Footer from "./footer";
import Header from "./header";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Box display="none">
        <ConfigSelectors />
      </Box>
      <Footer />
    </>
  );
}
