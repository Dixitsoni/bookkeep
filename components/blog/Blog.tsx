
const blogPosts = [
    {
        title: "How Your Firm Defines CAS Will Determine Your Growth Strategy",
        date: "November 25, 2021",
        image: "/images/business-trainer-explainig.jpg", // Replace with actual image URLs
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
        readMore: "#"
    },
    {
        title: "How Bookkeeping Fits Into CAS & Why You Should Set it to Autopilot",
        date: "November 25, 2021",
        image: "/images/analyzing-financial-diagram.jpg", // Replace with actual image URLs
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
        readMore: "#"
    },
    {
        title: "Want Happy Accounting Clients? These Strategies Will Help You",
        date: "November 25, 2021",
        image: "/images/managers-working.jpg", // Replace with actual image URLs
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
        readMore: "#"
    }
];

const BlogSection = () => (
    <div className="max-w-screen-xl mx-auto py-16 px-4">
        <div className="text-center mb-10">
            <div className="text-lg text-gray-600 mb-1">Our Blog</div>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-2"></div>
            <h2 className="text-4xl font-bold text-blue-900 mb-3">Latest Blog & Articles</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
                <div key={i} className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
                    <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">{post.title}</h3>
                        <div className="text-gray-500 text-sm mb-2">{post.date}</div>
                        <p className="text-gray-600 mb-4 flex-grow">{post.description}</p>
                        <a href={post.readMore} className="text-blue-500 flex items-center gap-2 hover:underline">
                            Read More <span>→</span>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default BlogSection;
