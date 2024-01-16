import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";

import ImgApChat from "@/assets/images/app-chat.png";
import { useTranslation } from "react-i18next";

export default function CustomerService() {
  const { t } = useTranslation();

  return (
    <Box px="4" pt="8">
      <Heading textAlign="center" variant="sectionTitle">
        {t("pages.features.customerService")}
      </Heading>
      <Text color="brand.muted" fontSize="sm" mt="4" textAlign="center">
        {t("pages.features.customerServiceDescription")}
      </Text>

      <Center mt="8">
        <Image src={ImgApChat} alt="app chat" />
      </Center>
    </Box>
  );
}
