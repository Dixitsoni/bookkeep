"use client";

import { useEffect, useState } from "react";
import { FiUsers, FiFileText, FiThumbsUp } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";

export default function WhyChooseUs() {
    const [counts, setCounts] = useState({
        clients: 0,
        cases: 0,
        experience: 0,
        team: 0,
    });

    useEffect(() => {
        const targets = {
            clients: 2245,
            cases: 3452,
            experience: 25,
            team: 120,
        };

        const interval = setInterval(() => {
            setCounts((prev) => {
                const updated = { ...prev };
                Object.keys(targets).forEach((key) => {
                    const k = key as keyof typeof targets;
                    if (prev[k] < targets[k]) {
                        updated[k] = Math.min(prev[k] + Math.ceil(targets[k] / 100), targets[k]);
                    }
                });
                return updated;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#0a1c3a] text-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div>
                    <h4 className="text-teal-400 font-semibold mb-2">Why Choose Us</h4>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        2,000+ Business Company Doing Bookkeeping On Bizkeep
                    </h2>
                    <p className="text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation.
                    </p>
                </div>

                {/* Right Feature Boxes */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white text-[#0a1c3a] p-6 rounded-md shadow-md font-semibold">
                        Professional Bookkeeper
                    </div>
                    <div className="bg-teal-500 text-white p-6 rounded-md shadow-md font-semibold">
                        Free Consultations
                    </div>
                    <div className="bg-teal-500 text-white p-6 rounded-md shadow-md font-semibold">
                        Saving You Time
                    </div>
                    <div className="bg-white text-[#0a1c3a] p-6 rounded-md shadow-md font-semibold">
                        Best Quality Service
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center px-6">
                <div className="bg-white text-[#0a1c3a] p-6 rounded-lg shadow-lg">
                    <FiUsers className="mx-auto text-4xl text-teal-500 mb-2" />
                    <h3 className="text-3xl font-bold">{counts.clients} +</h3>
                    <p className="text-gray-600">Happy Clients</p>
                </div>

                <div className="bg-white text-[#0a1c3a] p-6 rounded-lg shadow-lg">
                    <FiFileText className="mx-auto text-4xl text-teal-500 mb-2" />
                    <h3 className="text-3xl font-bold">{counts.cases} +</h3>
                    <p className="text-gray-600">Cases Completed</p>
                </div>

                <div className="bg-white text-[#0a1c3a] p-6 rounded-lg shadow-lg">
                    <FiThumbsUp className="mx-auto text-4xl text-teal-500 mb-2" />
                    <h3 className="text-3xl font-bold">{counts.experience} +</h3>
                    <p className="text-gray-600">Years Of Experience</p>
                </div>

                <div className="bg-white text-[#0a1c3a] p-6 rounded-lg shadow-lg">
                    <MdOutlineAccessTime className="mx-auto text-4xl text-teal-500 mb-2" />
                    <h3 className="text-3xl font-bold">{counts.team} +</h3>
                    <p className="text-gray-600">Professional Team</p>
                </div>
            </div>
        </section>
    );
}
