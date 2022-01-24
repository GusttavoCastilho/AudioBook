import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import { useTheme } from "styled-components/native";

import { Feather } from "@expo/vector-icons";

import { Category } from "@components/Category";
import { CardBestSeller } from "@components/CardBestSeller";
import { categories } from "@utils/categories";
import { banner } from "@utils/books";

import LogoFull from "@assets/logo-full.svg";
import LightMage from "@assets/books/light-mage.png";

import {
  Wrapper,
  Header,
  Content,
  BoxText,
  Text,
  TextSeeMore,
  CategoriesList,
  BannerList,
  BannerBook,
} from "./styles";

type CategoryProps = {
  id: number;
  category: string;
};

export function Home() {
  const [category] = useState<CategoryProps[]>(categories);
  const [categorySelected, setCaregorySelected] = useState("Art");
  const theme = useTheme();
  return (
    <Wrapper>
      <Header>
        <LogoFull />
        <TouchableOpacity>
          <Feather name="settings" color={theme.colors.primary_50} size={24} />
        </TouchableOpacity>
      </Header>

      <Content>
        <BoxText>
          <Text>Categories</Text>
          <TouchableOpacity>
            <TextSeeMore>See more</TextSeeMore>
          </TouchableOpacity>
        </BoxText>

        <CategoriesList
          data={category}
          //@ts-ignore
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            //@ts-ignore
            <Category
              category={item.category}
              active={item.category === categorySelected}
            />
          )}
        />

        <BoxText>
          <Text>Recommended For You</Text>
          <TouchableOpacity>
            <TextSeeMore>See more</TextSeeMore>
          </TouchableOpacity>
        </BoxText>

        <BannerList
          data={banner}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <BannerBook resizeMode="contain" source={item.book} />
          )}
        />

        <BoxText>
          <Text>Best Seller</Text>
          <TouchableOpacity>
            <TextSeeMore>See more</TextSeeMore>
          </TouchableOpacity>
        </BoxText>

        <CardBestSeller
          image={LightMage}
          title="Light Mage"
          company="Laurie Forest"
        />
      </Content>
    </Wrapper>
  );
}
