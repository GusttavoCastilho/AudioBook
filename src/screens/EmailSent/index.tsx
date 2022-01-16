import React from "react";

import { useRoute } from "@react-navigation/native";

import { Button } from "@components/Button";

import { EmailSent as EmailSentProps } from "../../@types/navigation";

import LogoSvg from "@assets/logo.svg";

import { Wrapper, Header, Content, Title, Description, Bold } from "./styles";

export function EmailSent() {
  const route = useRoute();
  const { email } = route.params as EmailSentProps;
  return (
    <Wrapper>
      <Header>
        <LogoSvg width={120} height={120} />
      </Header>

      <Content>
        <Title>Email Sent</Title>
        <Description>
          We sent an email to <Bold>{email}</Bold> with a link to get back into
          your account.
        </Description>

        <Button label="Cancel" fullWidth border />
      </Content>
    </Wrapper>
  );
}
