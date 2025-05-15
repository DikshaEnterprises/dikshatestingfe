

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const jobRoles = {
  "Field Survey Executive": {},
  "Telecalling Executive": {},
  "Social Media Manager": {},
  "Area Coordinator": {},
  "Video Editor": {},
  "Graphic Designer": {},
  "Electronic Media Anchor": {},
};

function Career() {
   const navigate = useNavigate();
  return (
    <div className="bg-[#f9fafb] min-h-screen font-sans text-gray-800">
      {/* Header */}
      <section className="bg-[#1f2937] text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Notice Regarding Selection of special project work by Election Event Organisation</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Join Diksha Enterprises for a high-impact, opportunity and contributing to election administration.
        </p>
      </section>

      {/* Recruitment Table */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Available Job Roles</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-300 rounded-lg shadow text-sm md:text-base">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="p-4 border text-left">Recruitment</th>
                <th className="p-4 border text-center">Opening Date</th>
                <th className="p-4 border text-center">Closing Date</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(jobRoles).map((role, index) => (
                <tr key={role} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-4 border">
                    
                    <p className="mt-2 font-medium text-[#ea5430]">
                      Notice Regarding Selection of special project work by Election Event Organisation (Powered By Diksha Enterprises)
                    </p>
                    <p className="font-semibold text-[#ea5430]">{role}</p>
                    <ul className="mt-2 list-disc list-inside text-gray-700">
                      <li>
                        <a
                          href="/images/jd_diksha.pdf"
                          className="text-blue-600 font-semibold underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Click here to download Summary Notice
                        </a>
                      </li>
                      <li>
                        <span className="text-blue-600 font-semibold underline cursor-pointer"
                          onClick={() => navigate(`/ApplyNow/${role}`)}
                          >

                          Click here to Apply online (
                          <span className="animate-blink text-red-600 font-bold">21-05-2025</span>
                          )
                        </span>

                      </li>
                    </ul>
                  </td>
                  <td className="p-4 border text-center font-medium">21-05-25</td>
                  <td className="p-4 border text-center font-medium">31-05-25</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Form - Hidden for now */}
      {/*
      <section className="px-6 md:px-20 py-12">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl mt-10 p-8 max-w-4xl mx-auto space-y-6">
          ...form content here...
        </form>
      </section>
      */}

      {/* Tailwind extra styling */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          outline: none;
          transition: border 0.2s ease;
        }
        .input:focus {
          border-color: #ea5430;
          box-shadow: 0 0 0 1px #ea5430;
        }
      `}</style>
    </div>
  );
}

export default Career;
