import React from "react";
import Carousel from "../../commons/menuTab/menuTab";
import Modal from "../../commons/modal/modal";
import Stepper from "../../commons/stepper/stepper";
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
  CaroselContainer,
  TypoGraphy,
  FooterContainer,
  ShutterStockLogo,
  CopyrightsContainer,
  TermsOfUse,
  TermsOfUseContainer,
  ContactUs,
  ContactInfo,
} from "./landing.style";
import { IProps } from "./landing.types";

const LandingUI = ({ open, setOpen, handleOpen }: IProps) => {
  return (
    <>
      {open && <Modal handleOpen={handleOpen} setOpen={setOpen} />}
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
            <CaroselContainer>
              <Carousel />
            </CaroselContainer>
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
          <Stepper />
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
        <Footer>
          <FooterContainer>
            powered by
            <ShutterStockLogo src="/ss_logo.svg" />
          </FooterContainer>
        </Footer>
        <CopyrightsContainer>
          <TermsOfUseContainer>
            <TermsOfUse onClick={handleOpen}>Terms of Use</TermsOfUse>
          </TermsOfUseContainer>
          <ContactUs>
            <ContactInfo>
              B1, E10Dong, 70, Magokjungang 10-ro, Gangseo-gu, Seoul, Republic
              of Korea
            </ContactInfo>
            <ContactInfo>Founder : John (Yi.su.min)</ContactInfo>
            <ContactInfo>Email : waynehills.ventures@gmail.com</ContactInfo>
          </ContactUs>
        </CopyrightsContainer>
      </Wrapper>
    </>
  );
};

export default LandingUI;
