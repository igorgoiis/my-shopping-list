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
import { Input } from "@components/Input";
import Hero from "@assets/hero-signup.png";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignUp() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const [changeVisibilityPassword, setChangeVisibilityPassword] =
    useState<boolean>(false);
  const [changeVisibilityConfirmPassword, setChangeVisibilityConfirmPassword] =
    useState<boolean>(false);

  const changeVisibilty = useCallback(() => {
    setChangeVisibilityPassword(!changeVisibilityPassword);
  }, [changeVisibilityPassword]);

  const changeVisibiltyConfirmPassword = useCallback(() => {
    setChangeVisibilityConfirmPassword(!changeVisibilityConfirmPassword);
  }, [changeVisibilityConfirmPassword]);

  const handleGoSignIn = () => {
    navigate("signIn");
  };

  return (
    <S.Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <S.Content behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <S.Hero source={Hero} />

          <S.Form>
            <S.Title>Criar conta</S.Title>
            <Input
              placeholder="Nome"
              primary
              onSubmitEditing={() => {
                emailInputRef.current?.focus();
              }}
              error={false}
              errorMessage="Testes"
            />
            <Input
              ref={emailInputRef}
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
              secureTextEntry={!changeVisibilityPassword ? true : false}
              changeActionButton={changeVisibilty}
              iconName={!changeVisibilityPassword ? "eye-off" : "eye"}
              onSubmitEditing={() => {
                confirmPasswordInputRef.current?.focus();
              }}
            />
            <Input
              ref={confirmPasswordInputRef}
              placeholder="Confirmar senha"
              primary
              secureTextEntry={!changeVisibilityConfirmPassword ? true : false}
              changeActionButton={changeVisibiltyConfirmPassword}
              iconName={!changeVisibilityConfirmPassword ? "eye-off" : "eye"}
            />

            <S.SubActions>
              <TouchableOpacity
                onPress={handleGoSignIn}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 10,
                }}
              >
                <S.Text>Voltar para login</S.Text>
              </TouchableOpacity>
            </S.SubActions>

            <S.Button>
              <S.TextButton>Cadastrar</S.TextButton>
            </S.Button>
          </S.Form>
        </S.Content>
      </ScrollView>
    </S.Container>
  );
}
