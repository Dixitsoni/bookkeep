// components/Services.tsx

import { FC } from "react";
import {
    BookOpen,
    BarChart2,
    Wallet,
    PieChart,
    FileText,
    MessageSquare,
} from "lucide-react";

const services = [
    {
        title: "Accounting Services",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
        icon: <BookOpen className="w-10 h-10 text-orange-500" />,
    },
    {
        title: "Bank Reconciliations",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
        icon: <BarChart2 className="w-10 h-10 text-teal-500" />,
    },
    {
        title: "Bookkeeping & Payroll",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
        icon: <Wallet className="w-10 h-10 text-orange-500" />,
    },
    {
        title: "Audit & Assurance",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
        icon: <PieChart className="w-10 h-10 text-teal-500" />,
    },
    {
        title: "Financial Reporting",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
        icon: <FileText className="w-10 h-10 text-orange-500" />,
    },
    {
        title: "Advisory Services",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
        icon: <MessageSquare className="w-10 h-10 text-teal-500" />,
    },
];

const Services: FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-4xl mx-auto mt-10 text-center px-6">
                    <h2 className="text-[48px] font-bold text-slate-800">
                        We offer a full range of accounting<div className="block"> services for your business.</div>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-30">
                    {services.map((service, idx) => (
                        <div key={idx} className="flex items-start space-x-4">
                            <div>{service.icon}</div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">
                                    {service.title}
                                </h3>
                                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
