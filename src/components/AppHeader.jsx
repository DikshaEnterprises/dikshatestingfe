import React, { useState } from "react";
import { Menu, X, ChevronDown, Mail } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";

function AppHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProductClick = () => {
        setIsProductOpen(false);
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="bg-white text-gray-800 shadow-md">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src="/images/logo2.png"
                                alt="Logo"
                                className="h-8 w-8 object-contain"
                            />
                            <span className="text-xl font-bold text-[#ea5430]">
                                Diksha Enterprises
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-gray-700 hidden md:block"
                            title="Let's Connect"
                        >
                            <Mail className="w-5 h-5" />
                        </button>
                        <button
                            className="md:hidden text-[#ea5430]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Navigation */}
                <nav
                    className={`${isMenuOpen ? "block" : "hidden"
                        } md:flex md:items-center md:justify-center px-4 pb-4 md:pb-0 md:px-0`}
                >
                    <ul className="space-y-2 md:space-y-0 md:flex md:gap-6">
                        <li>
                            <Link to="/" className="text-gray-700 hover:text-[#ea5430] font-medium block">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-700 hover:text-[#ea5430] font-medium block">
                                About
                            </Link>
                        </li>

                        {/* Product Dropdown */}
                        <li
                            className="relative group md:hover:bg-transparent"
                            onClick={() => setIsProductOpen(!isProductOpen)}
                        >
                            <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-[#ea5430] font-medium">
                                Product <ChevronDown size={16} />
                            </div>
                            <ul
                                className={`ml-4 mt-2 space-y-1 md:absolute md:left-0 md:top-full md:bg-white md:rounded-md md:p-2 md:shadow-lg md:mt-0 md:w-52 z-50 border border-gray-200 ${isProductOpen ? "block" : "hidden"
                                    } md:group-hover:block`}
                            >
                                {[
                                    "E-Rickshaw",
                                    "Tri-Cycle Garbage Rickshaw",
                                    "Plastic Bailing Machine",
                                    "Plastic 660L wheel Dustbin",
                                    "Industrial Safety Equipment",
                                    "Garbage Tipper Trucks",
                                ].map((item) => (
                                    <li key={item}>
                                        <Link
                                            to={`/product/${encodeURIComponent(item)}`}
                                            className="block px-3 py-1 text-gray-700 hover:bg-[#ea5430] hover:text-white rounded-md transition-colors"
                                            onClick={handleProductClick}
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li>
                            <Link to="/blog" className="text-gray-700 hover:text-[#ea5430] font-medium block">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/career" className="text-gray-700 hover:text-[#ea5430] font-medium block">
                               Recruitment
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-700 hover:text-[#ea5430] font-medium block">
                                Contact
                            </Link>
                        </li>

                        {/* Let’s Connect (Mobile Menu) */}
                        <li className="md:hidden">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="text-gray-700 hover:text-[#ea5430] flex items-center gap-1 font-medium"
                            >
                                <Mail size={18} /> Let's Connect
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Modal for Let’s Connect */}
            <Dialog
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                className="fixed z-50 inset-0 overflow-y-auto"
            >
                <div className="flex items-center justify-center min-h-screen px-4">
                    <Dialog.Panel className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                        <Dialog.Title className="text-xl font-bold mb-4 text-gray-900">
                            Let's Connect
                        </Dialog.Title>
                        <div className="text-gray-700 space-y-3">
                            <p>
                                <strong>📍 Address:</strong> Ground Floor, 298 Vashudeo Villa,
                                Priyadarshi Nagar, Road No:1, Bhagwat Nagar, Patna-800026
                            </p>
                            <p><strong>📞 Contact:</strong> +91-8062181216</p>
                            <p><strong>✉️ Email:</strong> diksha160520@gmail.com</p>
                        </div>
                        <div className="mt-6 text-right">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-[#ea5430] text-white rounded hover:bg-[#c43b1b]"
                            >
                                Close
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}

export default AppHeader;
