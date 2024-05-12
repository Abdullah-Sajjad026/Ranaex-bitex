import { useTranslation } from "react-i18next";
import Markdown from "react-markdown";

import file from "@/data/user-agreement.md";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function ViewUserAgreement() {
  const { t } = useTranslation();

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <Box p="6">
      <Markdown>{markdown}</Markdown>
    </Box>
  );
}
