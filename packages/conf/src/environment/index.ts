import { EnvironmentConfInterface, ENVIRONMENT } from "./types";

export const envConf: EnvironmentConfInterface =
  process.env.ENVIRONMENT === ENVIRONMENT.DEV
    ? {
        LEGACY_WEB_DAPP_URL: "http://local.talentprotocol.com:3000",
      }
    : {
        LEGACY_WEB_DAPP_URL: "https://beta.talentprotocol.com",
      };
