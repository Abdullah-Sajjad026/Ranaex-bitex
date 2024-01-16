/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
  Center,
  Spinner,
  AlertTitle,
  AlertDescription,
  Alert,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { coingeckoUrl, goToLogin } from "@/utils/utils-functions";
import axios from "axios";

import ImgTwinkle from "@/assets/images/twinkle.svg";
import { useEffect, useState } from "react";
import useAppSettings from "@/hooks/use-app-settings";
import ReactApexChart from "react-apexcharts";
import { useTranslation } from "react-i18next";

type Intervals = "1d" | "1w" | "1m" | "1y";

const getIntervalKey = (interval: Intervals) =>
  ({
    "1d": {
      currencyPriceChangePercentageKey:
        "price_change_percentage_24h_in_currency",
    },
    "1w": {
      currencyPriceChangePercentageKey:
        "price_change_percentage_7d_in_currency",
    },
    "1m": {
      currencyPriceChangePercentageKey:
        "price_change_percentage_30d_in_currency",
    },
    "1y": {
      currencyPriceChangePercentageKey:
        "price_change_percentage_1y_in_currency",
    },
  }[interval]);

export default function ViewTradeFiat() {
  const { t } = useTranslation();

  const { currency: appCurrency, appLang } = useAppSettings();
  const coinId = useParams().coin;

  const [chosenInterval, setChosenInterval] = useState<Intervals>("1d");
  const [changedPercentage, setChangedPercentage] = useState(0);
  const [changedPrice, setChangedPrice] = useState(0);

  const calculateAndSetValues = (data: any) => {
    const { currencyPriceChangePercentageKey } = getIntervalKey(chosenInterval);

    const percentageChange =
      data?.market_data?.[currencyPriceChangePercentageKey][
        appCurrency.name.toLowerCase()
      ];
    setChangedPercentage(percentageChange);

    // Calculate price based on current price and percentage change

    const currentPrice =
      data?.market_data?.current_price[appCurrency.name.toLowerCase()];

    const priceChange = currentPrice * (percentageChange / 100);
    setChangedPrice(priceChange);
  };

  const { data, isSuccess, isLoading, isError, error, mutate } = useMutation(
    async () => {
      const response = await axios.get(coingeckoUrl(`/coins/${coinId}`), {
        params: {
          localization: true,
          tickers: false,
          market_data: true,
          community_data: false,
          developer_data: false,
          sparkline: false,
        },
      });

      return response.data;
    },
    {
      onSuccess: (data) => {
        calculateAndSetValues(data);
      },
    }
  );

  const {
    data: coinHistoryData,
    isLoading: isCoinHistoryLoading,
    isError: isCoinHistoryError,
    error: coinHistoryError,
  } = useQuery(
    ["coinHistory", coinId, chosenInterval],
    async () => {
      const response = await axios.get(
        coingeckoUrl(`/coins/${coinId}/market_chart`),
        {
          params: {
            vs_currency: appCurrency.name.toLowerCase(),
            days: {
              "1d": 1,
              "1w": 7,
              "1m": 30,
              "1y": 365,
            }[chosenInterval],
          },
        }
      );

      return (
        response.data?.prices
          // ?.slice(0, 10)
          ?.map(([date, price]: [number, number]) => ({
            date,
            price,
          }))
      );
    },
    {
      enabled: !!coinId,
    }
  );

  useEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    if (isSuccess && data) {
      calculateAndSetValues(data);
    }
  }, [chosenInterval, isSuccess, data]);

  return (
    <Box px="4">
      <Breadcrumb separator=">" py="2">
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/">
            {t("words.home")}
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/trade">
            {t("words.trade")}
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink>{coinId?.toUpperCase()}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {isLoading ? (
        <Center my="4">
          <Spinner />
        </Center>
      ) : isError ? (
        <Alert status="error" alignItems="start" borderRadius="lg" my="4">
          <AlertTitle>{t("words.error")}</AlertTitle>
          <AlertDescription>
            {/* @ts-ignore */}
            {error.message || t("messages.somethingWrong")}

            <Button onClick={() => mutate()} mt="2">
              Try Again
            </Button>
          </AlertDescription>
        </Alert>
      ) : (
        isSuccess &&
        data && (
          <>
            <Box my="6">
              <Box>
                <HStack spacing="2">
                  <Image src={data?.image?.large} alt="coin" w="30px" />
                  <Box as="span">
                    {data.name}
                    <Text
                      fontSize="xs"
                      color="brand.muted"
                      display="inline-block"
                      mx="2"
                    >
                      ({data.symbol})
                    </Text>
                    {t("words.price")}
                  </Box>
                </HStack>

                <Text fontWeight="bold" fontSize="xl" mt="1">
                  {appCurrency.symbol}{" "}
                  {
                    data?.market_data?.current_price[
                      appCurrency.name.toLowerCase()
                    ]
                  }
                </Text>

                <HStack spacing="2">
                  <Text color={changedPercentage > 0 ? "brand.green" : "red"}>
                    {changedPercentage.toFixed(2)}%
                  </Text>

                  <Text color={changedPrice > 0 ? "brand.green" : "red"}>
                    {/* $2 */}
                    {appCurrency.symbol} {changedPrice.toFixed(2)}
                  </Text>
                </HStack>
              </Box>

              <Box mt="4">
                <Select
                  bgColor="brand.light"
                  value={chosenInterval}
                  onChange={(e) =>
                    setChosenInterval(e.target.value as Intervals)
                  }
                >
                  <option value="1d">1D</option>
                  <option value="1w">1W</option>
                  <option value="1m">1M</option>
                </Select>
              </Box>

              {isCoinHistoryLoading ? (
                <Center my="4">
                  <Spinner />
                </Center>
              ) : isCoinHistoryError ? (
                <></>
              ) : (
                // Implementing ApexCharts
                <Box my="6">
                  <ReactApexChart
                    options={{
                      chart: {
                        id: "basic-line",
                      },
                      xaxis: {
                        type: "datetime",
                      },
                      yaxis: {
                        labels: {
                          formatter: (value) => {
                            return appCurrency.symbol + value?.toFixed(2);
                          },
                        },
                      },
                      tooltip: {
                        x: {
                          format: "dd MMM yyyy",
                        },
                      },
                    }}
                    series={[
                      {
                        name: "Price",
                        data: coinHistoryData?.map(
                          ({
                            date,
                            price,
                          }: {
                            date: number;
                            price: number;
                          }) => ({
                            x: date,
                            y: price,
                          })
                        ),
                      },
                    ]}
                    type="line"
                    height={350}
                  />
                </Box>
              )}
            </Box>
            <Box py="6">
              <Heading variant="title">{t("words.convert")}</Heading>

              <HStack justifyContent="space-between" spacing="2">
                <Text>{t("messages.quicklyConvert")}</Text>
                <Image src={ImgTwinkle} alt="twinkle" />
              </HStack>

              <Text color="brand.blue" mb="2">
                {t("words.buyCrypto")}
              </Text>
              <Button width="full" onClick={goToLogin}>
                {t("words.buy")}
              </Button>

              <Box my="4">
                <Heading variant="title">
                  {t("words.projectDescription")}
                </Heading>
                <Text my="2" fontSize="md">
                  {data?.name}
                </Text>
                <Text
                  fontSize="sm"
                  dangerouslySetInnerHTML={{
                    // if appLang description available then okay or fallback to en
                    __html:
                      data?.description?.[appLang] || data?.description?.en,
                  }}
                />
              </Box>
            </Box>
          </>
        )
      )}
    </Box>
  );
}
