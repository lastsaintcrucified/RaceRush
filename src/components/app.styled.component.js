import styled from "styled-components/native";
export const backgroundColor = "#FAE5D3";
export const backgroundColor2 = "#D7CCC8";
export const backgroundColor3 = "#D7CCC8";
export const backgroundColor4 = "#ECEFF1";

export const textColor = "black";
export const textColor2 = "white";

export const AppContainer = styled.ImageBackground.attrs({
  source: require("../../assets/home.jpg"),
})`
  flex: 1;
`;
export const AppCover = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const TextStyled1 = styled.Text`
  position: absolute;
  background-color: ${backgroundColor};
  width: 130px;
  text-align: center;
  padding: 15px;
  border-radius: 30px;
  elevation: 30;
  font-family: monospace;
  font-size: 16px;
  top: 8%;
  left: 5%;
  color: ${textColor};
`;
export const TextStyled2 = styled.Text`
  position: absolute;
  background-color: ${backgroundColor};
  width: 130px;
  text-align: center;
  padding: 20px;
  border-radius: 30px;
  elevation: 30;
  font-family: monospace;
  font-size: 16px;
  top: 22%;
  right: 5%;
  color: ${textColor};
`;
