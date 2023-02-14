import axios from "axios";
import { envConf } from "@talentprotocol/conf";
import { InMemoryPages } from "../in-memory-pages";
import { parsePage } from "../page-parser";

const memoizedPages = new InMemoryPages();

export const fetchPage = async (
  url: string,
  cookie: string,
  pageKey: string,
  isCacheable = false
) => {
  if (isCacheable && !!memoizedPages.get(pageKey)) {
    return { content: memoizedPages.get(pageKey), setCookies: [] };
  }
  try {
    const { data, headers } = await axios.get(
      `${envConf.LEGACY_WEB_DAPP_URL}/${url}`,
      {
        headers: { cookie },
      }
    );
    const content = parsePage(data);
    if (isCacheable) {
      memoizedPages.update(pageKey, content);
    }
    return { content, setCookies: headers["set-cookie"] || [] } as const;
  } catch (e) {
    console.error(e);
    return { content: "Error fetching page", setCookies: [] };
  }
};
