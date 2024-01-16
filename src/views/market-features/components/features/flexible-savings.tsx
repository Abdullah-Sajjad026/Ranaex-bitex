import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";

import ImgAppFinance from "@/assets/images/app-finance.svg";
import { useTranslation } from "react-i18next";

export default function FlexibleSavings() {
  const { t } = useTranslation();

  return (
    <Box
      bgColor="brand.black"
      position="relative"
      _before={{
        // Putting a black line upon bottom border to cover white line there
        content: "''",
        display: "block",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "2px",
        bg: "brand.black",
      }}
    >
      <Box
        py="10"
        px="4"
        mt="-2px"
        bgImage="url('/texture.png')"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="bottom"
        textAlign="center"
      >
        <Heading variant="sectionTitle" color="white">
          {t("pages.features.flexibleSavings")}
        </Heading>
        <Text color="brand.muted" fontSize="sm" mt="4">
          {t("pages.features.flexibleSavingsDescription")}
        </Text>
      </Box>

      <Center mt="-2px">
        <Image src={ImgAppFinance} alt="app landing" width="full" />
      </Center>
    </Box>
  );
}
