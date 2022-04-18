import React, { useState, useCallback } from "react";
import { TouchableOpacity, FlatList } from "react-native";

import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";
import { getRequestCategory } from "../../store/book/reducers";
import { RootState } from "../../store";

import { Category } from "@components/Category";
import { CardBestSeller } from "@components/CardBestSeller";
import { CardBook } from "@components/CardBook";

import { categories } from "@utils/categories";
import { banner, bestSeller, releases, trending } from "@utils/books";

import LogoFull from "@assets/logo-full.svg";

import {
  ActivityIndicatorBooks,
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

export type CategoryProps = {
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
  const dispatch = useDispatch();

  const { books, loading } = useSelector((state: RootState) => state.book);

  const SelectCategory = useCallback((item: CategoryProps) => {
    setCaregorySelected(item.category);
    dispatch(getRequestCategory(item.category));
  }, []);

  const handleSeeMore = () => {
    navigation.navigate("Search");
  };

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
          <TouchableOpacity onPress={handleSeeMore}>
            <TextSeeMore>See more</TextSeeMore>
          </TouchableOpacity>
        </BoxText>

        <CategoriesList<React.ElementType>
          data={category}
          //@ts-ignore
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            //@ts-ignore
            <Category
              category={item.category}
              active={item.category === categorySelected}
              onPress={() => SelectCategory(item)}
            />
          )}
        />

        <BoxText>
          <Text>Recommended For You</Text>
          <TouchableOpacity onPress={handleSeeMore}>
            <TextSeeMore>See more</TextSeeMore>
          </TouchableOpacity>
        </BoxText>

        {loading && <ActivityIndicatorBooks />}

        {books.length > 0 ? (
          <FlatList
            data={books}
            keyExtractor={(item) => String(item.id)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 20, marginBottom: 20 }}
            renderItem={({ item }) => (
              <BannerBook
                resizeMode="contain"
                source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
              />
            )}
          />
        ) : (
          <BannerList
            data={banner}
            keyExtractor={(item: BannerProps) => String(item.id)}
            renderItem={({ item }) => (
              <BannerBook resizeMode="contain" source={item.book} />
            )}
          />
        )}

        <BoxText>
          <Text>Best Seller</Text>
          <TouchableOpacity onPress={handleSeeMore}>
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
          <TouchableOpacity onPress={handleSeeMore}>
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
          <TouchableOpacity onPress={handleSeeMore}>
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
