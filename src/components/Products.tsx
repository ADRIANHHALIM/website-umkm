import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import modern icons from react-icons

interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  image: string[]; // Image is an array
  specifications: string[];
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // State for the current image index

  // Static product data
  const products: Product[] = [
    {
      id: 1,
      name: "Produk 1",
      description: "Deskripsi singkat produk 1",
      longDescription: "Deskripsi lengkap produk 1 dengan detail spesifikasi dan keunggulan produk.",
      price: "Rp 100.000",
      image: ["/img/tes1.png", "/img/tes2.png", "/img/tes3.png", "/img/tes4.png", "/img/tes5.png"],
      specifications: ["Spesifikasi 1", "Spesifikasi 2", "Spesifikasi 3"]
    },
  ];

  // Handle next image
  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProduct.image.length);
    }
  };

  // Handle previous image
  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProduct.image.length) % selectedProduct.image.length);
    }
  };

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
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image[0]} // Display only the first image in the product list
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-secondary">{product.description}</p>
                <p className="text-primary font-semibold mt-4">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        {selectedProduct && (
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedProduct.name}</DialogTitle>
            </DialogHeader>
            <div className="mt-4 flex flex-col items-center">
              {/* Display the current image */}
              <div className="relative w-full">
                <img
                  src={selectedProduct.image[currentImageIndex]} // Show the image based on the current index
                  alt={`Image ${currentImageIndex + 1} of ${selectedProduct.name}`}
                  className="w-full h-64 object-cover rounded-lg"
                />

                {/* Invisible Navigation buttons with opacity of 70% */}
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity"
                >
                  <FaChevronLeft size={24} /> {/* Using modern icon */}
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity"
                >
                  <FaChevronRight size={24} /> {/* Using modern icon */}
                </button>
              </div>

              {/* Move text (price, longDescription, specifications) to the left */}
              <div className="text-left mt-4 w-full">
                <p className="text-lg font-semibold text-primary mb-2">
                  {selectedProduct.price}
                </p>
                <p className="text-gray-700 mb-4">
                  {selectedProduct.longDescription}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Spesifikasi:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedProduct.specifications.map((spec, index) => (
                      <li key={index} className="text-gray-600">{spec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Products;