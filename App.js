import React, { useState } from "react";
import { SafeArea } from "./src/components/safe-area.component";
import { ScrollView } from "react-native";

import { Map } from "./src/features/path/component/map.component";
import { Button } from "react-native";
import styled from "styled-components/native";

export default function App() {
  const tempArr = [1, 2, 3, 4, 5];
  const [startAnim, setStartAnim] = useState(false);
  const MapContainer = styled.View`
    padding: 5px;
    top: 50%;
  `;
  return (
    <SafeArea>
      <MapContainer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tempArr.map((itm, index) => (
            <Map key={itm} startAnim={startAnim} delay={index * 1000} />
          ))}
        </ScrollView>
        <Button
          title="toggle"
          onPress={() => {
            setStartAnim(!startAnim);
          }}
        />
      </MapContainer>
    </SafeArea>
  );
}
