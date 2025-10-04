import React from "react";

interface TeamCardProps {
    image: string;
    name: string;
    role: string;
    description?: string;
    dark?: boolean;
}

// Card Component for Team Members
const TeamCard: React.FC<TeamCardProps> = ({ image, name, role, description, dark }) => {
    return (
        <div
            className={`rounded-lg shadow-md p-4 text-center ${dark ? "bg-[#2F3A56] text-white" : "bg-white"
                }`}
        >
            <img
                src={image}
                alt={name}
                className="w-28 h-28 object-cover rounded-md mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm font-medium">{role}</p>
            {description && (
                <p className="text-sm mt-2 opacity-80">{description}</p>
            )}
        </div>
    );
};

const TeamPage = () => {
    return (
        <div className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
            {/* Founding Members */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#2F3A56] mb-2">
                    The Founding Members
                </h2>
                <p className="text-gray-600 mb-6 max-w-3xl">
                    The backbone, the core team, the family of seasoned Chartered
                    Accountants, the team that makes it happen.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <TeamCard
                        image="/founder1.jpg"
                        name="Jeet Chaudhary"
                        role="Founder & CEO"
                        description="The visionary founder – Empowering Clients with Accounting Success"
                        dark
                    />
                    <TeamCard
                        image="/founder2.jpg"
                        name="Jaymin Chaudhary, FCA"
                        role="Director"
                        description="Guiding Excellence in Finance. Director with 30+ Years of Insight"
                        dark
                    />
                    <TeamCard
                        image="/founder3.jpg"
                        name="Jaisha Shah, FCA"
                        role="Director"
                        description="Experienced CA & Guiding Startup's Vision & Values"
                        dark
                    />
                    <TeamCard
                        image="/founder4.jpg"
                        name="Anmol Chaudhary"
                        role="Director"
                        description="Strategic Leader Driving Innovation & Client Success"
                        dark
                    />
                </div>
            </section>

            {/* Accounting Team */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-[#2F3A56] mb-2">
                    Accounting Team
                </h2>
                <p className="text-gray-600 mb-6 max-w-3xl">
                    The accurate, the precise, the analytical. The team that makes sure
                    that bank accounts and records do agree.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <TeamCard image="/acc1.jpg" name="Shubham Jain" role="Senior Manager" />
                    <TeamCard image="/acc2.jpg" name="Jay Panchal" role="Senior Manager" />
                    <TeamCard image="/acc3.jpg" name="Pinal Khadvi" role="Senior Manager" />
                    <TeamCard image="/acc4.jpg" name="Bansi Joshi" role="Senior Manager" />
                </div>
            </section>

            {/* Tax & Advisory Board */}
            <section className="grid md:grid-cols-2 gap-12">
                {/* Tax Team */}
                <div>
                    <h2 className="text-2xl font-semibold text-[#2F3A56] mb-2">
                        Tax Team
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-3xl">
                        The confidential. The deadline-ready. The knowers of all rules &
                        regulations. The team that ensures your client’s tax returns are
                        filed on time.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <TeamCard image="/tax1.jpg" name="Aashi Kasliwal, EA" role="Tax Supervisor" />
                        <TeamCard image="/tax2.jpg" name="Yamini Nayak" role="Tax Supervisor" />
                    </div>
                </div>

                {/* Advisory Board */}
                <div>
                    <h2 className="text-2xl font-semibold text-[#2F3A56] mb-2">
                        Advisory Board
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-3xl">
                        The visionary. The strategic. The calculated. The leadership
                        excellence. The team that offers actionable insights.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <TeamCard image="/advisor1.jpg" name="Fabian Soto, CPA" role="Strategic Advisor" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamPage;
