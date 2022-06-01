import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";

const Confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropOffCoordinates, setDropOffCoordinates] = useState();
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const getPickupCoordinates = async (pickup) => {
    await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZWxvemlub28iLCJhIjoiY2wzdTM1Z3U4MDkwMTNrcXAydDJvYWdzOCJ9.H3V0PUVL5f2O3r6-8upaSQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPickupCoordinates(data.features[0].center);
      });
  };
  const getDropOffCoordinates = async (dropoff) => {
    const dropOff = ["Los Angeles"];
    await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZWxvemlub28iLCJhIjoiY2wzdTM1Z3U4MDkwMTNrcXAydDJvYWdzOCJ9.H3V0PUVL5f2O3r6-8upaSQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDropOffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    // getPickupCoordinates(pickup);
    // getDropOffCoordinates(dropoff)
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <RideContainer>
        <RideSelector />
        <ConfirmContainer>Confirm UberXZ</ConfirmContainer>
      </RideContainer>
    </Wrapper>
  );
};

const Wrapper = tw.div`
flex flex-col h-screen
`;
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;
const ConfirmContainer = tw.div`
bg-black p-4 text-white text-center text-xl mx-2 rounded-lg my-2
`;
export default Confirm;
