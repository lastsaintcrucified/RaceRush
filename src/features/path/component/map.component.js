import React, { useState } from "react";
import styled from "styled-components/native";
import { Points } from "../../../components/points.component";
import { DashedPath } from "../../../components/dashed-path.component";

const PathContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Map = ({ startAnim, delay }) => {
  return (
    <PathContainer>
      <Points animDuration={500} startAnim={startAnim} delay={delay} />
      <DashedPath
        animDuration={1000}
        startAnim={startAnim}
        delay={delay + 100}
      />
    </PathContainer>
  );
};
