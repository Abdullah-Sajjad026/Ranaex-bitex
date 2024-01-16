import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

import ImgBrandFrame from "@/assets/images/icons/brand-frame.png";
import ImgSecurityFrame from "@/assets/images/icons/security-frame.png";
import ImgUserFrame from "@/assets/images/icons/user-frame.png";
import ImgGlobalFrame from "@/assets/images/icons/global-frame.png";
import { useTranslation } from "react-i18next";

export default function FeaturesList() {
  const { t } = useTranslation();

  const list = [
    {
      id: 1,
      title: t("pages.features.7yearBrand"),
      description: t("pages.features.7yearBrandDescription"),
      image: ImgBrandFrame,
    },
    {
      id: 2,
      title: t("pages.features.securityRegulation"),
      description: t("pages.features.securityRegulationDescription"),
      image: ImgSecurityFrame,
    },
    {
      id: 3,
      title: t("pages.features.globalInvestors"),
      description: t("pages.features.globalInvestorsDescription"),
      image: ImgUserFrame,
    },
    {
      id: 4,
      title: t("pages.features.globalOperation"),
      description: t("pages.features.globalOperationDescription"),
      image: ImgGlobalFrame,
    },
  ];

  return (
    <VStack spacing="8" alignItems="stretch" px="4" py="10">
      {list.map((item, index) => (
        <HStack spacing="2" key={index}>
          <Box flexGrow="1" order={index % 2 === 0 ? 1 : 2}>
            <Heading variant="sectionTitle" fontSize="lg">
              {item.title}
            </Heading>
            <Text fontSize="sm" color="brand.muted">
              {item.description}
            </Text>
          </Box>
          <Box order={index % 2 === 0 ? 2 : 1}>
            <Image
              src={item.image}
              alt={item.title}
              maxHeight={"20"}
              width="auto"
            />
          </Box>
        </HStack>
      ))}
    </VStack>
  );
}
