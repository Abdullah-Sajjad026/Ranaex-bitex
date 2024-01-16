import { Link as RouterLink } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";
import { LOGIN_URL } from "@/utils/utils-functions";

export default function SideDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image src="/logo-rounded.jpg" alt="logo" w="40px" />
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing="6" alignItems="start">
              <Link as={RouterLink} to="/" onClick={onClose}>
                Home
              </Link>
              <Link as={RouterLink} to="/features" onClick={onClose}>
                Features
              </Link>

              <Link as={RouterLink} to="/about" onClick={onClose}>
                About
              </Link>

              <Link as={RouterLink} to="/security-information" onClick={onClose}>
                Security Information
              </Link>

              <Link as={RouterLink} to="/audit-report" onClick={onClose}>
                Audit Report
              </Link>


              <Link href={LOGIN_URL}>Login</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
