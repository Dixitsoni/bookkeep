// components/StatsSection.tsx

import { CheckSquare, Heart, Globe2, User } from "lucide-react";

const stats = [
  { id: 1, icon: <CheckSquare className="w-8 h-8 text-orange-500" />, value: "789+", label: "Cases" },
  { id: 2, icon: <Heart className="w-8 h-8 text-orange-500" />, value: "128+", label: "Happy Clients" },
  { id: 3, icon: <Globe2 className="w-8 h-8 text-orange-500" />, value: "56+", label: "Countries" },
  { id: 4, icon: <User className="w-8 h-8 text-orange-500" />, value: "100+", label: "Team" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Let the numbers speak
        </h2>
        <p className="mt-4 text-slate-600">
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
          Vivamus elementum semper.
        </p>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-8 rounded-lg shadow text-center"
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-md bg-orange-50">
                {stat.icon}
              </div>
              <h3 className="mt-6 text-3xl font-bold text-slate-800">{stat.value}</h3>
              <p className="mt-2 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
