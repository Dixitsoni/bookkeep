// components/ServicesSection.js

export default function ServicesSection() {
    return (
        <section className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="flex justify-center mb-10">
                <div className="text-center">
                    <div>
                        <p className="text-[#1387A4] text-2xl font-semibold border-b-4 border-[#1387A4] inline-block mb-4">
                            Our Services
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900">What Service We Offer</h2>
                    </div>
                    <p className="text-gray-600 my-6 md:mt-0 max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                    <button className="bg-[#1387A4] text-white px-5 py-2 rounded-md mt-6 md:mt-0 hover:bg-[#10708e] transition">
                        All Services
                    </button>
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-32">
                {/* Service Card 1 */}
                <div className="bg-white shadow-md rounded-md overflow-hidden">
                    <div className="h-60 w-full overflow-hidden">
                        <img
                            src="/images/strategy.jpg"
                            alt="Online Bookkeeping"
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                    <div className="p-6 text-center bg-white">
                        <div className="text-[#1387A4] mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Online Bookkeeping</h3>
                        <p className="text-gray-600 mb-4 text-sm px-2">
                            Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                        <a
                            href="#"
                            className="text-[#1387A4] text-sm font-medium hover:underline inline-flex items-center justify-center"
                        >
                            Read More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Service Card 2 */}
                <div className="bg-white shadow-md rounded-md overflow-hidden">
                    <div className="h-60 w-full overflow-hidden">
                        <img
                            src="/images/tax.jpg"
                            alt="Tax Preparation"
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                    <div className="p-6 text-center">
                        <div className="text-[#1387A4] mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Tax Preparation</h3>
                        <p className="text-gray-600 mb-4 text-sm px-2">
                            Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                        <a
                            href="#"
                            className="text-[#1387A4] text-sm font-medium hover:underline inline-flex items-center justify-center"
                        >
                            Read More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Service Card 3 */}
                <div className="bg-white shadow-md rounded-md overflow-hidden">
                    <div className="h-60 w-full overflow-hidden">
                        <img
                            src="/images/financial.jpg"
                            alt="Financial Planning"
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                    <div className="p-6 text-center">
                        <div className="text-[#1387A4] mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Financial Planning</h3>
                        <p className="text-gray-600 mb-4 text-sm px-2">
                            Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                        <a
                            href="#"
                            className="text-[#1387A4] text-sm font-medium hover:underline inline-flex items-center justify-center"
                        >
                            Read More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-md overflow-hidden">
                    <div className="h-60 w-full overflow-hidden">
                        <img
                            src="/images/financial.jpg"
                            alt="Financial Planning"
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                    <div className="p-6 text-center">
                        <div className="text-[#1387A4] mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Payroll Data Entry</h3>
                        <p className="text-gray-600 mb-4 text-sm px-2">
                            Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                        <a
                            href="#"
                            className="text-[#1387A4] text-sm font-medium hover:underline inline-flex items-center justify-center"
                        >
                            Read More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-md overflow-hidden">
                    <div className="h-60 w-full overflow-hidden">
                        <img
                            src="/images/financial.jpg"
                            alt="Financial Planning"
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                    <div className="p-6 text-center">
                        <div className="text-[#1387A4] mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Investment Planning</h3>
                        <p className="text-gray-600 mb-4 text-sm px-2">
                            Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                        <a
                            href="#"
                            className="text-[#1387A4] text-sm font-medium hover:underline inline-flex items-center justify-center"
                        >
                            Read More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-md overflow-hidden">
                    <div className="h-60 w-full overflow-hidden">
                        <img
                            src="/images/financial.jpg"
                            alt="Financial Planning"
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                    <div className="p-6 text-center">
                        <div className="text-[#1387A4] mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Accounts Outsourcing</h3>
                        <p className="text-gray-600 mb-4 text-sm px-2">
                            Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                        <a
                            href="#"
                            className="text-[#1387A4] text-sm font-medium hover:underline inline-flex items-center justify-center"
                        >
                            Read More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
