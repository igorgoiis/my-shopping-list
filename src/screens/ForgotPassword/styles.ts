import styled, { css } from "styled-components/native";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
  colors: ["#5852D1", "#6C63FF"],
  start: { x: 1, y: 1 },
  end: { x: 0, y: 0 },
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Hero = styled.Image.attrs({
  resizeMode: "contain",
})`
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 22px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.WHITE};
  `}
`;

export const SubTitle = styled.Text`
  font-size: 22px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.REGULAR};
    font-size: 12px;
    color: ${theme.COLORS.WHITE};
    padding: 10px 0;
  `}
`;

export const SubActions = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY["100"]};
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PURPLE["600"]};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 12px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY["100"]};
`;
