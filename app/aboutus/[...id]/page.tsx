import React from "react";
import Layout from "../../layout/Layout";
import { FiTarget, FiAward, FiUsers } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FaThumbsUp, FaFileInvoice, FaCalculator, FaDollarSign, FaChartBar, FaMoneyCheckAlt, FaCog, FaShieldAlt, FaChartLine, FaUserFriends, FaClock, FaTasks, FaTools } from "react-icons/fa";
import AboutSection from "@/components/about/About";
import StatsSection from "@/components/StatSection";
import LatestProject from "@/components/ourCase/OurCase";
import TeamPage from "@/components/teamCard/TeamCard";

const services = [
    {
        icon: <FaFileInvoice className="text-4xl text-gray-600" />,
        title: "AR & AP Management",
        description:
            "We manage your AR & AP, ensuring efficient cash flow & timely transactions for smooth business operations.",
    },
    {
        icon: <FaCalculator className="text-4xl text-gray-600" />,
        title: "Bookkeeping",
        description:
            "Our team at Stanfox handles all aspects of bookkeeping, holding explicit records, giving a clear picture your client’s financial health.",
    },
    {
        icon: <FaDollarSign className="text-4xl text-gray-600" />,
        title: "Bank Reconciliation",
        description:
            "Our accounting experts will verify your bank reconciliations, aligning your financial records with your bank statements.",
    },
    {
        icon: <FaChartBar className="text-4xl text-gray-600" />,
        title: "Financial Reporting & Analysis",
        description:
            "Offering clear insights with detailed reporting, our accounting professionals will help your client’s make informed decision.",
    },
    {
        icon: <FaMoneyCheckAlt className="text-4xl text-gray-600" />,
        title: "Payroll Processing",
        description:
            "Want to streamline the entire payroll system for your clients? Our payroll experts will get it done with complete accuracy & promptly.",
    },
    {
        icon: <FaCog className="text-4xl text-gray-600" />,
        title: "Tax Preparation & Filing",
        description:
            "Turn your chaotic tax filings into a smooth-ride, choose Stanfox outsource accounting services & maximize potential deductions.",
    },
];

const benefits = [
    {
        icon: <FaShieldAlt className="text-xl text-gray-800" />,
        title: "Helps You Focus On High-Value Tasks",
        description:
            "Our Stanfox professionals will help you focus on high-value task, while they take care of other accounting stuffs.",
    },
    {
        icon: <FaChartLine className="text-xl text-gray-800" />,
        title: "Raise Profit Levels",
        description:
            "Boost profit level & identify avenues for cost-saving opportunities with our meticulous accounting services.",
    },
    {
        icon: <FaUserFriends className="text-xl text-gray-800" />,
        title: "Access To Stanfox Talent Pool",
        description:
            "Outsourcing gives you access to our skilled accounting professionals, bringing varied expertise to your firm.",
    },
    {
        icon: <FaClock className="text-xl text-gray-800" />,
        title: "Optimize Accounting Workflow",
        description:
            "Outsourcing to us means smoother workflows & faster operations & total optimization of accounting process.",
    },
    {
        icon: <FaTasks className="text-xl text-gray-800" />,
        title: "Helps You Focus On High-Value Tasks",
        description:
            "With your accounting needs in expert hands, boost your CPA’s accounting efficiency & drive your firm’s success.",
    },
    {
        icon: <FaTools className="text-xl text-gray-800" />,
        title: "Profound Knowledge Of Accounting Tools",
        description:
            "Our team is well-versed in the latest accounting software & tools, affirming accurate & efficient financial control.",
    },
];

const ServicePage = () => {
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
                                <a href="/" className="hover:underline">
                                    Home
                                </a>
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


const BenefitItem = ({ icon, text }: any) => (
    <div className="flex items-center gap-3">
        <span className="bg-green-50 border border-green-200 rounded-full w-10 h-10 flex items-center justify-center text-lg">{icon}</span>
        <span className="text-gray-700">{text}</span>
    </div>
);

export default ServicePage;
