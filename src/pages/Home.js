import React from "react";
import background from "../assets/background.jpg";
import styled from "styled-components";
import viewimg from "../assets/viewimg.jpg";
import logo from "../assets/logo.png";
import emaillogo from "../assets/emaillogo.png";
import phonelogo from "../assets/phonelogo.png";
import GPSComponent from "../components/GPSLocation";

const Home = () => {
  return (
    <BackgroundImage>
      {/* <MainImage src={viewimg} alt="main image" />
      <Contant>
        <h1>*Welcome to Mittu Reddy's Portfolio</h1>
        <para> Hi! Welcome to the mittureddy's profile..</para>
      </Contant>
      <LogoWrapper>
        <LogoImage src={logo} alt="logo image" />
        <LogoText>MITTU REDDY</LogoText>
      </LogoWrapper>
      <Phonewrapper>
        <Phonelogoo src={phonelogo} alt="phonelogo" />
        <PhoneText>+91-8341918520</PhoneText>
      </Phonewrapper>
      <Emailwrapper>
        <Emaillogoo src={emaillogo} alt="emaillogo" />
        <EmailText>mittureddy@gmail.com</EmailText>
      </Emailwrapper> */}
      <GPSComponent />
    </BackgroundImage>
  );
};

export default Home;

const BackgroundImage = styled.div`
  // background-image: url(${background});
  // background-size: cover;
  // background-position: center;
  background: #f5f5f5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const MainImage = styled.img`
  border-radius: 3%;
  width: 80vw;
  height: 80vh;
  border: 5px solid white;
  position: absolute;
  top: 10%;
`;

const LogoImage = styled.img`
  width: 5vw;
  height: 5vw;
  position: absolute;
  left: 10%;
  top: 8%;
`;
const LogoText = styled.text`
  margin-left: 60px;
  font-size: 13px;
  font-weight: bold;
  font-family: elvet;
  color: rgb(108, 167, 14);
`;
const LogoWrapper = styled.div`
  position: absolute;
  left: 9%;
  top: 12%;
`;

const Phonelogoo = styled.img`
  width: 3vw;
  height: 3vw;
  position: absolute;
  top: 12%;
  left: 30%;
  border-radius: 10px;
`;

const Emaillogoo = styled.img`
  width: 3vw;
  height: 3vw;
  position: absolute;
  top: 12%;
  left: 40%;
  border-radius: 10px;
`;

const PhoneText = styled.text`
  margin-left: 75px;
  font-size: 10px;
  font-weight: bold;
  font-family: elvetica;
  color: #0e9aa7;
`;
const Phonewrapper = styled.div`
  position: absolute;
  left: 25%;
  top: 12%;
`;

const EmailText = styled.text`
  margin-left: 130px;
  font-size: 12px;
  font-weight: bold;
  font-family: elvetica;
  color: #0e9aa7;
`;
const Emailwrapper = styled.div`
  position: absolute;
  left: 35%;
  top: 12%;
`;
const Contant = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  color: black;
  font-size: 10px;
  font-weight: bold;
  padding: 10px 20px;
`;
const h1 = styled.text`
  font-size: 10px;
  font-weight: bold;
  font-family: calcul;
`;
const para = styled.text`
  font-size: 5px;
  font-family: elvetica;
`;

// const Home = () => {
//   <div>
//     return <image src={background.image} alt="background" />
//     <MainWrapper>Home</MainWrapper>
//   </div>;
// };

// export default Home;

// const MainWrapper = styled.div`
//   position: relative;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: blue;
// `;
