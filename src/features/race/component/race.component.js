import React, { memo } from "react";
import { ScrollView, Text } from "react-native";
import Animated, {
  BounceInLeft,
  BounceInRight,
  FlipInXUp,
} from "react-native-reanimated";
import styled from "styled-components/native";
import {
  backgroundColor,
  backgroundColor2,
  backgroundColor3,
  textColor,
  textColor2,
} from "../../../components/app.styled.component";

import { Map } from "../../path/component/map.component";

const MapContainer = styled.View`
  padding: 10px;
  top: 40%;
`;
const TextContainer = styled(Text)`
  font-family: monospace;
  background-color: #ba68c8;
  width: 60px;
  text-align: center;
  padding: 7px;
  border-radius: 30px;
  elevation: 5;
  color: ${textColor2};
`;
const AnimatedText1 = Animated.createAnimatedComponent(TextContainer);

const Race = ({ data, checkPoints, startAnim }) => {
  const mapArray = Array.from(Array(Math.floor(data.countOfDays)).keys());
  return (
    <MapContainer>
      <AnimatedText1 entering={FlipInXUp.duration(700)}>
        {data.name}
      </AnimatedText1>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {mapArray.map((itm, index) => (
          <Map
            key={index}
            startAnim={startAnim}
            delay={index * 1000}
            data={data}
            checkPoint={checkPoints[index]}
            index={index}
          />
        ))}
      </ScrollView>
    </MapContainer>
  );
};
export default memo(Race);
