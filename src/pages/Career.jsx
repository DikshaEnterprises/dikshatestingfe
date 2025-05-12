// import React, { useState } from "react";
// import axios from "axios"; // Importing axios for HTTP requests

// const jobRoles = {
//   "Field Survey Executive": {
//     location: "Bihar (Field Work)",
//     work: "Booth level survey, voter data collection, and outreach.",
//     salary: "₹12,000 - ₹18,000/month + Performance Incentives",
//     tenure: "5–6 months",
//     fee: 350,
//   },
//   "Telecalling Executive": {
//     location: "Work from Home",
//     work: "Calling voters and data entry.",
//     salary: "₹10,000 - ₹14,000/month + Incentives on Conversion",
//     tenure: "5–6 months",
//     fee: 300,
//   },
//   "Social Media Manager": {
//     location: "Bihar (Field/Studio Work)",
//     work: "Managing outreach on Facebook, WhatsApp, Instagram. Includes post planning, engagement tracking.",
//     salary: "₹12,500 - ₹18,000/month + Bonus on Reach & Engagement",
//     tenure: "5–6 months",
//     fee: 400,
//   },
//   "Area Coordinator": {
//     location: "Bihar (District-wise)",
//     work: "Supervising teams, reporting progress, and area-level control.",
//     salary: "₹18,000 - ₹22,000/month + Team Performance Incentives",
//     tenure: "5–6 months",
//     fee: 500,
//   },
//   "Video Editor": {
//     location: "Bihar (Field/Studio Work)",
//     work: "Editing election campaign videos, creating short clips and ads.",
//     salary: "₹15,000 - ₹22,000/month + Performance Bonus",
//     tenure: "5–6 months",
//     fee: 450,
//   },
//   "Graphic Designer": {
//     location: "Bihar (Field/Studio Work)",
//     work: "Designing banners, social media posts, and promotional materials.",
//     salary: "₹12,000 - ₹18,000/month + Design Completion Bonus",
//     tenure: "5–6 months",
//     fee: 400,
//   },
//   "Electronic Media Anchor": {
//     location: "Bihar (Field/Studio Work)",
//     work: "Hosting live discussions, debates, news coverage & social media events.",
//     salary: "₹18,000 - ₹25,000/month + On-Air Performance Bonus",
//     tenure: "5–6 months",
//     fee: 500,
//   },
// };

// function Career() {
//   const [selectedPost, setSelectedPost] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     experience: "",
//     message: "",
//     resume: null,
//     referedBy: "",
//   });

//   const selectedRoleDetails = jobRoles[selectedPost];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, resume: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const formDataWithFile = new FormData();
//     formDataWithFile.append("fullName", formData.fullName);
//     formDataWithFile.append("email", formData.email);
//     formDataWithFile.append("phone", formData.phone);
//     formDataWithFile.append("experience", formData.experience);
//     formDataWithFile.append("message", formData.message);
//     formDataWithFile.append("selectedPost", selectedPost); // ✅ Important
//     formDataWithFile.append("resume", formData.resume);
//     formDataWithFile.append("appliedFor", selectedPost);
//     formDataWithFile.append("referedBy", formData.referedBy)

//     try {
//       const response = await axios.post("https://diksha-enterprises-backend.vercel.app/api/careerForm/submit", formDataWithFile, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       if (response.status === 201) {
//         alert("Application submitted successfully!");
//         setFormData({
//           fullName: "",
//           email: "",
//           phone: "",
//           experience: "",
//           message: "",
//           resume: null,
//         });
//         setSelectedPost(""); // Optional: reset dropdown
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Failed to submit application. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };



//   return (
//     <div className="bg-[#f9fafb] min-h-screen font-sans text-gray-800">
//       {/* Header */}
//       <section className="bg-[#1f2937] text-white py-16 text-center px-4">
//         <h1 className="text-4xl md:text-5xl font-bold mb-3">Bihar Vidhan Sabha 2025 Recruitment</h1>
//         <p className="text-lg md:text-xl max-w-3xl mx-auto">
//           Join Diksha Enterprises for a high-impact short-term opportunity contributing to election administration.
//         </p>
//       </section>

