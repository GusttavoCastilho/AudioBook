import React, { useState, useEffect, useCallback } from "react";
import { ImageSourcePropType, TouchableOpacity, FlatList } from "react-native";

import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Input } from "@components/Input";
import { CardBook } from "@components/CardBook";
import { ButtonCategory } from "@components/ButtonCategory";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { searchRequestBook, getRequestCategory } from "@store/book/reducers";
import { Books } from "@store/book/types";

import { useNavigation } from "@react-navigation/native";

import LogoFull from "@assets/logo-full.svg";

import { recommendedCategories } from "@utils/categories";
import { getCategoryIcon } from "@utils/getCategoryIcon";

import {
  ActivityIndicatorBooks,
  Wrapper,
  Header,
  Content,
  Title,
  Subtitle,
  ListBook,
  Category,
} from "./styles";

type BookProps = {
  item: {
    image: ImageSourcePropType;
    title: string;
  };
};

export type CategoryProps = {
  id: number;
  type: string;
  title: string;
};

export function Search() {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<CategoryProps[]>(
    recommendedCategories
  );
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { search, loading } = useSelector((state: RootState) => state.book);

  useEffect(() => {
    if (searchText) {
      dispatch(searchRequestBook(searchText));
    }
  }, [searchText]);

  const handleListCategory = useCallback((category: string) => {
    dispatch(getRequestCategory(category));
  }, []);

  function BooksResult() {
    return (
      <>
        <Subtitle>Search Results</Subtitle>
        <FlatList
          data={search.books}
          keyExtractor={(item: Books) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 300 }}
          renderItem={({ item }) => {
            if (item.volumeInfo.imageLinks) {
              return (
                <CardBook
                  image={item.volumeInfo.imageLinks.smallThumbnail}
                  title={item.volumeInfo.title}
                  onPress={() => navigation.navigate("BookDetails", item)}
                />
              );
            }
          }}
        />
      </>
    );
  }

  function RecommendedCategories() {
    return (
      <>
        <Subtitle>Recommended Categories</Subtitle>
        <Category>
          {category.map((item) => (
            <ButtonCategory
              key={item.id}
              title={item.title}
              icon={getCategoryIcon(item.type)}
              onPress={() => handleListCategory(item.type)}
            />
          ))}
        </Category>
      </>
    );
  }

  function LoadingBooks() {
    return <ActivityIndicatorBooks />;
  }

  return (
    <Wrapper>
      <Header>
        <LogoFull />
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Feather name="settings" color={theme.colors.primary_50} size={24} />
        </TouchableOpacity>
      </Header>

      <Content>
        <Title>Explore</Title>

        <Input
          placeholder="Search Books or Author"
          value={searchText}
          onChangeText={setSearchText}
        />
        {loading
          ? LoadingBooks()
          : search.books.length > 0
          ? BooksResult()
          : RecommendedCategories()}

        {/* <Subtitle style={{ paddingTop: 16 }}>Latest Search</Subtitle> */}
        {/* <ListBook
              data={releases}
              renderItem={({ item }: BookProps) => (
                <CardBook image={item.image} title={item.title} />
              )}
            /> */}
      </Content>
    </Wrapper>
  );
}
