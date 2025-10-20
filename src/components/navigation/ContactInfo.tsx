import { Phone, MessageCircle } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="flex items-center space-x-4">
      <a href="tel:+15205551234" className="hidden md:flex items-center space-x-1 text-white hover:text-amber-500 transition">
        <Phone className="h-4 w-4" />
        <span>+1 (520) 223-7972</span>
      </a>
      <a href="https://wa.me/15205551234" className="flex items-center space-x-1 text-white hover:text-amber-500 transition">
        <MessageCircle className="h-4 w-4" />
        <span className="hidden md:inline">WhatsApp</span>
      </a>
    </div>
  );
}