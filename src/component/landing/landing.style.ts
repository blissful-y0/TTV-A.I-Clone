import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const Heading = styled.div`
  width: 70vw;
  height: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Body = styled.div`
  width: 100vw;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`;

export const Footer = styled.div`
  width: 70vw;
  height: 10%;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: 70vw;
  height: 23%;
  display: flex;
  box-shadow: 0 3px 1px -2px #0003, 0 2px 2px 0 #00000024, 0 1px 5px 0 #0000001f;
`;

export const HeaderLeft = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderMiddle = styled.div`
  width: 40%;
  height: 100%;
`;

export const HeaderRight = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
`;

export const WayneHillsLogo = styled.img`
  width: 200px;
  height: 57px;
`;

export const SignIn = styled.button`
  font-size: 14px;
  background-color: black;
  color: white;
  box-shadow: 0 3px 1px -2px #0003, 0 2px 2px 0 #00000024, 0 1px 5px 0 #0000001f;
  cursor: pointer;
  outline: none;
  border: none;
  min-width: 70px;
  height: 35px;
  border-radius: 4px;
  font-weight: bold;
`;

export const HeadingContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
`;

export const Carosel = styled.div`
  width: 40%;
  height: 100%;
`;

export const TypoGraphy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 90%;
  font-size: 85px;
  padding-left: 5%;
  border-left: 1px solid #bdbdbd;
  color: #000000de;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  margin-top: 1%;
`;

export const ShutterStockLogo = styled.img`
  margin-top: 1%;
`;

export const CopyrightsContainer = styled.div`
  width: 100vw;
  border-top: 1px solid #bdbdbd;
  height: 300px;
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TermsOfUseContainer = styled.div`
  height: 80%;
  width: 40%;
`;

export const TermsOfUse = styled.h3`
  text-decoration: underline solid 3px;
  font-size: 12px;
  cursor: pointer;
  font-weight: normal;
`;

export const ContactUs = styled.div`
  height: 80%;
  width: 40%;
`;

export const ContactInfo = styled.h3`
  font-size: 12px;
  font-weight: normal;
`;
