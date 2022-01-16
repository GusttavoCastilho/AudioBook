import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import * as yup from "yup";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { useAuth } from "@hooks/auth";

import LogoSvg from "@assets/logo.svg";
import GoogleSvg from "@assets/google.svg";
import FacebookSvg from "@assets/facebook.svg";
import TwitterSvg from "@assets/twitter.svg";

import {
  Wrapper,
  Header,
  Form,
  Title,
  ForgetPassword,
  ForgetPasswordText,
  Text,
  WrapperSocialButton,
  SocialButton,
  WrapperButtonRegister,
  ButtonRegister,
  ButtonRegisterLabel,
} from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const navigation = useNavigation();

  async function handleSignIn() {
    try {
      const schema = yup.object().shape({
        password: yup.string().required("Password mandatory"),
        email: yup
          .string()
          .required("Email mandatory.")
          .email("Provide a valid email"),
      });

      await schema.validate({ email, password });
      signIn(email, password);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        Alert.alert("Error", error.message);
      } else {
        console.log(error);
        Alert.alert("Error at login", `${error}`);
      }
    }
  }

  function handleForgotPassword() {
    navigation.navigate("ForgetPassword", {
      email,
    });
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Wrapper>
          <Header>
            <LogoSvg width={120} height={120} />
          </Header>

          <Form>
            <Title>Login to Your Account</Title>
            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Button label="Login" fullWidth onPress={handleSignIn} />

            <ForgetPassword onPress={handleForgotPassword}>
              <ForgetPasswordText>Forget Password ?</ForgetPasswordText>
            </ForgetPassword>

            <Text>Or login with</Text>

            <WrapperSocialButton>
              <SocialButton>
                <GoogleSvg />
              </SocialButton>

              <SocialButton>
                <FacebookSvg />
              </SocialButton>

              <SocialButton>
                <TwitterSvg />
              </SocialButton>
            </WrapperSocialButton>

            <WrapperButtonRegister>
              <Text>Don’t have an accoun’t ?</Text>
              <ButtonRegister onPress={() => navigation.navigate("SignUp")}>
                <ButtonRegisterLabel>Register</ButtonRegisterLabel>
              </ButtonRegister>
            </WrapperButtonRegister>
          </Form>
        </Wrapper>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
