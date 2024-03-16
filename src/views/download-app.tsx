import ImgStep1 from "@/assets/images/download-steps/step-1.png";
import ImgStep2 from "@/assets/images/download-steps/step-2.png";
import ImgStep3 from "@/assets/images/download-steps/step-3.png";
import {Box, Center, Stack, VStack} from "@chakra-ui/react";
import TitleBox from "@/components/title-box.tsx";


export default function ViewDownloadApp() {

  return (
    <div>
      <TitleBox title="Download the app"
                subtitle="Get started with the app by following the steps mentioned below."/>

      <Stack spacing={4} mt={8}>
        <VStack spacing={4}>
          <img src={ImgStep1} alt="Step 1"/>
          <h2>Step 1</h2>
        </VStack>

        <VStack spacing={4}>
          <img src={ImgStep2} alt="Step 2"/>
          <h2>Step 2</h2>
        </VStack>

        <VStack spacing={4}>
          <img src={ImgStep3} alt="Step 3"/>
          <h2>Step 3</h2>
        </VStack>
      </Stack>
    </div>
  )
}
