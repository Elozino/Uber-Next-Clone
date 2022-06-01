import Head from "next/head";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

import Logo from "../assets/images/uberlogo.svg";
import ProfileImage from "../assets/images/profile.png";
import Image from "next/image";

import classes from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Uber App</title>
      </Head>
      <Wrapper>
        <Map />
        <ActionItems>
          <Header>
            <Image src={Logo} alt="logo" height="50" width="100" />
            <Profile>
              <Name>Elozino Ovedhe</Name>
              <Image
                src={ProfileImage}
                alt="profile"
                height="50"
                width="50"
                quality={70}
                className={classes.profileImage}
              />
            </Profile>
          </Header>
          <ActionButtons>
            <Link href="/search" passHref>
              <ActionButton>
                <Image src={Logo} alt="" />
                Ride
              </ActionButton>
            </Link>
            <ActionButton>
              <Image src={Logo} alt="" />
              2-Wheel
            </ActionButton>
            <ActionButton>
              <Image src={Logo} alt="" />
              Reserve
            </ActionButton>
          </ActionButtons>
          <InputButton>Where To?</InputButton>
        </ActionItems>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
 flex-1 px-3
`;

const Header = tw.div`
  flex justify-between items-center py-4
`;

const Profile = tw.div`
  flex justify-between items-center mr-2
`;
const Name = tw.h1`
  mr-2 text-sm
`;
const ActionButtons = tw.div`
  flex
`;
const ActionButton = tw.div`
  text-base flex-1 bg-gray-200 m-1 h-32 flex flex-col items-center rounded-lg transform hover:scale-105 transition text-lg

`;

const ActionButtonImage = tw.img`
w-20 h-20
`;

const InputButton = tw.div`
 h-15 bg-gray-200 text-2xl p-4 flex items-center justify-center rounded-lg mt-8
`;
