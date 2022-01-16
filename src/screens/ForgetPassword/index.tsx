import React, { useState } from "react";

import { useNavigation, useRoute } from "@react-navigation/native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { useAuth } from "@hooks/auth";

import { ForgetPassword as ForgetPasswordProps } from "../../@types/navigation";

import LogoSvg from "@assets/logo.svg";

import { Wrapper, Header, Content, Title, Description } from "./styles";
import { Alert } from "react-native";

export function ForgetPassword() {
  const route = useRoute();
  const navigation = useNavigation();
  const { email } = route.params as ForgetPasswordProps;

  const [userEmail, setUserEmail] = useState(email);

  const { forgotPassword } = useAuth();

  function handleForgotPassword() {
    forgotPassword(userEmail)
      .then(() => navigation.navigate("EmailSent", { email }))
      .catch(() =>
        Alert.alert(
          "Forgot Password",
          "Unable to send email to reset your password"
        )
      );
  }

  function handleGoBack() {
    navigation.navigate("SignIn");
  }
  return (
    <Wrapper>
      <Header>
        <LogoSvg width={120} height={120} />
      </Header>

      <Content>
        <Title>Forget Password</Title>
        <Description>
          Please fill email and we'll send you a link to get back into your
          account.
        </Description>

        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={setUserEmail}
          value={userEmail}
        />

        <Button label="Submit" fullWidth onPress={handleForgotPassword} />
        <Button label="Cancel" fullWidth border onPress={handleGoBack} />
      </Content>
    </Wrapper>
  );
}
