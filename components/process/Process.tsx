import { FaCalendarAlt, FaUsers, FaHandshake } from 'react-icons/fa';

export default function ProcessSection() {
    return (
        <section className="max-w-6xl mx-auto pt-16 pb-10 px-4">
            {/* Title & Text */}
            <div className="text-center mb-12">
                <div className="text-lg text-gray-600 mb-2">Our Process</div>
                <div className="w-16 h-1 mx-auto bg-blue-500 mb-2"></div>
                <h2 className="text-4xl font-bold text-blue-900 mb-3">Easy Steps To Get Your Solutions</h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </div>
            {/* Steps numbers with dashed border */}
            <div className="flex justify-between items-center relative mb-10">
                <div className="flex-1 flex justify-center">
                    <span className="bg-teal-500 text-white font-bold text-xl w-20 h-20 rounded-full flex items-center justify-center shadow-md">
                        01.
                    </span>
                </div>
                {/* <div className="absolute top-1/2 left-[15%] right-[15%] border-t-2 border-dashed border-gray-300 z-0"></div> */}
                <div className="flex-1 flex justify-center">
                    <span className="bg-teal-500 text-white font-bold text-xl w-20 h-20 rounded-full flex items-center justify-center shadow-md">
                        02.
                    </span>
                </div>
                <div className="flex-1 flex justify-center">
                    <span className="bg-teal-500 text-white font-bold text-xl w-20 h-20 rounded-full flex items-center justify-center shadow-md">
                        03.
                    </span>
                </div>
            </div>
            {/* Steps cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white shadow-xl rounded-xl py-10 px-6 text-center flex flex-col items-center">
                    <FaCalendarAlt className="text-teal-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Make An Appointment</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exerci</p>
                </div>
                <div className="bg-blue-900 shadow-xl rounded-xl py-10 px-6 text-center flex flex-col items-center">
                    <FaUsers className="text-teal-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Get Consultation</h3>
                    <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exerci</p>
                </div>
                <div className="bg-white shadow-xl rounded-xl py-10 px-6 text-center flex flex-col items-center">
                    <FaHandshake className="text-teal-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Your Problem Solved</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exerci</p>
                </div>
            </div>
        </section>
    );
}
