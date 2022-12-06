import React from "react";
import { SafeArea } from "./src/components/safe-area.component";

import { data, checkPoints } from "./src/services/mock/userData";

import { Race } from "./src/features/race/component/race.component";
export default function App() {
  return (
    <SafeArea>
      {data.map((racer, index) => {
        return <Race key={index} data={racer} checkPoints={checkPoints} />;
      })}
    </SafeArea>
  );
}
