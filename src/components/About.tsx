const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Tentang Kami
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">
                Sejarah Kami
              </h3>
              <p className="text-secondary">
                Didirikan pada tahun 2024, kami telah berkomitmen untuk memberikan
                produk terbaik kepada pelanggan kami. Dengan pengalaman dan
                dedikasi tim kami, kami terus berinovasi dan berkembang.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">
                Visi & Misi
              </h3>
              <p className="text-secondary">
                Visi kami adalah menjadi UMKM terpercaya yang memberikan nilai
                tambah bagi masyarakat. Misi kami adalah menghadirkan produk
                berkualitas dengan harga yang terjangkau.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;