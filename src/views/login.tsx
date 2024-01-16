import { useEffect } from "react";
import {LOGIN_URL} from "@/utils/utils-functions.ts";

export default function ViewLogin() {
  useEffect(() => {
    window.location.href = LOGIN_URL;
  }, []);
  return null;
}
