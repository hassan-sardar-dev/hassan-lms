import Image from "next/image";
import React from "react";
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";
import image1 from '@/public/images/B_K-removebg-preview.png'
import image2 from '@/public/images/Black Illustrated School Logo.png'
import image3 from '@/public/images/dashboard.png'
import image4 from '@/public/images/grid.png'
const App = () => (
  <Marquee>
    <Image src={image1} alt="fds"/>
    <Image src={image2} alt="fds"/>
    <Image src={image3} alt="fds"/>
    <Image src={image4} alt="fds"/>
    <Image src={image2} alt="fds"/>
  </Marquee>
);

export default App;