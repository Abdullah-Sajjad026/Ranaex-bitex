import { useState } from "react";
import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import Select from "react-select";

import i18n from "@/i18n";
import useAppSettings from "@/hooks/use-app-settings";

import FlagUS from "@/assets/images/flags/flag-us.png";
import FlagChina from "@/assets/images/flags/flag-china.png";
import FlagJapan from "@/assets/images/flags/flag-japan.png";
import FlagKorea from "@/assets/images/flags/flag-korea.png";
import FlagGermany from "@/assets/images/flags/flag-german.png";
import FlagFrance from "@/assets/images/flags/flag-france.png";

const labelsMap = {
  en: (
    <HStack alignItems="center" justifyContent="flex-start">
      <Image src={FlagUS} alt="flag us" width="9" />
      <Text>English</Text>
    </HStack>
  ),
  zh: (
    <HStack alignItems="center" justifyContent="flex-start">
      <Image src={FlagChina} alt="flag china" width="9" />
      <Text>繁體中文</Text>
    </HStack>
  ),
  ja: (
    <HStack alignItems="center" justifyContent="flex-start">
      <Image src={FlagJapan} alt="flag japan" width="9" />
      <Text>にほんご</Text>
    </HStack>
  ),
  ko: (
    <HStack alignItems="center" justifyContent="flex-start">
      <Image src={FlagKorea} alt="flag korea" width="9" />
      <Text>한국어</Text>
    </HStack>
  ),
  de: (
    <HStack alignItems="center" justifyContent="flex-start">
      <Image src={FlagGermany} alt="flag germany" width="9" />
      <Text>Deutsch</Text>
    </HStack>
  ),
  fr: (
    <HStack alignItems="center" justifyContent="flex-start">
      <Image src={FlagFrance} alt="flag france" width="9" />
      <Text>Français</Text>
    </HStack>
  ),
};

export default function ConfigSelectors() {
  const { setAppLang } = useAppSettings();

  const [selectedLanguage, setSelectedLanguage] = useState({
    value: i18n.language,
    label: labelsMap[i18n.language as keyof typeof labelsMap],
  }); // i18n.language contains the language assigned to lng in i18n.js file.

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chooseLanguage = (val: any) => {
    i18n.changeLanguage(val.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(val);
    localStorage.setItem("appLang", val.value);
    setAppLang(val.value);
  };

  const options = [
    { value: "en", label: labelsMap.en },
    { value: "zh", label: labelsMap.zh },
    { value: "ja", label: labelsMap.ja },
    { value: "ko", label: labelsMap.ko },
    { value: "de", label: labelsMap.de },
    { value: "fr", label: labelsMap.fr },
  ];

  return (
    <HStack spacing="4" p="4">
      <Box flexGrow={1}>
        <Heading fontSize="sm" mb="2" fontWeight="normal">
          Language
        </Heading>
        <Select
          // bg="brand.light"
          // styles={{
          //   background: "brand.light",
          // }}
          options={options}
          value={selectedLanguage}
          onChange={chooseLanguage}
        />
        {/* <option value="en">
              <Image src={FlagUS} alt="flag us" mr="2" width="20" height="20" />
              English
          </option>
          <option value="zh">繁體中文</option>
          <option value="ja">にほんご</option>
          <option value="ko">한국어</option>
          <option value="de">Deutsch</option>
          <option value="fr">Français</option>
        </Select> */}
      </Box>
      <Box flexGrow={1}>
        <Heading fontSize="sm" mb="2" fontWeight="normal">
          Currency
        </Heading>

        <Select placeholder="USD ($)" />
      </Box>
    </HStack>
  );
}
