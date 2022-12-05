import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  withDelay,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import { Button } from "react-native";
import styled from "styled-components/native";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const SvgContainer = styled(Svg)`
  width: 40px;
  height: 40px;
`;
export const Points = ({ animDuration, startAnim, delay }) => {
  const radius = useSharedValue(0);
  const config = {
    duration: animDuration,
  };
  const animatedProps = useAnimatedProps(() => {
    // draw a circle
    return {
      cx: radius.value,
      cy: radius.value,
      r: radius.value,
    };
  });

  const anim = () => {
    if (startAnim) {
      radius.value = withDelay(delay, withTiming(20, config));
    } else {
      radius.value = withDelay(delay, withTiming(0, config));
    }
  };
  anim();

  // attach animated props to an SVG path using animatedProps
  return (
    <>
      <SvgContainer viewBox="0 0 40 40">
        <AnimatedCircle animatedProps={animatedProps} fill="#ECE7E7" />
      </SvgContainer>
      {/* <Button
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
      /> */}
    </>
  );
};
