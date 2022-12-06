import React, { useState } from "react";
import styled from "styled-components/native";
import { Points } from "../../../components/points.component";
import { DashedPath } from "../../../components/dashed-path.component";
import { LogBox } from "../../../components/logBox.component";

const PathContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 100px;
`;

export const Map = ({ startAnim, delay, data, checkPoint, index }) => {
  const logDetails = [data.Log[0], data.Log[data.Log.length - 1]];
  return (
    <PathContainer>
      <Points
        animDuration={500}
        startAnim={startAnim}
        delay={delay}
        data={data}
        checkPoint={checkPoint}
      />
      {index < data.countOfDays - 1 ? (
        <DashedPath
          animDuration={1000}
          startAnim={startAnim}
          delay={delay + 100}
          data={data}
          logDetails={logDetails}
          index={index}
        />
      ) : null}
    </PathContainer>
  );
};
