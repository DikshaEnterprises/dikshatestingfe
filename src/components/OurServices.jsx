import React from "react";
import {
  Trash2,
  Dumbbell,
  BookOpen,
  Sun,
  Sparkles,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    title: "Supply & Installation of Outdoor Dustbins",
    description:
      "Durable, weather-resistant dustbins for cities, panchayats, and public spaces to promote cleanliness and waste management.",
    icon: <Trash2 className="w-8 h-8 text-[#ea5430]" />,
  },
  {
    title: "Open Gym Equipment for Parks & Panchayats",
    description:
      "We provide robust and user-friendly gym equipment ideal for community parks and rural wellness initiatives.",
    icon: <Dumbbell className="w-8 h-8 text-[#ea5430]" />,
  },
  {
    title: "Public Library Setup (Rural & Urban)",
    description:
      "Design, furnish, and setup modern libraries equipped with essential books, e-resources, and furniture for educational upliftment.",
    icon: <BookOpen className="w-8 h-8 text-[#ea5430]" />,
  },
  {
    title: "Supply of LED & Solar Street Lights",
    description:
      "Eco-friendly and cost-effective lighting solutions for streets, rural areas, and government buildings.",
    icon: <Sun className="w-8 h-8 text-[#ea5430]" />,
  },
  {
    title: "Sanitization & Cleanliness Products",
    description:
      "Complete range of sanitizers, cleaning equipment, and hygiene tools for public safety and cleanliness drives.",
    icon: <Sparkles className="w-8 h-8 text-[#ea5430]" />,
  },
  {
    title: "Consultancy for GeM & Tender Participation",
    description:
      "Expert support for GeM portal registration, product uploads, and end-to-end government tender bidding.",
    icon: <ClipboardCheck className="w-8 h-8 text-[#ea5430]" />,
  },
];

const OurServices = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ea5430] mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We specialize in delivering tailored solutions for public welfare and
          infrastructure improvement with a commitment to quality and innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <div className="mb-4 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
