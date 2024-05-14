import { useTranslation } from "react-i18next";

import CertificateUSSMB from "@/assets/images/ussmb-certificate.jpeg";
import { Box, Image } from "@chakra-ui/react";
import Markdown from "react-markdown";

import file from "@/data/about-us.md";
import { useEffect, useState } from "react";

export default function ViewAbout() {
  const { t } = useTranslation();

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <Box p="6">
      <Image
        src={CertificateUSSMB}
        alt="certificate"
        width="full"
        position="relative"
        my="4"
      />
      <Markdown>{markdown}</Markdown>
    </Box>
  );
}
