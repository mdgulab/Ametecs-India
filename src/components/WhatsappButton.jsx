import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/7386566625"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-[999]
        bg-green-500 text-white p-4 rounded-full shadow-xl
        hover:scale-110 transition
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
