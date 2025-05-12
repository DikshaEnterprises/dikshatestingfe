import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Dialog } from "@headlessui/react";

const productData = {
    "E-Rickshaw": {
      title: "E-Rickshaw",
      description: `
        The E-Rickshaw is more than just a vehicle — it's a revolution in urban mobility. Powered by a cutting-edge electric motor, it combines environmental sustainability with reliable performance. We proudly manufacture high-performance E-Rickshaws tailored specifically for the needs of Bihar's roads and climate. Our E-Rickshaws are designed to deliver maximum efficiency, comfort, and durability—perfect for daily use in both urban and rural settings.
  
        Built with a reinforced steel chassis and heavy-duty suspension, these vehicles are engineered to handle the uneven roads, potholes, and narrow lanes common across districts like Patna, Gaya, Muzaffarpur, and more. The weather-resistant exterior protects against extreme summer heat, heavy monsoon rains, and dust—ensuring year-round reliability.
  
        Each unit is powered by a high-capacity lithium-ion battery offering a real-world range of up to 120 km on a single charge, and is compatible with battery swap stations for added convenience. 
        
        Ideal for short-distance travel, last-mile connectivity, and eco-conscious transportation, the E-Rickshaw offers an efficient alternative to petrol-powered vehicles. With zero emissions, noise-free operation, and low maintenance costs, it is a top choice for fleet operators and individuals alike.
  
        Join the movement towards green, sustainable urban transport with the E-Rickshaw—where technology meets the future of mobility.
      `,
      images: ["/images/eRikshaw1.jpg", "/images/eRikshaw.jpg"],
      specCards: [
        {
          title: "Optimized for Bihar Terrain",
          description:
            "Built with high ground clearance and strong suspension for bumpy village roads and narrow city lanes in Bihar like Patna, Muzaffarpur, and Gaya.",
        },
        {
          title: "Long Range + Low Cost",
          description:
            "Runs up to 100 km on a single charge. Cost-effective for daily commutes and local transport. Battery swap compatible.",
        },
        {
          title: "Weather-Resistant Design",
          description:
            "Sturdy roof and waterproof body ideal for Bihar’s extreme summers and rainy monsoon seasons. Low maintenance even in harsh conditions.",
        },
        {
          title: "FAME Scheme Compatible",
          description:
            "Eligible under India’s FAME II subsidies. Fully compliant with local transport norms — ideal for commercial driving and fleet operations.",
        },
      ],
    },
  
    "Tri-Cycle Garbage Rickshaw": {
      title: "Tri-Cycle Garbage Rickshaw",
      description: `
        Designed for compact urban and rural waste management, the Tri-Cycle Garbage Rickshaw is an eco-conscious and cost-effective solution for daily municipal tasks. Its compact frame and pedal-assisted mobility make it ideal for narrow lanes, crowded areas, and places inaccessible to larger vehicles.
  
        We manufacture sturdy, customizable tri-cycle garbage rickshaws that can be operated manually or with assisted power, suitable for both municipalities and private sanitation contractors in Bihar. This model is widely used across towns like Samastipur, Motihari, Darbhanga, and Bhagalpur for door-to-door garbage collection and short-distance waste transportation.
  
        Crafted from high-strength tubular steel and coated with anti-rust enamel, these rickshaws offer long-lasting performance even under continuous daily use. It’s a great solution to meet Swachh Bharat goals with low upfront cost and zero fuel dependency.
  
        The Tri-Cycle Garbage Rickshaw is easy to operate, making it a favorite choice for municipal workers. It provides an efficient way to transport large volumes of waste while promoting cleanliness and hygiene in densely populated areas.
      `,
      images: [
        "/images/tricycle.webp",
        "/images/tricycle2.webp"
      ],
      specCards: [
        {
          title: "Compact & Easy to Maneuver",
          description:
            "Perfect for narrow streets and alleyways in Bihar towns and villages. Easily handles sharp turns and uneven pathways.",
        },
        {
          title: "High Load Capacity",
          description:
            "Equipped with a heavy-duty waste container for carrying up to 250 kg of garbage in a single trip. Leak-proof and easy to clean.",
        },
        {
          title: "Zero Fuel Cost",
          description:
            "Fully pedal-powered or optionally assisted with battery support. Saves daily fuel costs and is eco-friendly.",
        },
        {
          title: "Built for Daily Use",
          description:
            "Rugged frame, rust-resistant body, and low maintenance design. Made to handle heavy workloads in all seasons.",
        },
      ],
    },
  
    "Plastic Bailing Machine": {
      title: "Plastic Bailing Machine",
      description: `
        The Plastic Bailing Machine is designed to efficiently compress plastic waste into manageable bales for easy storage and transportation. This machine is ideal for industries that handle large volumes of plastic waste, helping reduce bulk and prepare it for recycling or disposal.
  
        Made with industrial-grade steel and advanced hydraulic systems, the Plastic Bailing Machine ensures long-lasting performance, even under the toughest working conditions. Its powerful compression system guarantees uniform bales, reducing storage costs and simplifying the logistics of waste management.
  
        It’s a perfect solution for recycling centers, waste management facilities, and even large factories producing high amounts of plastic waste. Whether you're processing PET bottles, plastic film, or mixed plastic waste, this machine can handle it all, making your operation cleaner and more efficient.
  
        With energy-efficient features, high output, and low maintenance costs, the Plastic Bailing Machine is a cost-effective investment for sustainable waste management solutions.
      `,
      images: [
        "/images/pbm.jpg",
        "/images/pbm1.jpg"
      ],
      specCards: [
        {
          title: "Powerful Compression",
          description:
            "High-pressure hydraulic system ensures maximum compression for easy transportation and efficient storage of plastic waste.",
        },
        {
          title: "Durable & Reliable",
          description:
            "Industrial-grade materials guarantee long-lasting performance and reduced maintenance costs, even with continuous use.",
        },
        {
          title: "Energy Efficient",
          description:
            "Designed to minimize energy consumption while maintaining optimal performance, making it a cost-effective solution for long-term use.",
        },
        {
          title: "Easy Operation",
          description:
            "User-friendly interface and automatic cycle operation make the machine easy to use, reducing the need for skilled labor.",
        },
      ],
    },
  
    "Plastic 660L wheel Dustbin": {
      title: "Plastic 660L wheel Dustbin",
      description: `
        The Plastic 660L Wheel Dustbin is a large-capacity waste container designed for efficient collection and disposal of garbage in residential, commercial, and industrial settings. Its heavy-duty plastic construction ensures durability, even under heavy loads, while the ergonomic design allows for easy movement and handling.
  
        Perfect for use in municipalities, parks, shopping malls, and large industries, this dustbin can handle up to 660 liters of waste. Its large wheels provide smooth mobility across various terrains, making it suitable for large-scale waste collection operations.
  
        The Plastic 660L Wheel Dustbin is designed to withstand harsh weather conditions and comes with a lid to prevent odor and contamination. It is easy to clean and maintain, ensuring hygiene and a clean environment.
  
        Ideal for waste segregation and transportation, this dustbin helps improve waste management efficiency and supports eco-friendly disposal practices.
      `,
      images: [
        "/images/dustbins1.webp",
        "/images/dusbin2.jpg"
      ],
      specCards: [
        {
          title: "Heavy Duty Plastic Construction",
          description:
            "Made from high-quality polyethylene, ensuring resistance to wear, impact, and UV rays, even in harsh environments.",
        },
        {
          title: "Large Capacity",
          description:
            "Can hold up to 660L of waste, reducing the need for frequent collection and making it suitable for high-traffic areas.",
        },
        {
          title: "Easy to Move",
          description:
            "Equipped with large wheels for easy maneuverability on rough surfaces, making waste collection efficient and convenient.",
        },
        {
          title: "Hygienic & Safe",
          description:
            "Comes with a lid to prevent odors, and is designed for easy cleaning, reducing the risk of contamination and maintaining a clean environment.",
        },
      ],
    },
  
    "Industrial Safety Equipment": {
      title: "Industrial Safety Equipment",
      description: `
        Ensuring worker safety in hazardous environments is critical, and our Industrial Safety Equipment is built to provide maximum protection and comfort. From helmets and gloves to safety shoes and protective clothing, our range of products meets international standards for workplace safety.
  
        Manufactured with advanced materials, these safety products are designed to withstand extreme working conditions, protecting workers from potential injuries, accidents, and environmental hazards. Our equipment is specifically tailored for industries such as manufacturing, construction, mining, and logistics.
  
        Each product in our safety range is tested for durability and performance, ensuring that it provides long-lasting protection. Whether it's flame-resistant clothing, chemical-resistant gloves, or high-visibility vests, our products ensure that workers remain safe while on the job.
  
        Invest in safety, protect your workforce, and comply with safety regulations with our top-of-the-line Industrial Safety Equipment.
      `,
      images: [
        "/images/indus.jpg",
        "/images/indus2.jpg"
      ],
      specCards: [
        {
          title: "High-Quality Materials",
          description:
            "Made from durable materials such as Kevlar, Gore-Tex, and polycarbonate, ensuring maximum protection against hazards.",
        },
        {
          title: "Certified for Safety",
          description:
            "Meets industry standards and regulations, ensuring compliance with safety laws and protecting workers from potential dangers.",
        },
        {
          title: "Comfort & Durability",
          description:
            "Designed for all-day comfort with ergonomic features, allowing workers to focus on the task at hand without feeling fatigued.",
        },
        {
          title: "Wide Range of Products",
          description:
            "Includes a complete range of safety gear including helmets, gloves, protective clothing, eye protection, and more.",
        },
      ],
    },
    "Garbage Tipper Trucks": {
  title: "Garbage Tipper Trucks",
  description: `
    The Garbage Tipper is a heavy-duty waste collection vehicle designed for large-scale waste management in urban and rural areas. Ideal for municipalities, large residential complexes, and commercial establishments, this vehicle is designed to easily transport large quantities of waste while minimizing manual labor.

    Built with a robust steel frame and a hydraulic tipping mechanism, the Garbage Tipper allows for quick unloading of waste, reducing time and effort. It’s engineered for easy dumping into larger waste bins or designated collection areas, ensuring high operational efficiency. With a large capacity ranging from 1.5 to 3 tons, it is well-suited for heavy-duty waste collection and transportation.

    The Garbage Tipper is equipped with large wheels, ensuring smooth transportation over rough terrains, potholes, and narrow streets. Its high-quality hydraulic system guarantees durability and reliability even under heavy usage, making it an essential tool for waste management operations.

    Designed for both municipal and private-sector use, this vehicle is an environmentally friendly alternative to fuel-heavy waste collection vehicles, offering a sustainable option for cities working towards reducing emissions. With its large payload, efficiency, and ease of operation, the Garbage Tipper is the ideal solution for reducing the cost of waste management.
  `,
  images: [
    "/images/garbagetruck.jpg",
    "/images/garbagetruck1.webp"
  ],
  specCards: [
    {
      title: "Heavy-Duty Construction",
      description:
        "Built with a strong steel frame to withstand heavy loads and tough environments, ensuring long-lasting durability and low maintenance costs.",
    },
    {
      title: "Hydraulic Tipping Mechanism",
      description:
        "Equipped with a hydraulic lift system that facilitates quick and efficient unloading of waste, making waste disposal more efficient.",
    },
    {
      title: "Large Capacity",
      description:
        "Can carry between 1.5 to 3 tons of waste, making it suitable for large-scale waste collection operations in urban and rural settings.",
    },
    {
      title: "Smooth Mobility",
      description:
        "Large, rugged wheels make the Garbage Tipper perfect for navigating rough roads, narrow lanes, and crowded areas without losing performance.",
    },
    {
      title: "Eco-Friendly Waste Collection",
      description:
        "A sustainable solution for waste collection, minimizing emissions and environmental impact compared to traditional fuel-powered vehicles.",
    },
  ],
},

  };
  
  

