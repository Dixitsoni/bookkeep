

const images = [
    "https://templatekit.jegtheme.com/bizkeep/wp-content/uploads/sites/214/2021/11/financial-services-e1638180715159.jpg", // Replace with real paths
    "https://templatekit.jegtheme.com/bizkeep/wp-content/uploads/sites/214/2021/11/business-team-collaboration-discussing-working-analysis-with-financial-data-and-marketing-growth-e1638181040353.jpg",
    "https://templatekit.jegtheme.com/bizkeep/wp-content/uploads/sites/214/2021/11/financial-statistics-e1638180991833.jpg",
    "https://templatekit.jegtheme.com/bizkeep/wp-content/uploads/sites/214/2021/11/business-team-casual-collaboration-discussing-working-analysis-with-financial-data-and-marketing-e1638180979952.jpg",
];

export default function LatestProject() {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center">
            {/* Header */}
            <div className="pt-12 pb-6 text-center">
                <div className="text-[#1387A4] text-2xl font-semibold border-b-4 border-[#1387A4] inline-block mb-4">Our Cases</div>
                <h1 className="text-2xl font-semibold mb-2">
                    Let’s See Our Latest Project
                </h1>
                <p className="text-gray-500 max-w-xl mx-auto text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </div>
            {/* Images Row */}
            <div className="w-full bg-blue-900 flex justify-center px-20 py-10 gap-8">
                {images.map((img, i) => (
                    <div key={i} className="bg-white rounded shadow overflow-hidden flex items-center justify-center">
                        <img src={img} alt={`project ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            {/* Testimonials */}
            <div className="w-full bg-blue-900 flex justify-center py-14 gap-12">
                <div className="bg-transparent w-96 text-white">
                    <h2 className="text-sm font-semibold">Testimonials</h2>
                    <div className="mt-3 text-2xl font-bold">We Are Trusted Over 16+ Countries Worldwide</div>
                    <p className="mt-2 text-gray-300 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                </div>
                <div className="bg-white rounded px-8 py-6 shadow w-96">
                    <p className="text-gray-600 italic mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam
                    </p>
                    <div className="flex items-center">
                        <img src="/path/to/avatar.png" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <div className="font-semibold text-gray-800">Gerald Flynn</div>
                            <div className="text-sm text-gray-500">Entrepreneur</div>
                        </div>
                    </div>
                    <div className="text-teal-500 text-3xl mt-3">”</div>
                </div>
            </div>
        </div>
    );
}
