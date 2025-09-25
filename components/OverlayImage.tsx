// app/page.tsx (Next.js 13 App Router)
// or pages/index.tsx if using Pages Router

import Image from "next/image";

export default function OverLayImage() {
    return (
        <section className="relative bg-[#fff9f6]">
            {/* Image Overlay Section */}
            <div className="relative max-w-6xl mx-auto -mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
                <div className="shadow-lg rounded-lg overflow-hidden">
                    <Image
                        src="/images/accounting1.jpg"
                        alt="Team working"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>

                <div className="shadow-lg rounded-lg overflow-hidden md:translate-y-10">
                    <Image
                        src="/images/accounting2.jpg"
                        alt="Meeting"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>

                <div className="shadow-lg rounded-lg overflow-hidden">
                    <Image
                        src="/images/accounting3.jpg"
                        alt="Manager"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>

                <div className="shadow-lg rounded-lg overflow-hidden md:translate-y-10">
                    <Image
                        src="/images/accounting4.jpg"
                        alt="Team discussion"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
