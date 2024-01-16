// import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  // Breadcrumb,
  // BreadcrumbItem,
  // BreadcrumbLink,
  // BreadcrumbSeparator,
  HStack,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";

import ImgCoin from "@/assets/images/icons/btc.svg";

export default function CoinInfo() {
  const coin = "BTC";

  return (
    <Box px="4" py="6">
      {/* <Box mt="4">
        <HStack spacing="2">
          <Image src={ImgCoin} alt="coin" w="30px" />
          <Box as="span">
            {coin}
            Price
          </Box>
        </HStack>

        <Text fontWeight="bold" fontSize="xl" mt="1">
          $ 20, 000
        </Text>

        <HStack spacing="2">
          <Text color="brand.green">+ 240</Text>

          <Text color="red">-2%</Text>
        </HStack>
      </Box>

      <Box mt="4">
        <Select bgColor="brand.light" value="1d">
          <option value="1d">1D</option>
          <option value="1w">1W</option>
          <option value="1m">1M</option>
        </Select>
      </Box> */}
    </Box>
  );
}
