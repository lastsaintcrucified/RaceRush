import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Button } from "react-native";
import styled from "styled-components/native";

import { Map } from "../../path/component/map.component";

export const Race = ({ data, checkPoints }) => {
  const [startAnim, setStartAnim] = useState(false);
  const MapContainer = styled.View`
    padding: 10px;
    top: 30%;
  `;
  const TextContainer = styled(Text)`
    font-family: monospace;
    background-color: #faf5f5;
    width: 60px;
    text-align: center;
    padding: 7px;
    border-radius: 30px;
    elevation: 5;
  `;
  const mapArray = Array.from(Array(Math.floor(data.countOfDays)).keys());
  return (
    <MapContainer>
      <TextContainer>{data.name}</TextContainer>

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
      <Button
        title="toggle"
        onPress={() => {
          setStartAnim(!startAnim);
        }}
      />
    </MapContainer>
  );
};
