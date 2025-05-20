'use client';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

import image1 from '@/public/images/B_K-removebg-preview.png';
import image2 from '@/public/images/Black Illustrated School Logo.png';
import image3 from '@/public/images/dashboard.png';
import image4 from '@/public/images/googlemeet.png';

const logos = [image1, image2, image3, image4, image1, image2, image3, image4];

const LogoMarquee = () => {
  return (
    <section className="bg-[#0F0F1B] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
         
         
          <span className="relative inline-block text-[#8169ff]">
            Power
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.5C40 0.5 150 0.5 199 5.5"
                stroke="#8169ff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span> by Innovation
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg mb-10">
          Join the growing ecosystem of tools and platforms that trust our unified learning experience.
        </p>

        <Marquee pauseOnHover={true} speed={40} gradient={false}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-10 flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <div className=" p-3 hover:shadow-lg transition-shadow">
                <Image
                  src={logo}
                  alt={`logo-${index}`}
                  width={100}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoMarquee;
