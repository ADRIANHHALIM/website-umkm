import { FaMapMarkedAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Import ikon dari react-icons
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const address = "Jl. Bani Arsyad, Margasari Kota Tangerang";
  const phone = "+6281287928805";
  const email = "adrianhalim05@gmail.com";

  const handleMapClick = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const { name, message } = formData;
    const encodedMessage = encodeURIComponent(
      `Halo, QBIT ${name}.\n\n${message}\n\nTerima kasih.` // Auto teks yang berada di Whatsapp
    );
    const whatsappUrl = `https://wa.me/${phone.replace(/\+/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Sukses!",
      description: "Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Hubungi Kami
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div 
              className="flex items-start gap-4 cursor-pointer hover:text-primary transition-colors"
              onClick={handleMapClick}
            >
              <FaMapMarkedAlt className="text-primary text-2xl" />
              <div>
                <h3 className="font-semibold mb-1">Alamat</h3>
                <p className="text-secondary">{address}</p>
              </div>
            </div>
            <div 
              className="flex items-start gap-4 cursor-pointer hover:text-primary transition-colors"
              onClick={handleWhatsAppClick}
            >
              <FaWhatsapp className="text-primary text-2xl" />
              <div>
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <p className="text-secondary">{phone}</p>
              </div>
            </div>
            <div 
              className="flex items-start gap-4 cursor-pointer hover:text-primary transition-colors"
              onClick={handleEmailClick}
            >
              <FaEnvelope className="text-primary text-2xl" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-secondary">{email}</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
