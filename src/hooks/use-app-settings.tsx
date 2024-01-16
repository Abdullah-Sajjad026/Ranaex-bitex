import { AppCurrency } from "@/types/types";
import { create } from "zustand";

type HookData = {
  currency: AppCurrency;
  appLang: string;
  setCurrency: (currency: AppCurrency) => void;
  setAppLang: (lang: string) => void;
};

const useAppSettings = create<HookData>((set) => ({
  currency: {
    name: "USD",
    symbol: "$",
  },
  appLang: localStorage.getItem("appLang") || "en",
  setCurrency: (currency) => set({ currency }),
  setAppLang: (appLang) => set({ appLang }),
}));

export default useAppSettings;
