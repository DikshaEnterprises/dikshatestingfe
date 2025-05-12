import React from "react";
import { ShieldCheck, TrendingUp, Users, Layers } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#ea5430]" />,
    title: "Trusted Quality",
    description: "We ensure top-notch product quality with rigorous testing and standards.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#ea5430]" />,
    title: "Proven Growth",
    description: "Year-over-year performance that reflects our customer-first approach.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#ea5430]" />,
    title: "Customer Focused",
    description: "Dedicated support and user-friendly solutions tailored to your needs.",
  },
  {
    icon: <Layers className="w-8 h-8 text-[#ea5430]" />,
    title: "Scalable Solutions",
    description: "Our offerings grow with your business, ensuring long-term value.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ea5430] mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          We strive to deliver excellence in every interaction. Here's what makes us stand out.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition hover:scale-[1.02]"
            >
              <div className="mb-4 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
