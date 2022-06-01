import Link from "next/link";
import React, { useState } from "react";
import tw from "tailwind-styled-components";

const Search = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  return (
    <Wrapper>
      <Link href="/" passHref>
        <ButtonContainer>Go Back</ButtonContainer>
      </Link>
      <InputContainer>
        <FromToIcons>
          <Circle />
          <Line />
          <Circle />
        </FromToIcons>
        <InputBoxes>
          <Input
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <Input
            placeholder="Where to?"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </InputBoxes>
        <AddIcon>+</AddIcon>
      </InputContainer>
      <SavedPlaces>SAVED PLACES</SavedPlaces>
      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff,
          },
        }}
        passHref
      >
        <ConfirmedLocation>Confirm Locations</ConfirmedLocation>
      </Link>
    </Wrapper>
  );
};

const Wrapper = tw.div`
bg-gray-200 h-screen
`;
const ButtonContainer = tw.div`
bg-white p-4 flex items-center text-2xl
`;
const InputContainer = tw.div`
flex bg-white items-center pb-2
`;
const FromToIcons = tw.div`
flex flex-col items-center justify-center w-10
`;
const Circle = tw.div`
w-3 h-3 bg-black rounded-full
`;
const Line = tw.div`
w-1 h-10 bg-black 
`;
const InputBoxes = tw.div`
flex flex-col justify-between flex-1
`;
const Input = tw.input`
h-10 bg-gray-200 my-2 px-3 outline-none border-none
`;
const AddIcon = tw.div`
h-10 w-10 bg-gray-200 rounded-full mx-2 text-4xl text-center
`;
const SavedPlaces = tw.div`
text-2xl bg-white px-4 py-2 text-center my-2
`;
const ConfirmedLocation = tw.div`
bg-black text-white text-center p-3 text-xl mx-2 mt-4
`;

export default Search;
