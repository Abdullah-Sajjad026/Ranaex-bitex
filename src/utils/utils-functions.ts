export const coincapUrl = (endpoint: string) =>
  `https://api.coincap.io/v2${endpoint}`;

export const coingeckoUrl = (endpoint: string) =>
  `https://api.coingecko.com/api/v3${endpoint}`;

// export const LOGIN_URL = "https://reapbitex.com/index.html#/login";
export const LOGIN_URL = "https://reapbitex.com/h5/#/pages/mine/register";
export const REGISTER_URL = "https://www.reapbitex.com/h5/#/pages/mine/register";

export const goToLogin = () => {
  window.location.href = LOGIN_URL;
};

export const goToRegister = () => {
  window.location.href = REGISTER_URL;
};
