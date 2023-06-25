import { forwardRef, useImperativeHandle, useRef } from "react";
import { Text, TextInputProps, TouchableOpacity } from "react-native";

import * as S from "./styles";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";

export type InputProps = TextInputProps & {
  ref?: any;
  primary?: boolean;
  error?: boolean;
  errorMessage?: string;
  iconName?: any;
  changeActionButton?: () => void;
};

interface InputRef {
  focus(): void;
}

export const Input = forwardRef<InputRef, InputProps>(
  (
    {
      primary,
      error,
      errorMessage,
      placeholderTextColor,
      iconName,
      changeActionButton,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme();
    const inputRef = useRef<any>();

    useImperativeHandle(ref, () => ({
      focus() {
        inputRef.current.focus();
      },
    }));

    return (
      <>
        <S.Container
          isFocused={false}
          isErrored={error || false}
          primary={primary}
          iconName={iconName}
        >
          <S.TextInput ref={inputRef} iconName={iconName} {...rest} />
          {iconName && (
            <S.ShowPasswordButton onPress={changeActionButton}>
              <Feather
                name={iconName}
                size={20}
                color={theme.COLORS.GRAY["100"]}
              />
            </S.ShowPasswordButton>
          )}
        </S.Container>
        {error && errorMessage && (
          <Text style={{ fontSize: 14, color: theme.COLORS.RED["400"] }}>
            {errorMessage}
          </Text>
        )}
      </>
    );
  }
);
