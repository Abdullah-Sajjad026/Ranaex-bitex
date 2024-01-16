import { Box, Center, Heading, Image } from "@chakra-ui/react";

import ImgUSSMBCertified from "@/assets/images/usmsb-licensed.jpg";
import ImgAISCCertified from "@/assets/images/asic-licensed.jpg"
import { useTranslation } from "react-i18next";

export default function QualityExchange() {
  const { t } = useTranslation();

  return (
    <Box bgColor="brand.black">
      <Box
        py="6"
        px="4"
        bgImage="url('/pattern.png')"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
      >
        <Box display="flex" justifyContent="center">
          <Image src="/logo-square.jpg" alt="app icon" w="60px" />
        </Box>
        <Heading
          variant="title"
          fontSize="2xl"
          lineHeight="taller"
          textAlign="center"
          mt="4"
          color="white"
        >
          {t("pages.features.worldClassExchange")}
        </Heading>
      </Box>

      <Center>
        <Image src={ImgUSSMBCertified} alt="app landing" width="full" />
      </Center>

        <Center>
            <Image src={ImgAISCCertified} alt="app landing" width="full" />
        </Center>
    </Box>
  );
}
