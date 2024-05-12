import { Box, Button, Text } from "@chakra-ui/react";
import BrandCTA from "./components/brand-cta";

import CoinsTrends from "@/modules/coins-trends/coins-trends";
import { goToRegister } from "@/utils/utils-functions";
import { useTranslation } from "react-i18next";
import FeatureAgileTrade from "./components/feature-agile-trade";

export default function ViewHome() {
  const { t } = useTranslation();

  return (
    <>
      <BrandCTA />
      {/* <QuickDeposit /> */}

      <Box my="14" px="4">
        <CoinsTrends />
      </Box>

      <FeatureAgileTrade />

      <Box
        mt="14"
        px="4"
        py="12"
        backgroundColor="brand.light"
        gap="1rem"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Text fontSize="1.4rem">
          For Verified Users
          <br /> Get up to{" "}
          <Box display="inline" color="brand.primary">
            100 USDT
          </Box>{" "}
          in rewards
        </Text>
        <Button borderTopLeftRadius={0} onClick={goToRegister}>
          {t("words.signUp")}
        </Button>
      </Box>
    </>
  );
}
