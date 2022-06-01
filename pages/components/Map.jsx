import React, { useEffect } from 'react'
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";


mapboxgl.accessToken =
  "pk.eyJ1IjoiZWxvemlub28iLCJhIjoiY2wzdTM1Z3U4MDkwMTNrcXAydDJvYWdzOCJ9.H3V0PUVL5f2O3r6-8upaSQ";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      // style: "mapbox://styles/mapbox/streets-v11",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });
  return (
    <Wrapper id="map"></Wrapper>
  )
}

const Wrapper = tw.div`
 flex-1
`;


export default Map