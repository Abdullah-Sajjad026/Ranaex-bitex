import { Box, Image } from "@chakra-ui/react";
import TitleBox from "@/components/title-box";

import SpotMarketDoodle from "@/assets/images/spot-market.jpg";

import DownloadCTAs from "@/components/download-ctas";
import { useTranslation } from "react-i18next";

export default function FeatureAgileTrade() {
  const { t } = useTranslation();

  return (
    <Box p="4" my="8">
      <TitleBox
        title={t("pages.home.tradeAnytime")}
        subtitle={t("pages.home.compatibleApp")}
      />
      <Box display="flex" justifyContent="center" mt="5">
        <Image src={SpotMarketDoodle} alt="purchase doodle" height="250px" />
      </Box>

      <Box mt="5">
        <DownloadCTAs mode="light" />
      </Box>
    </Box>
  );
}
