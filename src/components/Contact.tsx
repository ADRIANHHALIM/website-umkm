import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Hubungi Kami
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary" />
              <div>
                <h3 className="font-semibold mb-1">Alamat</h3>
                <p className="text-secondary">
                  Jl. Contoh No. 123, Kota, Provinsi
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-primary" />
              <div>
                <h3 className="font-semibold mb-1">Telepon</h3>
                <p className="text-secondary">+62 123 4567 8900</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-primary" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-secondary">info@umkm.com</p>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Pesan
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
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