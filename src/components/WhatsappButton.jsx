// components/WhatsAppButton.jsx
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = 'YOUR_PHONE_NUMBER'; // e.g., 919876543210

  return (
    <a
      href={`https://wa.me/${9334650638}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
