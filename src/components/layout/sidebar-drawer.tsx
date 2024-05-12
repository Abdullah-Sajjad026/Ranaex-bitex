import { LOGIN_URL } from "@/utils/utils-functions";
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
import { Link as RouterLink } from "react-router-dom";

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
            <Image src="/app-icon.png" alt="logo" w="40px" />
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing="6" alignItems="start">
              <Link
                as={RouterLink}
                to="/"
                onClick={onClose}
                color="brand.black"
              >
                Home
              </Link>
              <Link
                as={RouterLink}
                to="/features"
                onClick={onClose}
                color="brand.black"
              >
                Features
              </Link>

              <Link
                as={RouterLink}
                to="/about"
                onClick={onClose}
                color="brand.black"
              >
                About
              </Link>

              <Link
                as={RouterLink}
                to="/security-information"
                onClick={onClose}
                color="brand.black"
              >
                Security Information
              </Link>

              <Link
                as={RouterLink}
                to="/audit-report"
                onClick={onClose}
                color="brand.black"
              >
                Audit Report
              </Link>

              <Link
                as={RouterLink}
                to="/user-agreement"
                onClick={onClose}
                color="brand.black"
              >
                User Agreement
              </Link>

              <Link href={LOGIN_URL} color="brand.black">
                Login
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
