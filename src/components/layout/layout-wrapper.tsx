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
      <ConfigSelectors />

      <Footer />
    </>
  );
}
