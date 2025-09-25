// components/HeroSection.tsx
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full flex items-center bg-[#123463]">
      {/* Grid layout: left (content box), right (image) */}
      <div className="grid md:grid-cols-2 w-full h-[500px] md:h-[600px]">
        
        {/* Left Side - Content Box */}
        <div className="flex items-center justify-center p-20 md:p-12">
          <div className="bg-white p-8 md:p-12 shadow-lg max-w-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-[#123463] leading-snug">
              Bookkeeping <br />
              Services To Evolve <br />
              Your <span className="text-teal-500">CAS P</span>
            </h1>
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
              ad minim nostrud
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-6">
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-sm shadow">
                Contact Us
              </button>

              <button className="flex items-center gap-2 text-[#123463] font-medium">
                <span className="w-10 h-10 flex items-center justify-center border-2 border-teal-500 text-teal-500 rounded-full">
                  <FaPlay size={14} />
                </span>
                Watch Video
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full">
          <Image
            src="/images/business_conference.jpg" // replace with your image file in public/
            alt="Team working"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
