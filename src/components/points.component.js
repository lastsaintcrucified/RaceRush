import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import { Button } from "react-native";
import styled from "styled-components/native";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const SvgContainer = styled(Svg)`
  width: 40px;
  height: 40px;
  border: 2px solid red;
`;
export const Points = () => {
  const radius = useSharedValue(0);
  const config = {
    duration: 1000,
  };
  const animatedProps = useAnimatedProps(() => {
    // draw a circle
    return {
      cx: radius.value,
      cy: radius.value,
      r: radius.value,
    };
  });
  //   useEffect(() => {
  //     radius.value = withTiming(20, config);
  //   }, []);

  // attach animated props to an SVG path using animatedProps
  return (
    <>
      <SvgContainer viewBox="0 0 100 100">
        <AnimatedCircle animatedProps={animatedProps} fill="#ECE7E7" />
      </SvgContainer>
      <Button
        title="toggle"
        onPress={() => {
          radius.value = withTiming(20, config);
        }}
      />
      <Button
        title="return"
        onPress={() => {
          radius.value = withTiming(0, config);
        }}
      />
    </>
  );
};
