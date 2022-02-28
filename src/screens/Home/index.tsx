import React, { useState } from "react";
import { TouchableOpacity, FlatList } from "react-native";

import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import { Category } from "@components/Category";
import { CardBestSeller } from "@components/CardBestSeller";
import { CardBook } from "@components/CardBook";

import { categories } from "@utils/categories";
import { banner, bestSeller, releases, trending } from "@utils/books";

import LogoFull from "@assets/logo-full.svg";

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

export type BannerProps = {
  id: number;
  book: React.ReactNode;
};

export function Home() {
  const [category] = useState<CategoryProps[]>(categories);
  const [categorySelected, setCaregorySelected] = useState("Art");
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Header>
        <LogoFull />
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
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
          keyExtractor={(item: BannerProps) => String(item.id)}
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

        <FlatList
          data={bestSeller}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <CardBestSeller
              image={item.image}
              title={item.title}
              company={item.company}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <BoxText style={{ marginTop: 12 }}>
          <Text>New Releases</Text>
          <TouchableOpacity>
            <TextSeeMore>See more</TextSeeMore>
          </TouchableOpacity>
        </BoxText>

        <FlatList
          data={releases}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <CardBook image={item.image} title={item.title} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginLeft: 24, marginTop: 16 }}
        />

        <BoxText style={{ marginTop: 12 }}>
          <Text>Trending Now</Text>
          <TouchableOpacity>
            <TextSeeMore>See more</TextSeeMore>
          </TouchableOpacity>
        </BoxText>

        <FlatList
          data={trending}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <CardBook image={item.image} title={item.title} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginLeft: 24, marginTop: 16 }}
        />
      </Content>
    </Wrapper>
  );
}
