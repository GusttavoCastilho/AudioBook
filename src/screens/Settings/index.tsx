import React from "react";
import { TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { ButtonSettings } from "@components/ButtonSettings";
import { Button } from "@components/Button";

import UserImg from "@assets/user.png";

import {
  Wrapper,
  Header,
  Title,
  Profile,
  ImageProfile,
  Content,
  Username,
  TextButton,
  Diviser,
  ButtonWrapper,
} from "./styles";

export function Settings() {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back"
            size={24}
            color={theme.colors.neutral_80}
          />
        </TouchableOpacity>
        <Title>Settings</Title>
      </Header>

      <Profile>
        <ImageProfile source={UserImg} />
        <Content>
          <Username>John Doe</Username>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <TextButton>View Profile</TextButton>
          </TouchableOpacity>
        </Content>
      </Profile>

      <Diviser />

      <ButtonSettings title="Notifications" />
      <ButtonSettings title="Data and Storages" />

      <Diviser />

      <ButtonSettings title="Subscription" />
      <ButtonSettings title="Linked Account" />

      <Diviser />

      <ButtonSettings title="About Audibooks" />

      <ButtonWrapper>
        <Button label="Log out" border fullWidth />
      </ButtonWrapper>
    </Wrapper>
  );
}
