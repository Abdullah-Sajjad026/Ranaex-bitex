import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";

import ImgInvestments from "@/assets/images/app-mining.png";
import { useTranslation } from "react-i18next";

export default function ExclusiveInvestments() {
  const { t } = useTranslation();

  return (
    <Box bgColor="brand.black">
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
          {t("pages.features.exclusiveCoins")}
        </Heading>
        <Text color="brand.muted" fontSize="sm" mt="4">
          {t("pages.features.exclusiveCoinsDescription")}
        </Text>
      </Box>

      <Center mt="-2px">
        <Image src={ImgInvestments} alt="app landing" width="full" />
      </Center>
    </Box>
  );
}
