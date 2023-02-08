import { Switch } from "@talentprotocol/design-system";
import { useState } from "react";

export default function Web() {
  return (
    <div>
      <Switch
        isChecked={true}
        state="disabled"
      />
    </div>
  );
}
