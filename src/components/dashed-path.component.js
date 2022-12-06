import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  withDelay,
  useAnimatedProps,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import styled from "styled-components/native";

import { LogBox } from "./logBox.component";

const AnimatedPath = Animated.createAnimatedComponent(Path);
const Container = styled.View`
  flex-direction: column;
  margin-top: -60px;
`;
const SvgContainer = styled(Svg)`
  width: 100px;
  height: 50px;
`;
const LogBoxContainer = styled(LogBox)`
  position: absolute;
  z-index: 999;
`;

export const DashedPath = ({ animDuration, delay, data, index }) => {
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

  useEffect(() => {
    progress.value = withDelay(delay, withTiming(100, config));
  }, []);

  return (
    <Container>
      <LogBoxContainer
        animDuration={500}
        delay={delay}
        data={data}
        index={index}
      />
      <SvgContainer viewBox="10 15 50 50">
        <AnimatedPath
          animatedProps={animatedProps}
          stroke="#ba68c8"
          strokeWidth={4}
          strokeLinecap="round"
          strokeDasharray={[0, 7]}
        />
      </SvgContainer>
    </Container>
  );
};
