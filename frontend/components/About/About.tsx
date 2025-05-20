import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import image1 from '@/public/images/B_K-removebg-preview.png'
import image2 from '@/public/images/Black Illustrated School Logo.png'
import image3 from '@/public/images/dashboard.png'
import image4 from '@/public/images/googlemeet.png'
const App = () => (
  <Marquee>
    <Image src={image4} alt="fds" />
    <Image src={image4} alt="fds" />
    <Image src={image4} alt="fds" />
    <Image src={image4} alt="fds" />
    <Image src={image4} alt="fds" />
  </Marquee>
);

export default App;