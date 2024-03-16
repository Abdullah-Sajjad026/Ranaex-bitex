import { Box, Image } from "@chakra-ui/react";
import QualityExchange from "./components/features/quality-exchange";
import DownloadCTAs from "@/components/download-ctas";
import CustomerService from "./components/features/customer-service";
// import FlexibleSavings from "./components/features/flexible-savings";
// import ExclusiveInvestments from "./components/features/exclusive-investments";
//
// import ImgAppBanner from "@/assets/images/logo-banner.png";
// import FeaturesList from "./components/features/features-list";

export default function ViewMarketFeatures() {
  return (
    <>
      <QualityExchange />

      {/*<FeaturesList />*/}

      <Box
        py="6"
        px="4"
        mt="-1px"
        bgImage="url('/texture.png')"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
      >
        <DownloadCTAs mode="dark" />
      </Box>


      {/*<FlexibleSavings />*/}

      <CustomerService />

      {/*<ExclusiveInvestments />*/}

      <Box
        position="relative"
        // _before={{
        //   // Putting a black line upon bottom border to cover white line there
        //   content: "''",
        //   display: "block",
        //   position: "absolute",
        //   top: "1",
        //   left: "0",
        //   width: "100%",
        //   height: "1px",
        //   bg: "brand.black",
        // }}
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
          src={'/logo.jpeg'}
          alt="app banner"
          width="full"
          position="relative"
        />
      </Box>
    </>
  );
}
