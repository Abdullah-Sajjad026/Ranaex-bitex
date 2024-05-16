import { goToRegister } from "@/utils/utils-functions";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function BrandCTA() {
  const { t } = useTranslation();

  return (
    <Box px="4" my="14" textAlign="center">
      <Heading
        variant="sectionTitle"
        maxWidth="330px"
        mx="auto"
        mb="5"
        textAlign="center"
        color="brand.primary"
      >
        190,989,689
        <Box color="brand.black" fontSize="1.2em" mt="1">
          {/* {t("messages.usersTrust")} */}
          Users Trust Us
        </Box>
      </Heading>

      <Button w="70%" onClick={goToRegister}>
        {t("words.signUp")}
      </Button>

      <Box mt="5">
        <Text textAlign="center" fontSize="sm">
          {/* {t("messages.signUpReward")} */}
          Sign up now and get up to 100 USDT in rewards
        </Text>
      </Box>
    </Box>
  );
}
