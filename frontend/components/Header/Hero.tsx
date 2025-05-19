'use client'
import Head from 'next/head';
import Image from 'next/image';
import Snowfall from 'react-snowfall';
import '../../app/globals.css';
import dashboard from '@/public/images/dashboard.png';

export default function Hero() {
    return (
        <>
            <section className="relative min-h-screen w-full flex flex-col lg:flex-row items-center text-white overflow-hidden">
                <Head>
                    <title>Huly - Everything App for your teams</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                {/* ❄️ Snowfall Effect */}
                <Snowfall
                    snowflakeCount={40}
                    style={{
                        position: 'absolute',
                        width: '100vw',
                        height: '100vh',
                        zIndex: 10,
                        pointerEvents: 'none',
                    }}
                />

                {/* Left Half (Text Area) */}
                <div className="relative w-full lg:w-1/2 min-h-[60vh] lg:min-h-screen flex items-center justify-center">
                    <div className="bg-grid-pattern w-full h-full absolute top-0 left-0 z-[-10]" />

                    <div className="relative px-6 sm:px-10 lg:px-16 z-10 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="block whitespace-nowrap">Learn EveryThing</span>
                            <span className="text-[#8169ff] block">EveryTime</span>
                            <span className="relative inline-block">
                                EveryWhere.
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
                            </span>
                        </h1>
                        <div className="bg-[#8169FF] p-4 rounded-full w-96 absolute top-32 left-12   blur-3xl hidden lg:block" />
                    </div>
                </div>

                <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen flex items-center justify-center mt-10 lg:mt-0">
                    <Image
                        src={dashboard}
                        alt="Dashboard"
                        className="w-[100%]  rotate-0 lg:-rotate-45 rounded-2xl z-20 relative lg:absolute lg:-right-40 lg:top-14 object-cover"
                    />
                    <div className="bg-[#8169FF] p-4 rounded-full h-16 w-16 absolute bottom-[32%] right-[75%] animate-pulse blur-xl hidden md:block" />
                </div>
            </section>
        </>
    );
}
