import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import AppStoreCTA from "@/assets/images/appstore-cta.svg";
import GooglePlayCTA from "@/assets/images/playstore-cta.svg";
import TestFlightCTA from "@/assets/images/testflight-cta.svg";

export default function DownloadCTAs() {
  const downloads = [
    {
      icon: AppStoreCTA,
      href: "/download-app",
    },
    {
      icon: GooglePlayCTA,
      href: "/download-app",
    },
    {
      icon: TestFlightCTA,
      href: "/download-app",
    },
  ];

  return (
    <Flex
      gap="4"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      maxWidth="90%"
      mx="auto"
    >
      {downloads.map((download, index) => {
        return (
          <Box
            key={index}
            as={Link}
            to={download.href || ""}
            target={download.href ? "_blank" : ""}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Image
              src={download.icon}
              alt="Download App"
              style={{
                width: "auto",
                height: "50px",
              }}
            />
          </Box>
        );
      })}
    </Flex>
  );
}
