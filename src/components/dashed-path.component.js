import React, { useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  withDelay,
  useAnimatedProps,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { Button } from "react-native";
import styled from "styled-components/native";

const AnimatedPath = Animated.createAnimatedComponent(Path);
const SvgContainer = styled(Svg)`
  width: 100px;
  height: 50px;
`;

export const DashedPath = ({ animDuration, startAnim, delay }) => {
  const progress = useSharedValue(0);

  const config = {
    duration: animDuration,
  };

  const animatedProps = useAnimatedProps(() => {
    // draw a circle
    const path = `
    M 0, 40
    L ${progress.value} 40
    `;
    return {
      d: path,
    };
  });

  const anim = () => {
    if (startAnim) {
      progress.value = withDelay(delay, withTiming(100, config));
    } else {
      progress.value = withDelay(delay, withTiming(0, config));
    }
  };
  anim();
  return (
    <>
      <SvgContainer viewBox="10 15 50 50">
        <AnimatedPath
          animatedProps={animatedProps}
          stroke="#83CEF8"
          strokeWidth={6}
          strokeLinecap="round"
          strokeDasharray={[0, 10]}
        />
      </SvgContainer>
      {/* <Button
        title="toggle"
        onPress={() => {
          progress.value = withTiming(100, config);
        }}
      />
      <Button
        title="return"
        onPress={() => {
          progress.value = withTiming(0, config);
        }}
      /> */}
    </>
  );
};
