import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Menghadirkan Kualitas Terbaik untuk Anda
          </h1>
          <p className="text-secondary text-lg md:text-xl mb-8">
            Kami berkomitmen untuk memberikan produk berkualitas tinggi dengan pelayanan yang memuaskan
          </p>
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Lihat Produk Kami
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;