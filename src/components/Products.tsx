import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  specifications: string[];
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Static product data
  const products: Product[] = [
    {
      id: 1,
      name: "Produk 1",
      description: "Deskripsi singkat produk 1",
      longDescription: "Deskripsi lengkap produk 1 dengan detail spesifikasi dan keunggulan produk.",
      price: "Rp 100.000",
      image: "/placeholder.svg",
      specifications: ["Spesifikasi 1", "Spesifikasi 2", "Spesifikasi 3"]
    },
    {
      id: 2,
      name: "Produk 2",
      description: "Deskripsi singkat produk 2",
      longDescription: "Deskripsi lengkap produk 2 dengan detail spesifikasi dan keunggulan produk.",
      price: "Rp 150.000",
      image: "/placeholder.svg",
      specifications: ["Spesifikasi 1", "Spesifikasi 2", "Spesifikasi 3"]
    },
    {
      id: 3,
      name: "Produk 3",
      description: "Deskripsi singkat produk 3",
      longDescription: "Deskripsi lengkap produk 3 dengan detail spesifikasi dan keunggulan produk.",
      price: "Rp 200.000",
      image: "/placeholder.svg",
      specifications: ["Spesifikasi 1", "Spesifikasi 2", "Spesifikasi 3"]
    }
  ];

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
                src={product.image}
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
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedProduct.name}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
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
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Products;