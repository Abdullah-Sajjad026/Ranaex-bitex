import metaData from "@/data/metadata";
import { Box, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  const socials = [
    {
      name: "Twitter",
      url: metaData.socialLinks.twitter,
      icon: IconBrandTwitter,
    },

    {
      name: "Instagram",
      url: metaData.socialLinks.instagram,
      icon: IconBrandInstagram,
    },
  ];

  return (
    <Box as="footer" bgColor="brand.black" px="4" py="6" color="white">
      {/* Links */}
      <VStack spacing="6" alignItems="start">
        <Link as={RouterLink} to="/" color="white">
          {t("words.home")}
        </Link>

        <Link as={RouterLink} to="/about" color="white">
          {t("words.aboutUs")}
        </Link>

        {/* <Link as={RouterLink} to="/features" color="white">
          {t("words.features")}
        </Link> */}

        <Link as={RouterLink} to="/security-information" color="white">
          {t("words.securityInformation")}
        </Link>

        <Link as={RouterLink} to="/audit-report" color="white">
          {t("words.auditReport")}
        </Link>

        <Link as={RouterLink} to="/user-agreement" color="white">
          {t("words.userAgreement")}
        </Link>
      </VStack>

      <HStack spacing="4" mt="4" justifyContent="center">
        {/* Social Links */}
        {socials.map((social, idx) => (
          <Link
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <social.icon width="25" />
          </Link>
        ))}
      </HStack>

      <Box
        borderTop={1}
        borderColor="brand.gray"
        w="100%"
        textAlign="center"
        mt="4"
      >
        {/* CopyRight */}
        <Text fontSize="xs">
          © {new Date().getFullYear()} {t("messages.copyright")}
        </Text>
      </Box>
    </Box>
  );
}
