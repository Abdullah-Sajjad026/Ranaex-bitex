import { Grid, GridItem, Image, Text } from "@chakra-ui/react";

import AppleIcon from "@/assets/images/app-store.svg";
import Android from "@/assets/images/android.svg";
import TestFlight from "@/assets/images/testflight.svg";
import metaData from "@/data/metadata";

export default function DownloadCTAs({
  mode = "light",
}: {
  mode?: "light" | "dark";
}) {
  const downloads = [
    {
      id: 1,
      icon: AppleIcon,
      title: "App Store",
      link: metaData.storesLinks.appStore,
    },
    // {
    //   id: 2,
    //   icon: GooglePlay,
    //   title: "Google Play",
    //   link: metaData.storesLinks.googlePlay
    // },
    {
      id: 3,
      icon: Android,
      title: "Android",
      link: metaData.storesLinks.googlePlay,
    },
    {
      id: 4,
      icon: TestFlight,
      title: "TestFlight",
      link: metaData.storesLinks.testFlight,
    },
  ];

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      {downloads.map((download) => (
        <GridItem
          key={download.id}
          p="4"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color={mode === "light" ? "brand.black2" : "brand.light"}
          bgColor={mode === "light" ? "brand.light" : "brand.black2"}
          borderRadius="lg"
          gap="2"
          onClick={() => window.open(download.link, "_blank")}
        >
          <Image
            src={download.icon}
            alt={download.title}
            // Making image white on dark mode
            filter={mode === "light" ? "none" : "invert(1)"}
          />
          <Text>{download.title}</Text>
        </GridItem>
      ))}
    </Grid>
  );
}
