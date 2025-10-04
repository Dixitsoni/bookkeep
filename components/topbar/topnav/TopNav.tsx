"use client";

import { JSX, useState } from "react";
import { FiChevronDown, FiMessageSquare, FiBookOpen, FiSettings, FiUsers, FiBriefcase, FiClipboard, FiHelpCircle } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

type ServiceCategory = "Business Owners" | "Valuation Services" | "Advisory Services";

type ServiceItem = {
    title: string;
    desc: string;
    icon: JSX.Element;
    path?: string;
};

const services: Record<ServiceCategory, ServiceItem[]> = {
    "Business Owners": [
        { title: "Accounting Outsourcing Services", desc: "CPA’s Go-To Firm For A-Z Accounting Needs", icon: <FiBookOpen />, path: '/services/Outsourcing' },
        { title: "Bookkeeping Services", desc: "Experienced Bookkeepers At Your Service", icon: <FiBookOpen />, path: '/services/bookkeeping' },
        { title: "Outsourced Tax Preparation", desc: "End-To-End Tax Preparation Support", icon: <FiBookOpen />, path: '/services/tax' },
        { title: "AR & AP Management", desc: "Comprehensive AR & AP Management Services", icon: <FiSettings />, path: '/services/ap_management' },
        { title: "Accounting Software Consulting", desc: "Helping Choose The Ideal Accounting Software", icon: <FiSettings />, path: '/services/software_consultant' },
        { title: "Payroll Management", desc: "Streamline Your CPA’s Payroll Processes", icon: <FiUsers />, path: '/services/payroll' },
        { title: "Virtual CFO", desc: "Flexible Virtual CFO Solutions", icon: <FiBriefcase />, path: '/services/virtual_cfo' },
        { title: "Xero & QuickBooks Accounting", desc: "Specialised Xero & QuickBooks Services", icon: <FiSettings />, path: '/services/xero_accounting' },
        { title: "Audit Support Services", desc: "Get Top-Notch Audit Support Service", icon: <FiUsers />, path: '/services/audit' },
        { title: "Cost & Operation Analysis", desc: "Drive Profitability & Make Data-Backed Decisions", icon: <FiBriefcase />, path: '/services/cost_analysis' },
        { title: "Year End Services", desc: "Smoothly Transition Into The New Fiscal Year", icon: <FiBookOpen />, path: '/services/year_end_services' },
        { title: "Preparation Of Financial Statements", desc: "Helping Keep Financial Statements Handy", icon: <FiBookOpen />, path: '/services/financial_statement' },
    ],
    "Valuation Services": [
        { title: "Business Valuation", desc: "Accurate & Professional Valuation Services", icon: <FiBriefcase />, path: '/services/business_valuation' },
        { title: "Financial Advisory", desc: "Expert Guidance For Business Growth", icon: <FiUsers />, path: '/services/financial' },
        { title: "Fractional CFO Service", desc: "On-Demand CFO Expertise", icon: <FiBriefcase />, path: '/services/fractional' },
    ],
    "Advisory Services": []
};

export default function TopNav() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<ServiceCategory>("Business Owners");

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <header className="w-full">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/images/logo.jpeg" alt="Logo" width={190} height={40} />
                </Link>

                {/* Navigation */}
                <nav className="flex items-center space-x-8 text-gray-800 font-medium">

                    {/* About Us dropdown */}
                    <div className="relative group">
                        {/* Menu Button */}
                        <button id="topnav" className="flex items-center cursor-pointer space-x-1 hover:text-gray-900">
                            <span>About Us</span>
                            <span><FiChevronDown /></span>
                        </button>

                        {/* Popup Menu */}
                        <div className="absolute top-full -left-10 hidden group-hover:block bg-white shadow-xl rounded-xl p-4 w-72 z-50">
                            <div className="flex flex-col space-y-4">
                                {/* Item 1 */}
                                <Link
                                    href="/aboutus/company"
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 text-xl">
                                        <FiHelpCircle />
                                    </div>
                                    <span className="text-gray-700 font-medium">Why Stanfox?</span>
                                </Link>

                                {/* Item 2 */}
                                <Link
                                    href="/aboutus/work"
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 text-xl">
                                        <FiSettings />
                                    </div>
                                    <span className="text-gray-700 font-medium">How We Work</span>
                                </Link>

                                {/* Item 3 */}
                                <Link
                                    href="/aboutus/team"
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 text-xl">
                                        <FiUsers />
                                    </div>
                                    <span className="text-gray-700 font-medium">Meet The Team</span>
                                </Link>

                                {/* Item 4 */}
                                <Link
                                    href="/aboutus/model"
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 text-xl">
                                        <FiClipboard />
                                    </div>
                                    <span className="text-gray-700 font-medium">Engagement Model</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Services mega dropdown */}
                    <div className="relative group">
                        <button
                            id="topnav"
                            onClick={() => toggleMenu("services")}
                            className="flex cursor-pointer items-center space-x-1 hover:text-gray-900"
                        >
                            <span>Services</span>
                            <FiChevronDown />
                        </button>

                        <div className="absolute top-full -left-20 hidden group-hover:flex bg-white shadow-xl rounded-xl p-4 w-[900px] z-50">

                            {/* Left Side Category */}
                            <div className="w-1/4 bg-gray-50 border-r">
                                {Object.keys(services).map((cat) => (
                                    <button
                                        key={cat}
                                        onMouseEnter={() => setActiveCategory(cat as ServiceCategory)}
                                        className={`block w-full text-left px-4 py-3 text-sm font-medium ${activeCategory === cat ? "bg-green-100 text-green-600" : "hover:bg-gray-100"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Right Side Services */}
                            <div className="w-3/4 grid grid-cols-2 gap-4 p-6">
                                {services[activeCategory].map((item, i) => (
                                    <Link
                                        key={i}
                                        href={item.path || '#'}
                                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition"
                                    >
                                        <div className="text-green-600 text-xl">{item.icon}</div>
                                        <div>
                                            <h4 className="font-semibold text-sm">{item.title}</h4>
                                            <p className="text-xs text-gray-500">{item.desc}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href="/case-studies" className="hover:text-gray-900">Cases</Link>
                    <Link href="/career" className="hover:text-gray-900">Career</Link>
                    <Link href="/contact" className="hover:text-gray-900">Contact Us</Link>
                </nav>

                {/* CTA Button */}
                <div className="bg-[#123463] text-white p-4 shadow-md flex items-center space-x-4 w-fit">
                    {/* Icon */}
                    <FiMessageSquare className="text-teal-400 text-4xl" />

                    {/* Text */}
                    <div>
                        <p className="text-base">Get Consultation</p>
                        <p className="text-lg font-bold">(021) 4582 - 3695</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
