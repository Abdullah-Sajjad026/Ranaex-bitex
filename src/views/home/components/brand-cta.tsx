import { LOGIN_URL, goToRegister } from "@/utils/utils-functions";
import { Box, Button, HStack, Heading, Link, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function BrandCTA() {
  const { t } = useTranslation();

  return (
    <Box px="4" my="14">
      <Heading
        variant="sectionTitle"
        maxWidth="330px"
        mx="auto"
        textAlign="center"
      >
        {t("pages.home.heroTitle")}
      </Heading>
      <HStack
        mt="3"
        spacing="3"
        divider={<Box w="2px" h="3" bg="brand.black" />}
        justifyContent="center"
      >
        <Text fontSize="xs" fontWeight="Normal">
          {t("words.secure")}
        </Text>
        <Text fontSize="xs" fontWeight="Normal">
          {t("words.innovative")}
        </Text>
        <Text fontSize="xs" fontWeight="Normal">
          {t("words.trustWorthy")}
        </Text>
      </HStack>

      <Box
        mt="5"
        width="70%"
        borderTopRightRadius="30px"
        borderTopLeftRadius="10px"
        borderBottomLeftRadius="-10px"
        bg="brand.dark"
        color="white"
        p="2"
      >
        <Text fontSize="sm">
          {t("messages.welcomeBonus")}
          <Text color="brand.blue" display="inline-block">
            {" "}
            255 USDT
          </Text>
        </Text>
      </Box>
      <Button w="full" borderTopLeftRadius={0} onClick={goToRegister}>
        {t("words.signUp")}
      </Button>

      <Box mt="5">
        <Text textAlign="center" fontSize="sm">
          {t("messages.alreadyAccount")}{" "}
          <Link href={LOGIN_URL}>{t("messages.gotoLogin")}</Link>
        </Text>
      </Box>
    </Box>
  );
}
