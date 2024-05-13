export const coincapUrl = (endpoint: string) =>
  `https://api.coincap.io/v2${endpoint}`;

export const coingeckoUrl = (endpoint: string) =>
  `https://api.coingecko.com/api/v3${endpoint}`;

// export const LOGIN_URL = "https://reapbitex.com/index.html#/login";
export const LOGIN_URL = "https://h5.ranaex.com/login";
export const REGISTER_URL = "https://h5.ranaex.com/regist";

export const goToLogin = () => {
  window.location.href = LOGIN_URL;
};

export const goToRegister = () => {
  window.location.href = REGISTER_URL;
};
