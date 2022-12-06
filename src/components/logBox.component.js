import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  withDelay,
  useAnimatedProps,
  useAnimatedStyle,
} from "react-native-reanimated";
import Svg, { Rect, Path } from "react-native-svg";
import styled from "styled-components/native";
import { data } from "../services/mock/userData";

const AnimatedRect = Animated.createAnimatedComponent(Rect);
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedText = Animated.createAnimatedComponent(Text);

const SvgContainer = styled(Svg)`
  width: 100px;
  height: 60px;
`;
export const LogBox = ({ animDuration, startAnim, delay, data, index }) => {
  const box = useSharedValue(0);
  const triOpacity = useSharedValue(0);
  const textOpacity = useSharedValue(0);

  const config = {
    duration: animDuration,
  };

  const RectAnimatedProps = useAnimatedProps(() => {
    return {
      width: box.value,
      height: box.value - 7,
      rx: 10,
    };
  });
  const triAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: triOpacity.value,
    };
  }, []);
  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
    };
  }, []);

  const anim = () => {
    if (startAnim) {
      box.value = withDelay(delay, withTiming(49, config));
      triOpacity.value = withDelay(delay, withTiming(1, config));
      textOpacity.value = withDelay(delay + 500, withTiming(1, config));
    } else {
      box.value = withDelay(delay, withTiming(0, config));
      triOpacity.value = withDelay(delay, withTiming(0, config));
      textOpacity.value = withDelay(delay + 500, withTiming(0, config));
    }
  };
  anim();
  return (
    <View
      style={
        index === 0 || index === data.countOfDays - 2
          ? { opacity: 1 }
          : { opacity: 0 }
      }
    >
      <AnimatedText
        style={[
          {
            position: "absolute",
            zIndex: 999,
            left: "30%",
            top: "33%",
            fontFamily: "monospace",
            fontSize: 8,
            fontWeight: "900",
          },
          textAnimatedStyle,
        ]}
      >
        {index === 0 ? data.Log[0].date : data.Log[data.Log.length - 1].date}
      </AnimatedText>
      <SvgContainer viewBox="0 0 40 50">
        <AnimatedRect animatedProps={RectAnimatedProps} fill="#ECE7E7" />
        <AnimatedPath
          d="M22.4989 50.1255L16.2879 33.5164L29.2764 33.7395L22.4989 50.1255Z"
          fill="#ECE7E7"
          style={[triAnimatedStyle]}
        />
      </SvgContainer>
    </View>
  );
};
