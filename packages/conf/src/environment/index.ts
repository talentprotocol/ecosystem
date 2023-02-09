import { EnvironmentConfInterface, ENVIRONMENT } from "./types";

export const envConf: EnvironmentConfInterface =
  process.env.ENVIRONMENT === ENVIRONMENT.DEV
    ? {
        LEGACY_WEB_DAPP_URL: "https://dev.talentprotocol.com",
      }
    : {
        LEGACY_WEB_DAPP_URL: "https://beta.talentprotocol.com",
      };
