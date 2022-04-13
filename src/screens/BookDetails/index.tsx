import React from "react";
import { TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { useTheme } from "styled-components/native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";

import { Books } from "@store/book/types";

import { Button } from "@components/Button";

import {
  Wrapper,
  Scrool,
  Header,
  HeaderTitle,
  Content,
  Image,
  Title,
  Author,
  WrapperCategory,
  CardCategory,
  TitleCategory,
  WrapperButton,
  TextSumary,
  Sumary,
} from "./styles";

type ParamList = {
  Books: Books;
};

export function BookDetails() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<ParamList, "Books">>();
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
        <HeaderTitle>{params?.volumeInfo.title}</HeaderTitle>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={24}
          color={theme.colors.neutral_80}
        />
      </Header>

      <Scrool>
        <Content>
          <Image
            source={{ uri: params?.volumeInfo.imageLinks.thumbnail }}
            resizeMode="contain"
          />
          <Title>{params?.volumeInfo.title}</Title>
          <Author>{params?.volumeInfo.authors[0]}</Author>

          <WrapperCategory>
            {params?.volumeInfo.categories.map((item, index) => (
              <CardCategory key={index}>
                <TitleCategory>{item}</TitleCategory>
              </CardCategory>
            ))}
          </WrapperCategory>

          <WrapperButton>
            <Button
              label="Play Audio"
              style={{ width: "48%", marginRight: 15 }}
              onPress={() => navigation.navigate("Player")}
            />
            <Button label="Read Book" border style={{ width: "48%" }} />
          </WrapperButton>

          <TextSumary>Sumary</TextSumary>
          <Sumary>{params?.volumeInfo.description}</Sumary>
        </Content>
      </Scrool>
    </Wrapper>
  );
}
