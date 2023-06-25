import { useCallback, useRef, useState } from "react";
import {
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@components/Input";
import Hero from "@assets/hero-signin.png";
import * as S from "./styles";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignIn() {
  const passwordInputRef = useRef<TextInput>(null);
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const [changeVisibilityPassword, setChangeVisibilityPassword] =
    useState<boolean>(false);

  const changeVisibilty = useCallback(() => {
    setChangeVisibilityPassword(!changeVisibilityPassword);
  }, [changeVisibilityPassword]);

  const handleGoSignUp = () => {
    navigate("signUp");
  };

  const handleGoForgotPassword = () => {
    navigate("forgotPassword");
  };

  return (
    <S.Container>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <S.Hero source={Hero} />

          <S.Form>
            <S.Title>Acesse a sua conta</S.Title>
            <Input
              placeholder="E-mail"
              primary
              keyboardType="email-address"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
              error={false}
              errorMessage="Testes"
            />
            <Input
              ref={passwordInputRef}
              placeholder="Senha"
              primary
              secureTextEntry={true}
              changeActionButton={changeVisibilty}
              iconName={!changeVisibilityPassword ? "eye-off" : "eye"}
            />

            <S.SubActions>
              <TouchableOpacity onPress={handleGoSignUp}>
                <S.Text>Criar minha conta</S.Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleGoForgotPassword}>
                <S.Text>Esqueci minha senha</S.Text>
              </TouchableOpacity>
            </S.SubActions>

            <S.Button>
              <S.TextButton>Entrar</S.TextButton>
            </S.Button>
          </S.Form>
        </KeyboardAvoidingView>
      </ScrollView>
    </S.Container>
  );
}
