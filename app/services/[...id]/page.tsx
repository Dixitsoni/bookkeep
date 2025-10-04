import React from "react";
import Layout from "../../layout/Layout";
import { FaFileInvoice, FaCalculator, FaDollarSign, FaChartBar, FaMoneyCheckAlt, FaCog, FaShieldAlt, FaChartLine, FaUserFriends, FaClock, FaTasks, FaTools } from "react-icons/fa";

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
                    <h1 className="text-3xl md:text-4xl font-bold">Services</h1>
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
                            <li className="text-teal-400 font-medium">Services</li>
                        </ol>
                    </nav>
                </div>
            </section>
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Our Outsource Accounting Services
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        Outsource all your accounting services to Stanfox experts & carry out all
                        your financial needs with precision & expertise.
                    </p>

                    {/* Grid Section */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-md p-6 text-left transition-all duration-300"
                            >
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
                            Benefits Of Outsourcing Accounting Services
                        </h2>
                        <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
                            Unlock efficiency, expertise & growth for your client’s business by
                            outsourcing your accounting services to Stanfox, hire accounting experts today.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 gap-10">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                {/* Icon inside green circle */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                    {benefit.icon}
                                </div>
                                {/* Text */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="min-h-screen bg-gray-50">
                {/* Header Bar */}
                <div className="bg-[#263054] py-4">
                    <div className="container mx-auto max-w-6xl flex justify-between items-center">
                        <span className="text-white text-lg font-semibold">
                            Streamline your finances today with expert outsource accounting services
                        </span>
                        <button className="bg-white px-5 py-2 rounded-lg text-[#263054] font-medium shadow">
                            Contact to Our Experts
                        </button>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-12 py-20">
                    {/* Left - Text */}
                    <div className="flex-1">
                        <h2 className="text-4xl font-semibold text-[#495682] mb-5">
                            Why Choose Stanfox For <br />
                            Outsourcing Accounting <br />
                            Services
                        </h2>
                        <p className="text-gray-500 max-w-xl mb-4">
                            Experience the Stanfox difference. Choose the perfect combo of expertise combined with adhering to the U.S. standards.
                        </p>
                        <a href="#" className="text-[#4A66C3] font-medium hover:underline">
                            Hire expert today &rarr;
                        </a>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <BenefitItem icon="🕒" text="Faster Turn Around Time" />
                            <BenefitItem icon="💡" text="10+ Years Of Experience" />
                            <BenefitItem icon="👥" text="45+ Dedicated Accountants" />
                            <BenefitItem icon="🛠️" text="Adept At Multiple Accounting Tools" />
                            <BenefitItem icon="📄" text="Flexible Working Models" />
                            <BenefitItem icon="💵" text="Cost-Efficient Services" />
                        </div>
                    </div>

                    {/* Right - Card */}
                    <div className="flex-1 flex justify-center">
                        <div className="bg-gradient-to-b from-green-50 to-green-100 rounded-3xl shadow-lg px-10 py-12 min-w-[370px] max-w-md w-full flex flex-col gap-7 border-[3px] border-gray-200">
                            <div className="flex gap-3 items-center">
                                <span className="bg-green-100 rounded-lg p-2"><svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" /></svg></span>
                                <span className="text-gray-700 font-semibold">Timeline</span>
                                <div className="ml-4 bg-gray-200 rounded-full h-2 w-24 flex items-center">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "60%" }} />
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-gray-200 w-12 h-12 rounded-lg" />
                                <div className="bg-white rounded p-2 w-3/4" />
                            </div>
                            <div className="bg-white flex items-center gap-3 px-5 py-3 rounded-lg">
                                <span className="bg-gray-200 p-2 rounded-full">⚙️</span>
                                <span className="bg-gray-200 p-2 rounded-full">💬</span>
                                <span className="bg-gray-200 p-2 rounded-full">📄</span>
                                <span className="bg-gray-200 p-2 rounded-full">🔄</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="bg-green-100 rounded-lg p-2">
                                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2M12 12v6m0 0l3-3m-3 3l-3-3" /></svg>
                                </span>
                                <div className="bg-white rounded p-3 w-24" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
