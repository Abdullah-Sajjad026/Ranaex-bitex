import {Box, Grid, GridItem, Image, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

import AppleIcon from "@/assets/images/icons/app-store.svg";
import Android from "@/assets/images/icons/android.svg";
import MobileIcon from "@/assets/images/icons/device-mobile.svg";
import DownloadIcon from "@/assets/images/icons/download.svg";
import metaData from "@/data/metadata";

export default function DownloadCTAs({
                                       mode = "light",
                                     }: {
  mode?: "light" | "dark";
}) {
  const downloads = [
    {
      id: 1,
      icon: MobileIcon,
      title: "Mobile App",
      href: metaData.storesLinks.mobile
    },
    {
      id: 2,
      icon: DownloadIcon,
      title: "Download",
      href: metaData.storesLinks.general
    },
    {
      id: 3,
      icon: AppleIcon,
      title: "App Store",
      link: "/download-app",
    },
    {
      id: 4,
      icon: Android,
      title: "Android",
      // link: metaData.storesLinks.googlePlay,
      link: "/download-app",
    },
  ];

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      {downloads.map((download) => {

          const Component = download.href ? "a" : Link;

          return (
            <GridItem
              key={download.id}
              p="4"
              bgColor={mode === "light" ? "brand.light" : "brand.black2"}
              borderRadius="lg"
              cursor="pointer"
            >
              <Component
                href={download.href}
                to={download.link || ""}
                target={download.href ? "_blank" : ""}
                // take to top of page if Link is clicked
                onClick={() => window.scrollTo(0, 0)}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  color={mode === "light" ? "brand.black2" : "brand.light"}
                  gap="2"
                >
                  <Image
                    src={download.icon}
                    alt={download.title}
                    // Making image white on dark mode
                    filter={mode === "light" ? "none" : "invert(1)"}
                    w="6"
                  />
                  <Text>{download.title}</Text>
                </Box>
              </Component>
            </GridItem>
          )
        }
      )}
    </Grid>
  );
}
