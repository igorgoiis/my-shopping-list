import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  primary?: boolean;
  iconName?: any;
}

interface InputProps {
  iconName: any;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: ${({ theme, iconName }) => (!!iconName ? "0 0 0 16px" : "0 16px")};
  background: ${({ theme, primary }) =>
    primary ? theme.COLORS.PURPLE["700"] : theme.COLORS.WHITE};
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY["100"]};
  flex-direction: row;
  align-items: center;

  ${({ isErrored, theme }) =>
    isErrored &&
    css`
      border-color: ${theme.COLORS.RED[400]};
    `}

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-color: ${theme.COLORS.PURPLE["600"]};
    `}
`;

export const TextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.COLORS.GRAY["100"],
}))<InputProps>`
  flex: 1;
  height: 100%;
  color: ${({ theme }) => theme.COLORS.GRAY["100"]};
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
`;

export const ShowPasswordButton = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;
