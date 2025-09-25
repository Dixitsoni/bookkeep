import Layout from "../layout/Layout";


const images = [
    "https://templatekit.jegtheme.com/bizkeep/wp-content/uploads/sites/214/2021/11/financial-services-e1638180715159.jpg", // Replace with real paths
    "https://templatekit.jegtheme.com/bizkeep/wp-content/uploads/sites/214/2021/11/business-team-collaboration-discussing-working-analysis-with-financial-data-and-marketing-growth-e1638181040353.jpg",
    "https://templatekit.jegtheme.com/bizkeep/wp-content/uploads/sites/214/2021/11/financial-statistics-e1638180991833.jpg",
    "https://templatekit.jegtheme.com/bizkeep/wp-content/uploads/sites/214/2021/11/business-team-casual-collaboration-discussing-working-analysis-with-financial-data-and-marketing-e1638180979952.jpg",
];

export default function CaseStudies() {
    return (
        <Layout>
            <div className="bg-white flex flex-col items-center">
                {/* Header */}
                <div className="pt-20 pb-6 text-center">
                    <div className="text-[#1387A4] text-2xl font-semibold border-b-4 border-[#1387A4] inline-block mb-4">Our Cases</div>
                    <h1 className="text-2xl font-semibold mb-2">
                        Let’s See Our Latest Project
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                </div>
                {/* Images Row */}
                <div className="w-full flex justify-center px-20 py-20 gap-8">
                    {images.map((img, i) => (
                        <div key={i} className="gap-10 bg-white rounded shadow overflow-hidden flex items-center justify-center">
                            <img src={img} alt={`project ${i + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
