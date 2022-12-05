import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { Button } from "react-native";
import styled from "styled-components/native";

const AnimatedPath = Animated.createAnimatedComponent(Path);
const SvgContainer = styled(Svg)`
  width: 100%;
  height: 50px;
`;

export const DashedPath = () => {
  const progress = useSharedValue(1);
  const config = {
    duration: 5000,
  };

  const animatedProps = useAnimatedProps(() => {
    // draw a circle
    const path = `
    M 5, 40
    L ${progress.value} 40
    `;
    return {
      d: path,
    };
  });

  useEffect(() => {
    progress.value = withTiming(100, config);
  }, []);
  return (
    <>
      <SvgContainer>
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
