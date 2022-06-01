import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";
import Logo from "../../assets/images/profile.png";

const RideSelector = () => {
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        <Car>
          <Image src={Logo} alt="image" width="50" height="50" />
          <CarDetails>
            <Service>UberXZ</Service>
            <Time>5 mins away</Time>
          </CarDetails>
          <Price>$24.00</Price>
        </Car>
        <Car>
          <Image src={Logo} alt="image" width="50" height="50" />
          <CarDetails>
            <Service>UberXZ</Service>
            <Time>5 mins away</Time>
          </CarDetails>
          <Price>$24.00</Price>
        </Car>
        <Car>
          <Image src={Logo} alt="image" width="50" height="50" />
          <CarDetails>
            <Service>UberXZ</Service>
            <Time>5 mins away</Time>
          </CarDetails>
          <Price>$24.00</Price>
        </Car>
        <Car>
          <Image src={Logo} alt="image" width="50" height="50" />
          <CarDetails>
            <Service>UberXZ</Service>
            <Time>5 mins away</Time>
          </CarDetails>
          <Price>$24.00</Price>
        </Car>
        <Car>
          <Image src={Logo} alt="image" width="50" height="50" />
          <CarDetails>
            <Service>UberXZ</Service>
            <Time>5 mins away</Time>
          </CarDetails>
          <Price>$24.00</Price>
        </Car>
        <Car>
          <Image src={Logo} alt="image" width="50" height="50" />
          <CarDetails>
            <Service>UberXZ</Service>
            <Time>5 mins away</Time>
          </CarDetails>
          <Price>$24.00</Price>
        </Car>
      </CarList>
    </Wrapper>
  );
};

const Wrapper = tw.div`
flex-1 flex flex-col overflow-y-scroll
`;
const Title = tw.div`
text-gray-500 text-center p-2
`;
const CarList = tw.div`
overflow-y-scroll
`;
const Car = tw.div`
flex items-center mx-4 mb-1
`;
const CarDetails = tw.div` flex-1 ml-2
`;
const Service = tw.div`
font-medium text-xl
`;
const Time = tw.div`
text-xs text-blue-500 mt-2
`;
const Price = tw.div`
text-sm font-medium
`;

export default RideSelector;
