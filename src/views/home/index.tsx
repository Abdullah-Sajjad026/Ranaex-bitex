import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import BrandCTA from "./components/brand-cta";
import QuickDeposit from "./components/quick-deposit";

import InviteComissionBanner from "@/assets/images/invite-comission-banner.jpeg";
import FeatureAgileTrade from "./components/feature-agile-trade";
import TitleBox from "@/components/title-box";
import CoinsTrends from "@/modules/coins-trends/coins-trends";
import { LOGIN_URL, goToRegister } from "@/utils/utils-functions";
import { useTranslation } from "react-i18next";

export default function ViewHome() {
  const { t } = useTranslation();

  return (
    <>
      <BrandCTA />
      <QuickDeposit />

      <Box my="8" px="4">
        <Heading variant="title" mb="3">
          {t("words.marketTrends")}
        </Heading>

        <Box>
          <CoinsTrends />
        </Box>
      </Box>

      <Box px="4" my="8">
        {/*<Heading variant="title" mb="3">*/}
        {/*  {t("words.userGuide")}*/}
        {/*</Heading>*/}
        <Box display="flex" justifyContent="center">
          <Image src={InviteComissionBanner} alt="purchase doodle" />
        </Box>
        <Button variant="unstyled" fontSize="sm">
          {t("words.buyCrypto")}
        </Button>
      </Box>

      <FeatureAgileTrade />

      <Box my="6" px="4">
        <TitleBox
          title={t("words.signUp")}
          subtitle={t("pages.home.startTrading")}
        />
        <Box mt="4">
          <Input placeholder={t("words.email")} mb="2" bgColor="brand.light" />
          <Button w="full" onClick={goToRegister}>
            {t("words.signUp")}
          </Button>

          <Box mt="5">
            <Text textAlign="center" fontSize="sm">
              {t("messages.alreadyAccount")}{" "}
              <Link href={LOGIN_URL}>{t("messages.gotoLogin")}</Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
