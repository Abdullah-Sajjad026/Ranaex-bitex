import { Box, Heading, Image } from "@chakra-ui/react";

import AppPreviewImage from "@/assets/images/app-preview.png";

import DownloadCTAs from "@/components/download-ctas";
import { useTranslation } from "react-i18next";

export default function FeatureAgileTrade() {
  const { t } = useTranslation();

  return (
    <Box p="4" my="14">
      <Heading variant="sectionTitle" textAlign="center">
        Trade on the go. Anywhere, anytime.
      </Heading>
      <Box display="flex" justifyContent="center" mt="10">
        <Image src={AppPreviewImage} alt="App Preview" height="600" />
      </Box>

      <Box mt="10">
        <DownloadCTAs mode="light" />
      </Box>
    </Box>
  );
}
