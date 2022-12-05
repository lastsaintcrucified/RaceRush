import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  ${(props) =>
    !props.header &&
    StatusBar.currentHeight &&
    `padding-top:${StatusBar.currentHeight}px`};
  flex: 1;
  background-color: "#FFFFFF";
  flex-direction: column;
`;
