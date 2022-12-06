import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedProps,
  withTiming,
  withDelay,
} from "react-native-reanimated";
import { Text } from "react-native";
import Svg, { Circle } from "react-native-svg";
import styled from "styled-components/native";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const SvgContainer = styled(Svg)`
  width: 60px;
  height: 60px;
`;

const AnimatedText = Animated.createAnimatedComponent(Text);

export const Points = ({ animDuration, startAnim, delay, checkPoint }) => {
  const radius = useSharedValue(0);
  const textOpacity = useSharedValue(0);
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
  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
    };
  }, []);

  const anim = () => {
    if (startAnim) {
      radius.value = withDelay(delay, withTiming(30, config));
      textOpacity.value = withDelay(delay + 500, withTiming(1, config));
    } else {
      radius.value = withDelay(delay, withTiming(0, config));
      textOpacity.value = withDelay(delay + 500, withTiming(0, config));
    }
  };
  anim();

  // attach animated props to an SVG path using animatedProps
  return (
    <>
      <AnimatedText
        style={[
          {
            position: "absolute",
            zIndex: 999,
            left: "7%",
            bottom: "34%",
            fontFamily: "monospace",
            fontSize: 10,
          },
          textAnimatedStyle,
        ]}
      >
        {checkPoint}
      </AnimatedText>
      <SvgContainer viewBox="0 0 60 60">
        <AnimatedCircle animatedProps={animatedProps} fill="#ECE7E7" />
      </SvgContainer>
    </>
  );
};
