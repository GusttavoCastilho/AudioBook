import React from "react";
import { TouchableOpacity } from "react-native";

import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import Ionicons from "@expo/vector-icons/Ionicons";

import {
  Wrapper,
  Header,
  Title,
  TitleButtonSave,
  Content,
  ImageUser,
  BoxInfo,
  TitleInfo,
  DescriptionInfo,
} from "./styles";

import UserImg from "@assets/user.png";

export function Profile() {
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
        <Title>Profile</Title>
        <TouchableOpacity>
          <TitleButtonSave>Save</TitleButtonSave>
        </TouchableOpacity>
      </Header>

      <Content>
        <ImageUser source={UserImg} resizeMode="contain" />
        <BoxInfo>
          <TitleInfo>Display Name</TitleInfo>
          <DescriptionInfo>John Doe</DescriptionInfo>
        </BoxInfo>
        <BoxInfo>
          <TitleInfo>Username</TitleInfo>
          <DescriptionInfo>johndoe</DescriptionInfo>
        </BoxInfo>
        <BoxInfo>
          <TitleInfo>Email</TitleInfo>
          <DescriptionInfo>john@mail.com</DescriptionInfo>
        </BoxInfo>
        <BoxInfo>
          <TitleInfo>Phone</TitleInfo>
          <DescriptionInfo>+1234567890</DescriptionInfo>
        </BoxInfo>
        <BoxInfo>
          <TitleInfo>Date Birth</TitleInfo>
          <DescriptionInfo>01 January 2001</DescriptionInfo>
        </BoxInfo>
      </Content>
    </Wrapper>
  );
}
