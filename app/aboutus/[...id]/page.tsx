import React from "react";
import Layout from "../../layout/Layout";
import { FiTarget, FiAward } from "react-icons/fi";
import AboutSection from "@/components/about/About";
import StatsSection from "@/components/StatSection";
import LatestProject from "@/components/ourCase/OurCase";
import TeamPage from "@/components/teamCard/TeamCard";
import Link from "next/link";

const AboutPage = () => {
    return (
        <Layout>
            <section
                className="relative h-[250px] flex items-center justify-center text-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('/images/manager_working.jpg')", // replace with your image path
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10 text-white">
                    <h1 className="text-3xl md:text-4xl font-bold">About US</h1>
                    <nav className="mt-2 text-sm">
                        <ol className="flex justify-center space-x-2">
                            <li>
                                <Link href="/" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <span className="text-teal-400">›</span>
                            </li>
                            <li className="text-teal-400 font-medium">About Us</li>
                        </ol>
                    </nav>
                </div>
            </section>
            <AboutSection />
            <div className="w-full bg-white max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-center gap-6 md:px-16 py-20">
                    {/* Vision & Mission */}
                    <div className="bg-white shadow-md p-8 rounded-md flex-1">
                        <div className="flex items-start space-x-3">
                            <FiTarget className="text-teal-500 text-3xl" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Our Vision & Mission
                                </h3>
                                <p className="text-gray-500 mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Awards & Recognition */}
                    <div className="bg-teal-500 shadow-md p-8 rounded-md flex-1 text-white">
                        <div className="flex items-start space-x-3">
                            <FiAward className="text-white text-3xl" />
                            <div>
                                <h3 className="text-xl font-semibold">Awards & Recognition</h3>
                                <p className="mt-2 text-gray-100">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <StatsSection />
            </div>
            <LatestProject />
            <TeamPage />
        </Layout>
    );
};


export default AboutPage;
