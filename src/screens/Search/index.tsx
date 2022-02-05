import React, { useState } from "react";
import { ImageSourcePropType, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Input } from "@components/Input";
import { CardBook } from "@components/CardBook";
import { ButtonCategory } from "@components/ButtonCategory";

import LogoFull from "@assets/logo-full.svg";

import { releases } from "@utils/books";
import { recommendedCategories } from "@utils/categories";
import { getCategoryIcon } from "@utils/getCategoryIcon";

import {
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
  const [category, setCategory] = useState<CategoryProps[]>(
    recommendedCategories
  );
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
        <Title>Explore</Title>

        <Input placeholder="Search Books or Author" />

        <Subtitle>Recommended Categories</Subtitle>
        <Category>
          {category.map((item) => (
            <ButtonCategory
              key={item.id}
              title={item.title}
              icon={getCategoryIcon(item.type)}
            />
          ))}
        </Category>
        <Subtitle style={{ paddingTop: 16 }}>Latest Search</Subtitle>
        <ListBook
          data={releases}
          renderItem={({ item }: BookProps) => (
            <CardBook image={item.image} title={item.title} />
          )}
        />
      </Content>
    </Wrapper>
  );
}
