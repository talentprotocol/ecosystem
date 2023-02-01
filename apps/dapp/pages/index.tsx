import {
  fetchPage,
  useFetchInterceptor,
} from "@talentprotocol/legacy-dapp-page-fetcher-middleware";

interface Props {
  page: string;
}

export async function getServerSideProps(): Promise<{props: Props}> {
  const page = await fetchPage("/", "", "homepage", true);
  return {
    props: { page },
  };
}

export default function Web(props: Props) {
  useFetchInterceptor();
  return (
    <div>
      <section
        dangerouslySetInnerHTML={{ __html: props.page }}
        style={{ width: "100%", height: "100vh" }}
      />
    </div>
  );
}
