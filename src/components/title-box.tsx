import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function TitleBox({
  title,
  subtitle,
  ...props
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <Box {...props}>
      <Heading variant="title" mb="2">
        {title}
      </Heading>
      <Text color="brand.muted" fontSize="sm">
        {subtitle}
      </Text>
    </Box>
  );
}
