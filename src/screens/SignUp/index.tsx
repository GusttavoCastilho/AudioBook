import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { Wrapper, Header, Form, Title, Info } from "./styles";

import { collection, addDoc } from "firebase/firestore";

import { useNavigation } from "@react-navigation/native";

import * as yup from "yup";

import { database } from "../../config/firebase";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import LogoSvg from "@assets/logo.svg";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  async function handleSubmitUser() {
    try {
      const schema = yup.object().shape({
        name: yup.string().required("Name mandatory."),
        email: yup
          .string()
          .required("Email mandatory.")
          .email("Provide a valid email"),
        password: yup.string().required("Password mandatory"),
      });

      await schema.validate({ name, email, password });

      addDoc(collection(database, "users"), {
        name,
        email,
        password,
      })
        .then(() => {
          Alert.alert("Success", "Registration successful!");
          navigation.navigate("SignIn");
        })
        .catch((error) => console.log(error));
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert("Error at register", `${error}`);
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Wrapper>
          <Header>
            <LogoSvg width={120} height={120} />
          </Header>

          <Form>
            <Title>Register</Title>

            <Input
              placeholder="Name"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={setName}
              value={name}
            />

            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />

            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />

            <Info>
              By signing up, you agree to our Terms,{"\n"} Data Policy and
              Cookies Policy.
            </Info>

            <Button label="Register" fullWidth onPress={handleSubmitUser} />
            <Button label="Cancel" fullWidth border />
          </Form>
        </Wrapper>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
