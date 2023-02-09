import { NextApiRequest, NextApiResponse } from "next";
import {
  fetchPage,
  useFetchInterceptor,
} from "@talentprotocol/legacy-dapp-page-fetcher-middleware";

interface Props {
  page: string;
}

export async function getServerSideProps(context: { req: NextApiRequest, res: NextApiResponse}): Promise<{ props: Props }> {
  const { req, res } = context;
  const { content, setCookies } = await fetchPage("/", req.headers.cookie || "", "homepage", false);
  res.setHeader('Set-Cookie', setCookies);
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
