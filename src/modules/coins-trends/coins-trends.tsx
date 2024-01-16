import useAppSettings from "@/hooks/use-app-settings";
import { AssetData } from "@/types/types";
import { coincapUrl } from "@/utils/utils-functions";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  Center,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useMutation } from "react-query";
import { Link } from "react-router-dom";

export default function CoinsTrends({
  limit = 3,
  allowMore = true,
}: {
  limit?: number;
  allowMore?: boolean;
}) {
  const { t } = useTranslation();

  const appCurrency = useAppSettings().currency;

  const [currentOffset, setCurrentOffset] = useState(0);

  const getCoinsTrends = async ({
    ids,
    offset,
  }: {
    ids?: string;
    offset?: number;
  }) => {
    const response = await axios.get<{
      data: AssetData[];
    }>(coincapUrl("/assets"), {
      params: {
        id: ids,
        limit,
        offset,
      },
    });
    return response.data;
  };

  const { data, isError, isLoading, mutate } = useMutation(getCoinsTrends, {
    // onSuccess: (data) => {
    //   setTrendsData((prev) => [...prev, ...data.data]);
    // },
  });

  useEffect(() => {
    mutate({
      offset: currentOffset,
    });
  }, [mutate, currentOffset]);

  return isLoading ? (
    <Center>
      <Spinner />
    </Center>
  ) : isError ? (
    <Alert status="error">
      <AlertTitle>{t("words.error")} </AlertTitle>

      <AlertDescription>
        {t("messages.errorFetchingData")}

        <Button
          onClick={() =>
            mutate({
              offset: currentOffset,
            })
          }
        >
          {t("words.retry")}
        </Button>
      </AlertDescription>
    </Alert>
  ) : (
    <Box>
      {data?.data && (
        <TableContainer p="0">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th pl="0">{t("words.pair")}</Th>
                <Th isNumeric>{t("words.price")}</Th>
                <Th isNumeric pr="0">
                  {t("words.change24H")}
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.data.map((item) => (
                <Tr key={item.id}>
                  <Link to={`/coin/${item.id}`}>
                    <Td pl="0">
                      <VStack alignItems="start" spacing="2">
                        <Text>{item.symbol}</Text>
                        <Text fontSize="xs" color="brand.muted">
                          {item.name}
                        </Text>
                      </VStack>
                    </Td>
                  </Link>
                  <Td isNumeric>
                    {appCurrency.symbol}
                    {Number(item.priceUsd).toFixed(2)}
                  </Td>
                  <Td
                    pr="0"
                    isNumeric
                    color={
                      Number(item.changePercent24Hr) > 0
                        ? "brand.green"
                        : "red.500"
                    }
                  >
                    {Number(item.changePercent24Hr).toFixed(2)}%
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          {allowMore && (
            <Center width="full">
              <Button
                variant="ghost"
                onClick={() => {
                  setCurrentOffset(currentOffset + 3);
                }}
                color="brand.blue"
                fontSize="sm"
              >
                {t("words.loadMore")}
              </Button>
            </Center>
          )}
        </TableContainer>
      )}
    </Box>
  );
}
