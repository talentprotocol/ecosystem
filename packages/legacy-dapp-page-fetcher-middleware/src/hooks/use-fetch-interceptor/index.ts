import { envConf } from "@talentprotocol/conf";
import { useEffect } from "react";

export const useFetchInterceptor = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const { fetch: originalFetch } = window;
    const fetchCopy = window.fetch;
    window.fetch = async (...args) => {
      let [resource, config] = args as [string, any];
      if (resource[0] === "/") {
        resource = envConf.LEGACY_WEB_DAPP_URL + resource;
      }
      const response = await originalFetch(resource, config);
      return response;
    };
    return () => {
      window.fetch = fetchCopy;
    };
  }, []);
};
