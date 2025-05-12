import React from "react";
import { MapPin } from "lucide-react";

const projects = [
  {
    title: "200+ Outdoor Dustbins Supplied",
    location: "Gopalganj, Bihar",
    description:
      "We provided durable and weather-resistant dustbins to over 20 Panchayats to improve sanitation infrastructure.",
    image: "/images/dustbins.jpg",
    year: "2023",
  },
  {
    title: "Open Gym Equipment Installed in 50+ Panchayats",
    location: "Madhubani, Bihar",
    description:
      "Promoting community health by delivering safe and weather-proof gym sets across multiple rural areas.",
    image: "/images/open-gym.jpg",
    year: "2023",
  },
  {
    title: "Public Library Setup",
    location: "Sitamarhi Municipal Council",
    description:
      "Fully functional library built with bookshelves, reading tables, lighting, and children’s section.",
    image: "/images/library.png",
    year: "2024",
  },
  {
    title: "Solar Street Lighting Project",
    location: "Samastipur, Bihar",
    description:
      "Installed eco-friendly solar streetlights in public zones ensuring safety and sustainability.",
    image: "/images/solar-light.jpg",
    year: "2024",
  },
];

const OurProjects = () => {
  return (
    <section className="relative py-16 px-4 md:px-16 bg-gray-50 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/dustbins.jpg')" }}
      ></div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ea5430] mb-12">
          Our Key Projects
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8 bg-white/80 rounded-2xl shadow-md p-4 md:p-6`}
            >
              <div className="md:w-1/2 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <span className="text-sm text-[#ea5430] font-medium">{project.year}</span>
                <h3 className="text-2xl font-semibold text-gray-800 mt-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-3">{project.description}</p>
                <div className="flex items-center text-sm text-[#ea5430] mt-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
