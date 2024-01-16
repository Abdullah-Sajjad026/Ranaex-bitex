import { goToLogin } from "@/utils/utils-functions";
import { Box, Button, HStack, Heading, Select, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function QuickDeposit() {
  const { t } = useTranslation();

  return (
    <Box px="4" my="8">
      <HStack spacing="2">
        <Heading variant="title">{t("words.quickDeposit")}</Heading>
        <Text fontSize="sm" color="brand.muted">
          {t("words.fastNSecure")}
        </Text>
      </HStack>
      <HStack mt="4" spacing="4">
        <Select placeholder="USDT" bg="#f5f5f5">
          <option value="option1">BTC</option>
          <option value="option2">ETH</option>
          <option value="option3">LTC</option>
        </Select>
        <Button onClick={goToLogin}>{t("words.deposit")}</Button>
      </HStack>
    </Box>
  );
}
