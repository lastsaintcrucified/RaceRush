import React, { useState } from "react";
import styled from "styled-components/native";
import Animated, {
  BounceInLeft,
  BounceInRight,
  FlipInXUp,
} from "react-native-reanimated";
import { Points } from "../../../components/points.component";
import { DashedPath } from "../../../components/dashed-path.component";

const PathContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 70px;
`;

const AnimatedPath = Animated.createAnimatedComponent(PathContainer);

export const Map = ({ delay, data, checkPoint, index }) => {
  const logDetails = [data.Log[0], data.Log[data.Log.length - 1]];
  console.log("map");
  return (
    <AnimatedPath entering={BounceInLeft.duration(700)}>
      <Points
        animDuration={1000}
        delay={delay}
        data={data}
        checkPoint={checkPoint}
      />
      {index < data.countOfDays - 1 ? (
        <DashedPath
          animDuration={1500}
          delay={delay + 100}
          data={data}
          logDetails={logDetails}
          index={index}
        />
      ) : null}
    </AnimatedPath>
  );
};
