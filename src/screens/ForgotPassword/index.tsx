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

export function ForgotPassword() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

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
            <S.Title>Recuperar Senha</S.Title>
            <S.SubTitle>
              Enviaremos informações para de como criar uma nova senha para seu
              e-mail.
            </S.SubTitle>
            <Input
              placeholder="E-mail"
              primary
              keyboardType="email-address"
              error={false}
              errorMessage="Testes"
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
              <S.TextButton>Recuperar Senha</S.TextButton>
            </S.Button>
          </S.Form>
        </S.Content>
      </ScrollView>
    </S.Container>
  );
}