function ProductSubDivision() {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  const product = productData[decodedCategory];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" ,product:""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (product) {
      setFormData((prev) => ({
        ...prev,
        product: product.title, // Set the product title in formData
      }));
    }
  }, [product]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/lead-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setIsModalOpen(false);
        alert("Thank you! We'll get back to you shortly.");
      } else {
        alert("Submission failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    }
  };
  

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-800">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#ea5430]">Product Not Found</h2>
          <p className="mt-2 text-gray-500">We couldn't find what you're looking for.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-white text-gray-900 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-[#ea5430] mb-8">
              {product.title}
            </h1>
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line tracking-wide">
              {product.description}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-10 px-8 py-3 bg-[#ea5430] text-white rounded-full text-base font-semibold hover:bg-black transition-all duration-300 w-max shadow-md"
            >
              Get Quote Now
            </button>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {product.images.map((src, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.03] transition duration-300 border border-gray-200"
              >
                <img
                  src={src}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-[300px] md:h-[380px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Spec Cards */}
          <div className="col-span-1 md:col-span-2 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.specCards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-[#ea5430] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base tracking-wide">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Panel className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border-t-4 border-[#ea5430]">
            <Dialog.Title className="text-2xl font-bold text-[#ea5430] mb-6 text-center">
              We Will Call You Back With Details
            </Dialog.Title>
            <form onSubmit={handleSubmit} className="space-y-5 text-gray-700">
              <div>
                <label className="block mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ea5430]"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ea5430]"
                />
              </div>
              <input type="hidden" name="product" value={formData.product} />
              <div className="pt-4 text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#ea5430] text-white rounded-full hover:bg-black transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default ProductSubDivision;
