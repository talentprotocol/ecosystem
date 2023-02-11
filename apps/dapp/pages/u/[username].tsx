import { NextApiRequest, NextApiResponse } from "next";
import {
  fetchPage,
  useFetchInterceptor,
} from "@talentprotocol/legacy-dapp-page-fetcher-middleware";

interface Props {
  page: string;
}

export async function getServerSideProps(context: { req: NextApiRequest, res: NextApiResponse, params: any }): Promise<{ props: Props }> {
  const { req, res, params } = context;
  const { content, setCookies } = await fetchPage(`/u/${params.username}`, req.headers.cookie || "", "user-page", false);
  const parsedCookies = setCookies.map(cookie => {
    return cookie + "; Domain=.talentprotocol.com";
  });
  res.setHeader('Set-Cookie', parsedCookies);
  return {
    props: { page: content },
  };
}

export default function Web(props: Props) {
  useFetchInterceptor();
  return (
    <section
      dangerouslySetInnerHTML={{ __html: props.page }}
      style={{ width: "100%", height: "100vh" }}
    />
  );
}
