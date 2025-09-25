// components/AboutSection.tsx
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* Left Image with Quote */}
        <div className="relative">
          <Image
            src="/images/business_team.jpg" // place your image in /public
            alt="Team"
            width={600}
            height={500}
            className="rounded-md h-full object-cover"
          />
          {/* Quote Box */}
          <div className="absolute bottom-6 left-6 bg-white shadow-lg p-6 max-w-sm">
            <p className="italic text-gray-600 border-l-2 border-teal-500 pl-3">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna”
            </p>
            <p className="mt-3 font-medium text-gray-800">Freddy Mcphee</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center">
          <p className="text-teal-600 font-medium mb-2">About Bizkeep</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#123463] mb-4">
            We Have 25 Years of Experience in <br /> Bookkeeping Service Company
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>

          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </p>

          {/* Checklist */}
          <ul className="space-y-3 mb-6">
            {[
              "Constant Improvement",
              "Commitment to Customers",
              "Best Quality You Can Get",
              "High Level Of Knowledge",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-800">
                <FaCheckCircle className="text-teal-500" />
                {item}
              </li>
            ))}
          </ul>

          {/* Features Box */}
          <div className="bg-[#123463] text-white p-6 rounded-md mb-6">
            <h4 className="font-semibold text-lg">Advanced Analytics</h4>
            <p className="text-sm text-gray-200 mb-4">
              Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo
            </p>

            <h4 className="font-semibold text-lg">Certified Company</h4>
            <p className="text-sm text-gray-200">
              Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo
            </p>
          </div>

          {/* Footer with Button & Author */}
          <div className="flex items-center justify-between">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 font-medium rounded-sm shadow">
              More About Us
            </button>
            <div>
              <p className="font-medium text-gray-800">Freddy Mcphee</p>
              <p className="text-sm text-gray-500">CEO Bizkeep</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