//       {/* Role Selection */}
//       <section className="py-14 px-6 md:px-20 text-center">
//         <h2 className="text-3xl font-semibold mb-6">Apply for a Role</h2>
//         <div className="max-w-md mx-auto">
//           <select
//             value={selectedPost}
//             onChange={(e) => setSelectedPost(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea5430]"
//           >
//             <option value="">-- Select a Post --</option>
//             {Object.keys(jobRoles).map((role) => (
//               <option key={role} value={role}>
//                 {role}
//               </option>
//             ))}
//           </select>
//         </div>
//       </section>

//       {/* Job Description */}
//       {selectedPost && (
//         <section className="px-6 md:px-20 pb-12">
//           <div className="bg-white shadow-m rounded-2xl p-10 max-w-4xl mx-auto border border-gray-200">
//             <h3 className="text-3xl font-bold mb-6 text-[#ea5430] flex items-center gap-2">
//               <span className="inline-block w-2 h-6 bg-[#ea5430] rounded-sm"></span>
//               {selectedPost}
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 text-[16px]">
//               <div className="flex items-start gap-3">
//                 <span className="text-xl">📍</span>
//                 <div><strong>Location:</strong> {selectedRoleDetails.location}</div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-xl">📝</span>
//                 <div><strong>Work:</strong> {selectedRoleDetails.work}</div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-xl">⏳</span>
//                 <div><strong>Tenure:</strong> {selectedRoleDetails.tenure}</div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-xl">💰</span>
//                 <div><strong>Salary:</strong> {selectedRoleDetails.salary}</div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-xl">💵</span>
//                 <div><strong>Application Fee:</strong> ₹{selectedRoleDetails.fee}</div>
//               </div>
//             </div>
//           </div>


//           {/* Application Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white shadow-md rounded-xl mt-10 p-8 max-w-4xl mx-auto space-y-6"
//           >
//             <div className="grid md:grid-cols-2 gap-6">
//               <input
//                 name="fullName"
//                 type="text"
//                 placeholder="Full Name"
//                 className="input"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Email Address"
//                 className="input"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 name="phone"
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="input"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 name="experience"
//                 type="text"
//                 placeholder="Experience (e.g. 2 years)"
//                 className="input"
//                 value={formData.experience}
//                 onChange={handleChange}
//               />
//               <input
//                 name="referedBy"
//                 type="text"
//                 placeholder="Referral ID (if any)"
//                 className="input"
//                 value={formData.referedBy}
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label className="block mb-2 font-semibold">Upload Resume (PDF/DOC)</label>
//               <input
//                 name="resume"
//                 type="file"
//                 accept=".pdf,.doc,.docx"
//                 className="input"
//                 onChange={handleFileChange}
//                 required
//               />
//             </div>

//             <textarea
//               name="message"
//               rows="4"
//               placeholder="Tell us why you're a good fit for this role"
//               className="input"
//               value={formData.message}
//               onChange={handleChange}
//             ></textarea>

//             <button
//               type="button"
//               disabled
//               className="bg-gray-400 w-full text-white py-3 px-6 rounded-lg font-semibold cursor-not-allowed"
//             >
//               Application opens from 15-05-2025
//             </button>

//           </form>
//         </section>
//       )}

//       {/* Tailwind extra styling */}
//       <style jsx>{`
//         .input {
//           width: 100%;
//           padding: 0.75rem;
//           border: 1px solid #d1d5db;
//           border-radius: 0.5rem;
//           outline: none;
//           transition: border 0.2s ease;
//         }
//         .input:focus {
//           border-color: #ea5430;
//           box-shadow: 0 0 0 1px #ea5430;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Career;

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
