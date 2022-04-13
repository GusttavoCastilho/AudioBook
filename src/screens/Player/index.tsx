import React, { useState, useEffect, useRef } from "react";
import { TouchableOpacity, View, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Audio, AVPlaybackStatus } from "expo-av";

import {
  Wrapper,
  Header,
  HeaderTitle,
  Content,
  BookImage,
  TitleBook,
  AuthorBook,
  Timeline,
  LineContainer,
  LineProgress,
  Dot,
  Time,
  BoxTime,
  BoxButton,
  ButtonSound,
  ButtonLastAndNext,
  ButtonPlay,
  ButtonUpload,
} from "./styles";

import HarryPotterImage from "@assets/books/harry-potter.png";
import SoundSvg from "@assets/sound.svg";
import ArrowLeftSvg from "@assets/arrow-left.svg";
import ArrowRightSvg from "@assets/arrow-right.svg";
import PlaySvg from "@assets/play-bold.svg";
import UploadSvg from "@assets/upload.svg";
import PauseSvg from "@assets/pause.svg";

export function Player() {
  const [sound, setSound] = useState<Audio.Sound>();
  const [playingStatus, setPlayingStatus] = useState("nosound");
  const [playing, setPlaying] = useState(false);
  const [noSound, setNoSound] = useState(false);
  const navigation = useNavigation();
  const theme = useTheme();

  const playBook = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("./music.mp3"),
      {
        shouldPlay: true,
        isLooping: false,
      },
      soundStatus
    );
    setSound(sound);
    setPlaying(true);
    setPlayingStatus("playing");
  };

  const soundStatus = (status: AVPlaybackStatus): void => {
    if (status.isLoaded) {
      if (status.isPlaying && playingStatus !== "playing") {
        setPlayingStatus("playing");
      } else if (!status.isPlaying && playingStatus === "playing") {
        setPlayingStatus("donepause");
      }
    }
  };

  const pauseBook = async () => {
    if (playingStatus == "playing") {
      await sound?.pauseAsync();
      setPlayingStatus("donepause");
      setPlaying(false);
    } else {
      await sound?.playAsync();
      setPlayingStatus("playing");
      setPlaying(true);
    }
  };

  const playAndPauseBook = () => {
    switch (playingStatus) {
      case "nosound":
        playBook();
        break;
      case "donepause":
      case "playing":
        pauseBook();
        break;
    }
  };

  const alterVolumePlayer = async () => {
    const status = await sound?.getStatusAsync();
    if (status?.isLoaded) {
      if (status.volume == 1) {
        await sound?.setVolumeAsync(0);
        setNoSound(true);
      } else {
        await sound?.setVolumeAsync(1);
        setNoSound(false);
      }
    }
    console.log(status);
  };

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
        <HeaderTitle>Harry Potter</HeaderTitle>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={24}
          color={theme.colors.neutral_80}
        />
      </Header>

      <Content>
        <BookImage source={HarryPotterImage} />
        <TitleBook>Harry Potter and the Prison...</TitleBook>
        <AuthorBook>J.K. Rowling</AuthorBook>

        <Timeline>
          <LineContainer>
            <LineProgress>
              <Dot />
            </LineProgress>
          </LineContainer>

          <BoxTime>
            <Time>12:15</Time>
            <Time>47:32</Time>
          </BoxTime>
        </Timeline>

        <BoxButton>
          <ButtonSound onPress={alterVolumePlayer}>
            {noSound ? (
              <Ionicons
                name="volume-mute-outline"
                size={24}
                color={theme.colors.neutral_80}
              />
            ) : (
              <SoundSvg />
            )}
          </ButtonSound>
          <ButtonLastAndNext>
            <ArrowLeftSvg />
          </ButtonLastAndNext>
          <ButtonPlay onPress={playAndPauseBook}>
            {playing ? <PauseSvg /> : <PlaySvg />}
          </ButtonPlay>
          <ButtonLastAndNext>
            <ArrowRightSvg />
          </ButtonLastAndNext>
          <ButtonUpload>
            <UploadSvg />
          </ButtonUpload>
        </BoxButton>
      </Content>
    </Wrapper>
  );
}
