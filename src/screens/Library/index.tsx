import React from "react";
import { TouchableOpacity, FlatList } from "react-native";

import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { LibraryBook } from "@components/LibraryBook";
import { Input } from "@components/Input";

import { myBooks } from "@utils/books";

import BlackWitch from "@assets/books/black-witch.png";
import LogoFull from "@assets/logo-full.svg";

import { Wrapper, Header, Title, Content } from "./styles";

export function Library() {
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
        <Title>My Books</Title>

        <Input placeholder="Search Books or Author..." />

        <FlatList
          data={myBooks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <LibraryBook
              image={item.image}
              title={item.title}
              author={item.author}
            />
          )}
        />
      </Content>
    </Wrapper>
  );
}
