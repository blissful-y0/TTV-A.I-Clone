import React from "react";
import VerticalLinearStepper from "../../commons/stepper/stepper";
import {
  Body,
  Footer,
  Heading,
  Header,
  Wrapper,
  HeaderLeft,
  HeaderMiddle,
  HeaderRight,
  WayneHillsLogo,
  SignIn,
  HeadingContainer,
  Carosel,
  TypoGraphy,
} from "./landing.style";

const LandingUI: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Heading>
        <Header>
          <HeaderLeft>
            <WayneHillsLogo src="/logo.png" />
          </HeaderLeft>
          <HeaderMiddle />
          <HeaderRight>
            <SignIn>Sign In</SignIn>
          </HeaderRight>
        </Header>
        <HeadingContainer>
          <Carosel></Carosel>
          <TypoGraphy>The easiest way to make videos</TypoGraphy>
        </HeadingContainer>
      </Heading>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1680 40"
        width="full"
        style={{ zIndex: 1 }}
      >
        <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#000" />
      </svg>
      <Body>
        <VerticalLinearStepper />
      </Body>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1680 40"
        width="full"
        style={{ transform: "rotate(180deg)", marginTop: -1 }}
      >
        <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#000" />
      </svg>
      <Footer></Footer>
    </Wrapper>
  );
};

export default LandingUI;
