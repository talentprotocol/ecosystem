import { Button } from "@talentprotocol/design-system";
import { envConf } from "@talentprotocol/conf";

export default function Web() {
  return (
    <div>
      <p>{JSON.stringify(envConf)}</p>
      <Button />
    </div>
  );
}
