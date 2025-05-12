import React from "react";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Header Section */}
      <section className="bg-[#f3f4f6] text-black py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Trusted Government Supply Partner</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Diksha Enterprises is a leading supplier for Panchayati Raj Institutions, Municipal Corporations, and Urban Local Bodies.
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-[#ea5430]">About Diksha Enterprises</h2>
          <p className="text-lg text-gray-700 mb-6">
            Established in 2018, Diksha Enterprises has quickly become one of the most trusted suppliers for government institutions.
            Our robust presence on the Government e-Marketplace (GeM) has allowed us to cater to a wide range of government sectors.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We specialize in providing high-quality products and services to Panchayati Raj Institutions, Municipal Corporations, Urban Local Bodies, and government agencies across the nation. Our dedication to integrity, quality, and on-time execution has built strong relationships with several government bodies.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our passion for innovation drives us to constantly improve and adapt to the evolving needs of the public sector. Our products are designed to meet the highest standards, ensuring durability, reliability, and ease of use.
          </p>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="bg-[#f9fafb] py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-[#ea5430]">Our Focus Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[#ea5430] mb-4">Panchayat Level Installations</h3>
              <p className="text-gray-700">
                We provide and install dustbins, open gyms, and libraries at the Panchayat level, contributing to rural development and community welfare.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[#ea5430] mb-4">Municipal Equipment & Infrastructure</h3>
              <p className="text-gray-700">
                We supply equipment and infrastructure materials to Municipal Councils & Corporations, helping them meet the needs of urban communities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[#ea5430] mb-4">GeM Marketplace Expertise</h3>
              <p className="text-gray-700">
                As an active seller and buyer on the Government e-Marketplace (GeM), we streamline the procurement process for government projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[#ea5430] mb-4">Turnkey Government Solutions</h3>
              <p className="text-gray-700">
                From planning to execution, we offer turnkey solutions for government projects, ensuring the successful delivery of comprehensive services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise Section */}
      <section className="py-16 bg-[#f9fafb]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-[#ea5430]">Our Experience & Expertise</h2>
          <p className="text-lg text-gray-700 mb-6">
            With over 4 years in the industry, Diksha Enterprises has gained deep expertise in delivering high-quality, timely products for government bodies. Our team is well-versed with the intricacies of government procurement processes and e-Marketplace operations.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We have successfully completed projects across multiple sectors, including waste management, public health, and urban infrastructure, working closely with local governments and agencies to deliver solutions that benefit communities.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our team of experts is equipped to handle large-scale projects with a focus on efficiency, quality, and compliance with all government regulations.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#f9fafb] py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-[#ea5430]">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[#ea5430] mb-4">Integrity</h3>
              <p className="text-gray-700">
                We conduct all our business activities with transparency and ethical practices, building long-lasting trust with our clients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[#ea5430] mb-4">Efficiency</h3>
              <p className="text-gray-700">
                Our team ensures timely project execution with no compromise on quality. We prioritize getting the job done right and on time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[#ea5430] mb-4">High-Quality Products</h3>
              <p className="text-gray-700">
                We provide high-quality, durable products tailored to meet the specific needs of government projects, ensuring longevity and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-[#ea5430]">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-[30%]">
              <p className="text-gray-700 mb-4">
                "Diksha Enterprises has been a valuable partner for our projects. Their team is highly professional, and their products are top-notch."
              </p>
              <h4 className="text-lg font-semibold text-[#ea5430]">Rahul Kumar</h4>
              <p className="text-gray-500">Municipal Corporation</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-[30%]">
              <p className="text-gray-700 mb-4">
                "The team at Diksha Enterprises provided excellent service, and their punctuality and quality of work were exceptional."
              </p>
              <h4 className="text-lg font-semibold text-[#ea5430]">Rajesh Kumar</h4>
              <p className="text-gray-500">Panchayat Raj Institution</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-[30%]">
              <p className="text-gray-700 mb-4">
                "We have worked with Diksha Enterprises on several government projects, and they have always delivered beyond our expectations."
              </p>
              <h4 className="text-lg font-semibold text-[#ea5430]">Ram Verma</h4>
              <p className="text-gray-500">Urban Local Bodies</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}

export default AboutPage;
