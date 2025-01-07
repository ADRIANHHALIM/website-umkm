const products = [
  {
    id: 1,
    name: "Produk 1",
    description: "Deskripsi singkat tentang produk 1 dan manfaatnya.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
  {
    id: 2,
    name: "Produk 2",
    description: "Deskripsi singkat tentang produk 2 dan manfaatnya.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: 3,
    name: "Produk 3",
    description: "Deskripsi singkat tentang produk 3 dan manfaatnya.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Produk Kami
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-secondary">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;