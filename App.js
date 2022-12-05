import React from "react";
import { SafeArea } from "./src/components/safe-area.component";
import { Map } from "./src/features/path/component/map.component";

export default function App() {
  return (
    <SafeArea>
      <Map />
    </SafeArea>
  );
}
