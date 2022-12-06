import React from "react";
import Animated, {
  BounceInLeft,
  BounceInRight,
  FlipInXUp,
} from "react-native-reanimated";
import { data, checkPoints } from "./src/services/mock/userData";
import Race from "./src/features/race/component/race.component";

import {
  AppContainer,
  AppCover,
  TextStyled1,
  TextStyled2,
} from "./src/components/app.styled.component";
import { LogBox } from "react-native";

const AnimatedText1 = Animated.createAnimatedComponent(TextStyled1);
const AnimatedText2 = Animated.createAnimatedComponent(TextStyled2);
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
export default function App() {
  return (
    <AppContainer>
      <AppCover />
      <AnimatedText1 entering={FlipInXUp.duration(700)}>
        Race Rush
      </AnimatedText1>
      <AnimatedText2 entering={FlipInXUp.duration(700).delay(700)}>
        Multi Day Marathon
      </AnimatedText2>
      {data.map((racer, index) => {
        return <Race key={index} data={racer} checkPoints={checkPoints} />;
      })}
    </AppContainer>
  );
}
