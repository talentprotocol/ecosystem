import {
  fetchPage,
  useFetchInterceptor,
} from "@talentprotocol/legacy-dapp-page-fetcher-middleware";

interface Props {
  page: string;
}

export async function getServerSideProps(context: any): Promise<{ props: Props }> {
  const page = await fetchPage("/portfolio", context.req.headers.cookie, "portfolio", false);
  return {
    props: { page },
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
