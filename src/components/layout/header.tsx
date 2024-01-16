import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  IconButton,
  Image,
  LinkBox,
  LinkOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { IconMenu } from "@tabler/icons-react";
import SideDrawer from "./sidebar-drawer";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      bgColor="#FAFAFA"
      p="4"
      display="flex"
      justifyContent="space-between"
    >
      <LinkBox>
        <LinkOverlay as={RouterLink} to="/">
          <Image src="/logo.jpg" alt="logo" w="140px" />
        </LinkOverlay>
      </LinkBox>

      <IconButton
        size="sm"
        variant="outline"
        icon={<IconMenu width="18" />}
        aria-label="Menu"
        onClick={onOpen}
      />

      <SideDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
