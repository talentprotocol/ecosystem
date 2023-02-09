import { envConf } from "@talentprotocol/conf";

export const parsePage = (rawContent: string) => {
  return rawContent
    .replaceAll("http://localhost:3000", envConf.LEGACY_WEB_DAPP_URL)
    .replaceAll("/packs", `${envConf.LEGACY_WEB_DAPP_URL}/packs`);
};
