import { envConf } from "@talentprotocol/conf";

export default function Web() {
  return (
    <div>
      <p>{JSON.stringify(envConf)}</p>
    </div>
  );
}
