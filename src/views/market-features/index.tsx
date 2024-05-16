import DownloadCTAs from "@/components/download-ctas";
import { Box, Image } from "@chakra-ui/react";
import CustomerService from "./components/features/customer-service";

export default function ViewMarketFeatures() {
  return (
    <>
      {/* <QualityExchange /> */}
      <CustomerService />
      <Box
        py="6"
        px="4"
        mt="-1px"
        bgImage="url('/texture.png')"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
      >
        <DownloadCTAs />
      </Box>

      <Box
        position="relative"
        _after={{
          // Putting a black line upon bottom border to cover white line there
          content: "''",
          display: "block",
          position: "absolute",
          bottom: "-2",
          left: "0",
          width: "100%",
          height: "1px",
          bg: "brand.black",
        }}
      >
        <Image
          src={"/logo.png"}
          alt="app banner"
          width="60%"
          mx="auto"
          position="relative"
        />
      </Box>
    </>
  );
}
