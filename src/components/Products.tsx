import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Navigation icons
import { SiShopee } from "react-icons/si"; // Shopee icon
import { FaShoppingCart } from "react-icons/fa"; // Cart icon as Tokopedia substitute

interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  image: string[];
  specifications: string[];
  shopeeLink?: string; // Optional Shopee link
  tokopediaLink?: string; // Optional Tokopedia link
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showAllProducts, setShowAllProducts] = useState<boolean>(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Kue Bangkit",
      description: "AINUN CAKE (ARDIZAL)",
      longDescription: "Kami menjual Kue kering khas Kota Palembang tanpa bahan pengawet",
      price: "Rp 20.000 - Rp 35.000",
      image: ["/img/tes1.png", "/img/tes2.png", "/img/tes3.png"],
      specifications: ["Kue Bangkit/Rentak Sagu rasa", "Bahan: Tepung sagu", "Berat: 500g"],
      shopeeLink: "https://shopee.co.id/ainuncake_01",
    },
    {
      id: 2,
      name: "Bali Pure",
      description: "Minyak Kelapa Murni",
      longDescription: "Bali Pure merupakan minyak kelapa murni yang diproses tanpa menggunakan pemanasan.",
      price: "Rp 33.000 - Rp 135.000",
      image: ["/img/balipure1.png", "/img/balipure2.png"],
      specifications: ["EXTRA VIRGIN COCONUT OIL 100%", "Berat: 500ml"],
      shopeeLink: "https://shopee.co.id/balipure",
    },
    {
      id: 3,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 4,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 5,
      name: "Aneka Jamu",
      description: "AKAR JAWI (UMMI SALAMAH)",
      longDescription: "Produk Ibu Ummi menggunakan resep turun temurun serta bahan baku alami dari kerja sama dengan petani lokal. Melalui usahanya, Ibu Ummi berharap warisan minuman jamu empon-empon dapat terus dinikmati oleh masyarakat.",
      price: "Rp 30.000 - Rp 35.000",
      image: ["/img/jamu1.png", "/img/jamu2.png", "/img/jamu3.png", "/img/jamu4.png", "/img/jamu5.png"],
      specifications: ["Aneka Jamu dengan bahan alami","Bahan: Jahe, Kunyit, etc", "Berat: 500g", "Rasa: Aneka Rasa"],
      shopeeLink: "https://shopee.co.id/akar_jawi"
    },
    {
      id: 6,
      name: "Kue Bangkit",
      description: "AINUN CAKE (ARDIZAL)",
      longDescription: "Kami menjual Kue kering khas Kota Palembang tanpa bahan pengawet",
      price: "Rp 20.000 - Rp 35.000",
      image: ["/img/tes1.png", "/img/tes2.png", "/img/tes3.png"],
      specifications: ["Kue Bangkit/Rentak Sagu rasa", "Bahan: Tepung sagu", "Berat: 500g"],
      shopeeLink: "https://shopee.co.id/ainuncake_01",
    },
    {
      id: 7,
      name: "Bali Pure",
      description: "Minyak Kelapa Murni",
      longDescription: "Bali Pure merupakan minyak kelapa murni yang diproses tanpa menggunakan pemanasan.",
      price: "Rp 33.000 - Rp 135.000",
      image: ["/img/balipure1.png", "/img/balipure2.png"],
      specifications: ["EXTRA VIRGIN COCONUT OIL 100%", "Berat: 500ml"],
      shopeeLink: "https://shopee.co.id/balipure",
    },
    {
      id: 8,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak tersdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 9,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 10,
      name: "Aneka Jamu",
      description: "AKAR JAWI (UMMI SALAMAH)",
      longDescription: "Produk Ibu Ummi menggunakan resep turun temurun serta bahan baku alami dari kerja sama dengan petani lokal. Melalui usahanya, Ibu Ummi berharap warisan minuman jamu empon-empon dapat terus dinikmati oleh masyarakat.",
      price: "Rp 30.000 - Rp 35.000",
      image: ["/img/jamu1.png", "/img/jamu2.png", "/img/jamu3.png", "/img/jamu4.png", "/img/jamu5.png"],
      specifications: ["Aneka Jamu dengan bahan alami","Bahan: Jahe, Kunyit, etc", "Berat: 500g", "Rasa: Aneka Rasa"],
      shopeeLink: "https://shopee.co.id/akar_jawi"
    },
    {
      id: 1,
      name: "Kue Bangkit",
      description: "AINUN CAKE (ARDIZAL)",
      longDescription: "Kami menjual Kue kering khas Kota Palembang tanpa bahan pengawet",
      price: "Rp 20.000 - Rp 35.000",
      image: ["/img/tes1.png", "/img/tes2.png", "/img/tes3.png"],
      specifications: ["Kue Bangkit/Rentak Sagu rasa", "Bahan: Tepung sagu", "Berat: 500g"],
      shopeeLink: "https://shopee.co.id/ainuncake_01",
    },
    {
      id: 2,
      name: "Bali Pure",
      description: "Minyak Kelapa Murni",
      longDescription: "Bali Pure merupakan minyak kelapa murni yang diproses tanpa menggunakan pemanasan.",
      price: "Rp 33.000 - Rp 135.000",
      image: ["/img/balipure1.png", "/img/balipure2.png"],
      specifications: ["EXTRA VIRGIN COCONUT OIL 100%", "Berat: 500ml"],
      shopeeLink: "https://shopee.co.id/balipure",
    },
    {
      id: 3,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 4,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 5,
      name: "Aneka Jamu",
      description: "AKAR JAWI (UMMI SALAMAH)",
      longDescription: "Produk Ibu Ummi menggunakan resep turun temurun serta bahan baku alami dari kerja sama dengan petani lokal. Melalui usahanya, Ibu Ummi berharap warisan minuman jamu empon-empon dapat terus dinikmati oleh masyarakat.",
      price: "Rp 30.000 - Rp 35.000",
      image: ["/img/jamu1.png", "/img/jamu2.png", "/img/jamu3.png", "/img/jamu4.png", "/img/jamu5.png"],
      specifications: ["Aneka Jamu dengan bahan alami","Bahan: Jahe, Kunyit, etc", "Berat: 500g", "Rasa: Aneka Rasa"],
      shopeeLink: "https://shopee.co.id/akar_jawi"
    },
    {
      id: 6,
      name: "Kue Bangkit",
      description: "AINUN CAKE (ARDIZAL)",
      longDescription: "Kami menjual Kue kering khas Kota Palembang tanpa bahan pengawet",
      price: "Rp 20.000 - Rp 35.000",
      image: ["/img/tes1.png", "/img/tes2.png", "/img/tes3.png"],
      specifications: ["Kue Bangkit/Rentak Sagu rasa", "Bahan: Tepung sagu", "Berat: 500g"],
      shopeeLink: "https://shopee.co.id/ainuncake_01",
    },
    {
      id: 7,
      name: "Bali Pure",
      description: "Minyak Kelapa Murni",
      longDescription: "Bali Pure merupakan minyak kelapa murni yang diproses tanpa menggunakan pemanasan.",
      price: "Rp 33.000 - Rp 135.000",
      image: ["/img/balipure1.png", "/img/balipure2.png"],
      specifications: ["EXTRA VIRGIN COCONUT OIL 100%", "Berat: 500ml"],
      shopeeLink: "https://shopee.co.id/balipure",
    },
    {
      id: 8,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak tersdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 9,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 10,
      name: "Aneka Jamu",
      description: "AKAR JAWI (UMMI SALAMAH)",
      longDescription: "Produk Ibu Ummi menggunakan resep turun temurun serta bahan baku alami dari kerja sama dengan petani lokal. Melalui usahanya, Ibu Ummi berharap warisan minuman jamu empon-empon dapat terus dinikmati oleh masyarakat.",
      price: "Rp 30.000 - Rp 35.000",
      image: ["/img/jamu1.png", "/img/jamu2.png", "/img/jamu3.png", "/img/jamu4.png", "/img/jamu5.png"],
      specifications: ["Aneka Jamu dengan bahan alami","Bahan: Jahe, Kunyit, etc", "Berat: 500g", "Rasa: Aneka Rasa"],
      shopeeLink: "https://shopee.co.id/akar_jawi"
    },
    {
      id: 1,
      name: "Kue Bangkit",
      description: "AINUN CAKE (ARDIZAL)",
      longDescription: "Kami menjual Kue kering khas Kota Palembang tanpa bahan pengawet",
      price: "Rp 20.000 - Rp 35.000",
      image: ["/img/tes1.png", "/img/tes2.png", "/img/tes3.png"],
      specifications: ["Kue Bangkit/Rentak Sagu rasa", "Bahan: Tepung sagu", "Berat: 500g"],
      shopeeLink: "https://shopee.co.id/ainuncake_01",
    },
    {
      id: 2,
      name: "Bali Pure",
      description: "Minyak Kelapa Murni",
      longDescription: "Bali Pure merupakan minyak kelapa murni yang diproses tanpa menggunakan pemanasan.",
      price: "Rp 33.000 - Rp 135.000",
      image: ["/img/balipure1.png", "/img/balipure2.png"],
      specifications: ["EXTRA VIRGIN COCONUT OIL 100%", "Berat: 500ml"],
      shopeeLink: "https://shopee.co.id/balipure",
    },
    {
      id: 3,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 4,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 5,
      name: "Aneka Jamu",
      description: "AKAR JAWI (UMMI SALAMAH)",
      longDescription: "Produk Ibu Ummi menggunakan resep turun temurun serta bahan baku alami dari kerja sama dengan petani lokal. Melalui usahanya, Ibu Ummi berharap warisan minuman jamu empon-empon dapat terus dinikmati oleh masyarakat.",
      price: "Rp 30.000 - Rp 35.000",
      image: ["/img/jamu1.png", "/img/jamu2.png", "/img/jamu3.png", "/img/jamu4.png", "/img/jamu5.png"],
      specifications: ["Aneka Jamu dengan bahan alami","Bahan: Jahe, Kunyit, etc", "Berat: 500g", "Rasa: Aneka Rasa"],
      shopeeLink: "https://shopee.co.id/akar_jawi"
    },
    {
      id: 6,
      name: "Kue Bangkit",
      description: "AINUN CAKE (ARDIZAL)",
      longDescription: "Kami menjual Kue kering khas Kota Palembang tanpa bahan pengawet",
      price: "Rp 20.000 - Rp 35.000",
      image: ["/img/tes1.png", "/img/tes2.png", "/img/tes3.png"],
      specifications: ["Kue Bangkit/Rentak Sagu rasa", "Bahan: Tepung sagu", "Berat: 500g"],
      shopeeLink: "https://shopee.co.id/ainuncake_01",
    },
    {
      id: 7,
      name: "Bali Pure",
      description: "Minyak Kelapa Murni",
      longDescription: "Bali Pure merupakan minyak kelapa murni yang diproses tanpa menggunakan pemanasan.",
      price: "Rp 33.000 - Rp 135.000",
      image: ["/img/balipure1.png", "/img/balipure2.png"],
      specifications: ["EXTRA VIRGIN COCONUT OIL 100%", "Berat: 500ml"],
      shopeeLink: "https://shopee.co.id/balipure",
    },
    {
      id: 8,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak tersdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 9,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 10,
      name: "Aneka Jamu",
      description: "AKAR JAWI (UMMI SALAMAH)",
      longDescription: "Produk Ibu Ummi menggunakan resep turun temurun serta bahan baku alami dari kerja sama dengan petani lokal. Melalui usahanya, Ibu Ummi berharap warisan minuman jamu empon-empon dapat terus dinikmati oleh masyarakat.",
      price: "Rp 30.000 - Rp 35.000",
      image: ["/img/jamu1.png", "/img/jamu2.png", "/img/jamu3.png", "/img/jamu4.png", "/img/jamu5.png"],
      specifications: ["Aneka Jamu dengan bahan alami","Bahan: Jahe, Kunyit, etc", "Berat: 500g", "Rasa: Aneka Rasa"],
      shopeeLink: "https://shopee.co.id/akar_jawi"
    },
    {
      id: 1,
      name: "Kue Bangkit",
      description: "AINUN CAKE (ARDIZAL)",
      longDescription: "Kami menjual Kue kering khas Kota Palembang tanpa bahan pengawet",
      price: "Rp 20.000 - Rp 35.000",
      image: ["/img/tes1.png", "/img/tes2.png", "/img/tes3.png"],
      specifications: ["Kue Bangkit/Rentak Sagu rasa", "Bahan: Tepung sagu", "Berat: 500g"],
      shopeeLink: "https://shopee.co.id/ainuncake_01",
    },
    {
      id: 2,
      name: "Bali Pure",
      description: "Minyak Kelapa Murni",
      longDescription: "Bali Pure merupakan minyak kelapa murni yang diproses tanpa menggunakan pemanasan.",
      price: "Rp 33.000 - Rp 135.000",
      image: ["/img/balipure1.png", "/img/balipure2.png"],
      specifications: ["EXTRA VIRGIN COCONUT OIL 100%", "Berat: 500ml"],
      shopeeLink: "https://shopee.co.id/balipure",
    },
    {
      id: 3,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 4,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 5,
      name: "Aneka Jamu",
      description: "AKAR JAWI (UMMI SALAMAH)",
      longDescription: "Produk Ibu Ummi menggunakan resep turun temurun serta bahan baku alami dari kerja sama dengan petani lokal. Melalui usahanya, Ibu Ummi berharap warisan minuman jamu empon-empon dapat terus dinikmati oleh masyarakat.",
      price: "Rp 30.000 - Rp 35.000",
      image: ["/img/jamu1.png", "/img/jamu2.png", "/img/jamu3.png", "/img/jamu4.png", "/img/jamu5.png"],
      specifications: ["Aneka Jamu dengan bahan alami","Bahan: Jahe, Kunyit, etc", "Berat: 500g", "Rasa: Aneka Rasa"],
      shopeeLink: "https://shopee.co.id/akar_jawi"
    },
    {
      id: 6,
      name: "Kue Bangkit",
      description: "AINUN CAKE (ARDIZAL)",
      longDescription: "Kami menjual Kue kering khas Kota Palembang tanpa bahan pengawet",
      price: "Rp 20.000 - Rp 35.000",
      image: ["/img/tes1.png", "/img/tes2.png", "/img/tes3.png"],
      specifications: ["Kue Bangkit/Rentak Sagu rasa", "Bahan: Tepung sagu", "Berat: 500g"],
      shopeeLink: "https://shopee.co.id/ainuncake_01",
    },
    {
      id: 7,
      name: "Bali Pure",
      description: "Minyak Kelapa Murni",
      longDescription: "Bali Pure merupakan minyak kelapa murni yang diproses tanpa menggunakan pemanasan.",
      price: "Rp 33.000 - Rp 135.000",
      image: ["/img/balipure1.png", "/img/balipure2.png"],
      specifications: ["EXTRA VIRGIN COCONUT OIL 100%", "Berat: 500ml"],
      shopeeLink: "https://shopee.co.id/balipure",
    },
    {
      id: 8,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak tersdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 9,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 10,
      name: "Aneka Jamu",
      description: "AKAR JAWI (UMMI SALAMAH)",
      longDescription: "Produk Ibu Ummi menggunakan resep turun temurun serta bahan baku alami dari kerja sama dengan petani lokal. Melalui usahanya, Ibu Ummi berharap warisan minuman jamu empon-empon dapat terus dinikmati oleh masyarakat.",
      price: "Rp 30.000 - Rp 35.000",
      image: ["/img/jamu1.png", "/img/jamu2.png", "/img/jamu3.png", "/img/jamu4.png", "/img/jamu5.png"],
      specifications: ["Aneka Jamu dengan bahan alami","Bahan: Jahe, Kunyit, etc", "Berat: 500g", "Rasa: Aneka Rasa"],
      shopeeLink: "https://shopee.co.id/akar_jawi"
    },
    {
      id: 1,
      name: "Kue Bangkit",
      description: "AINUN CAKE (ARDIZAL)",
      longDescription: "Kami menjual Kue kering khas Kota Palembang tanpa bahan pengawet",
      price: "Rp 20.000 - Rp 35.000",
      image: ["/img/tes1.png", "/img/tes2.png", "/img/tes3.png"],
      specifications: ["Kue Bangkit/Rentak Sagu rasa", "Bahan: Tepung sagu", "Berat: 500g"],
      shopeeLink: "https://shopee.co.id/ainuncake_01",
    },
    {
      id: 2,
      name: "Bali Pure",
      description: "Minyak Kelapa Murni",
      longDescription: "Bali Pure merupakan minyak kelapa murni yang diproses tanpa menggunakan pemanasan.",
      price: "Rp 33.000 - Rp 135.000",
      image: ["/img/balipure1.png", "/img/balipure2.png"],
      specifications: ["EXTRA VIRGIN COCONUT OIL 100%", "Berat: 500ml"],
      shopeeLink: "https://shopee.co.id/balipure",
    },
    {
      id: 3,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 4,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 5,
      name: "Aneka Jamu",
      description: "AKAR JAWI (UMMI SALAMAH)",
      longDescription: "Produk Ibu Ummi menggunakan resep turun temurun serta bahan baku alami dari kerja sama dengan petani lokal. Melalui usahanya, Ibu Ummi berharap warisan minuman jamu empon-empon dapat terus dinikmati oleh masyarakat.",
      price: "Rp 30.000 - Rp 35.000",
      image: ["/img/jamu1.png", "/img/jamu2.png", "/img/jamu3.png", "/img/jamu4.png", "/img/jamu5.png"],
      specifications: ["Aneka Jamu dengan bahan alami","Bahan: Jahe, Kunyit, etc", "Berat: 500g", "Rasa: Aneka Rasa"],
      shopeeLink: "https://shopee.co.id/akar_jawi"
    },
    {
      id: 6,
      name: "Kue Bangkit",
      description: "AINUN CAKE (ARDIZAL)",
      longDescription: "Kami menjual Kue kering khas Kota Palembang tanpa bahan pengawet",
      price: "Rp 20.000 - Rp 35.000",
      image: ["/img/tes1.png", "/img/tes2.png", "/img/tes3.png"],
      specifications: ["Kue Bangkit/Rentak Sagu rasa", "Bahan: Tepung sagu", "Berat: 500g"],
      shopeeLink: "https://shopee.co.id/ainuncake_01",
    },
    {
      id: 7,
      name: "Bali Pure",
      description: "Minyak Kelapa Murni",
      longDescription: "Bali Pure merupakan minyak kelapa murni yang diproses tanpa menggunakan pemanasan.",
      price: "Rp 33.000 - Rp 135.000",
      image: ["/img/balipure1.png", "/img/balipure2.png"],
      specifications: ["EXTRA VIRGIN COCONUT OIL 100%", "Berat: 500ml"],
      shopeeLink: "https://shopee.co.id/balipure",
    },
    {
      id: 8,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak tersdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 9,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 10,
      name: "Aneka Jamu",
      description: "AKAR JAWI (UMMI SALAMAH)",
      longDescription: "Produk Ibu Ummi menggunakan resep turun temurun serta bahan baku alami dari kerja sama dengan petani lokal. Melalui usahanya, Ibu Ummi berharap warisan minuman jamu empon-empon dapat terus dinikmati oleh masyarakat.",
      price: "Rp 30.000 - Rp 35.000",
      image: ["/img/jamu1.png", "/img/jamu2.png", "/img/jamu3.png", "/img/jamu4.png", "/img/jamu5.png"],
      specifications: ["Aneka Jamu dengan bahan alami","Bahan: Jahe, Kunyit, etc", "Berat: 500g", "Rasa: Aneka Rasa"],
      shopeeLink: "https://shopee.co.id/akar_jawi"
    },
    {
      id: 1,
      name: "Kue Bangkit",
      description: "AINUN CAKE (ARDIZAL)",
      longDescription: "Kami menjual Kue kering khas Kota Palembang tanpa bahan pengawet",
      price: "Rp 20.000 - Rp 35.000",
      image: ["/img/tes1.png", "/img/tes2.png", "/img/tes3.png"],
      specifications: ["Kue Bangkit/Rentak Sagu rasa", "Bahan: Tepung sagu", "Berat: 500g"],
      shopeeLink: "https://shopee.co.id/ainuncake_01",
    },
    {
      id: 2,
      name: "Bali Pure",
      description: "Minyak Kelapa Murni",
      longDescription: "Bali Pure merupakan minyak kelapa murni yang diproses tanpa menggunakan pemanasan.",
      price: "Rp 33.000 - Rp 135.000",
      image: ["/img/balipure1.png", "/img/balipure2.png"],
      specifications: ["EXTRA VIRGIN COCONUT OIL 100%", "Berat: 500ml"],
      shopeeLink: "https://shopee.co.id/balipure",
    },
    {
      id: 3,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 4,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 5,
      name: "Aneka Jamu",
      description: "AKAR JAWI (UMMI SALAMAH)",
      longDescription: "Produk Ibu Ummi menggunakan resep turun temurun serta bahan baku alami dari kerja sama dengan petani lokal. Melalui usahanya, Ibu Ummi berharap warisan minuman jamu empon-empon dapat terus dinikmati oleh masyarakat.",
      price: "Rp 30.000 - Rp 35.000",
      image: ["/img/jamu1.png", "/img/jamu2.png", "/img/jamu3.png", "/img/jamu4.png", "/img/jamu5.png"],
      specifications: ["Aneka Jamu dengan bahan alami","Bahan: Jahe, Kunyit, etc", "Berat: 500g", "Rasa: Aneka Rasa"],
      shopeeLink: "https://shopee.co.id/akar_jawi"
    },
    {
      id: 6,
      name: "Kue Bangkit",
      description: "AINUN CAKE (ARDIZAL)",
      longDescription: "Kami menjual Kue kering khas Kota Palembang tanpa bahan pengawet",
      price: "Rp 20.000 - Rp 35.000",
      image: ["/img/tes1.png", "/img/tes2.png", "/img/tes3.png"],
      specifications: ["Kue Bangkit/Rentak Sagu rasa", "Bahan: Tepung sagu", "Berat: 500g"],
      shopeeLink: "https://shopee.co.id/ainuncake_01",
    },
    {
      id: 7,
      name: "Bali Pure",
      description: "Minyak Kelapa Murni",
      longDescription: "Bali Pure merupakan minyak kelapa murni yang diproses tanpa menggunakan pemanasan.",
      price: "Rp 33.000 - Rp 135.000",
      image: ["/img/balipure1.png", "/img/balipure2.png"],
      specifications: ["EXTRA VIRGIN COCONUT OIL 100%", "Berat: 500ml"],
      shopeeLink: "https://shopee.co.id/balipure",
    },
    {
      id: 8,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak tersdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 9,
      name: "Kopi Ledug",
      description: "Kopi luwak, Kopi lanang / peaberry, Kopi arabica, Kopi robusta.",
      longDescription: "Dengan misi ingin menyejahterakan petani di lereng Gunung Welirang, Bapak Widi memberdayakan perkebunan kopi yang terdampak uap sulfur. Melalui brand LEDUG, produk kopi telah terjual ke seluruh nusantara bahkan hingga ke Belanda, Jepang, Korea, dan Taiwan.",
      price: "Rp 35.000 - Rp 120.000",
      image: ["/img/kpledug1.png", "/img/kpledug2.png", "/img/kpledug3.png", "img/kpledug4.png"],
      specifications: ["Di olah dari biji kopi petik merah dari perkebunan lereng gunung welirang , perkebunan yg kaya akan uap sulfur sehinga tercipta cita rasa khas dan unik yg tidak terdapat di daerah lain ."],
      tokopediaLink: "https://www.tokopedia.com/kopiledug-1"
    },
    {
      id: 10,
      name: "Aneka Jamu",
      description: "AKAR JAWI (UMMI SALAMAH)",
      longDescription: "Produk Ibu Ummi menggunakan resep turun temurun serta bahan baku alami dari kerja sama dengan petani lokal. Melalui usahanya, Ibu Ummi berharap warisan minuman jamu empon-empon dapat terus dinikmati oleh masyarakat.",
      price: "Rp 30.000 - Rp 35.000",
      image: ["/img/jamu1.png", "/img/jamu2.png", "/img/jamu3.png", "/img/jamu4.png", "/img/jamu5.png"],
      specifications: ["Aneka Jamu dengan bahan alami","Bahan: Jahe, Kunyit, etc", "Berat: 500g", "Rasa: Aneka Rasa"],
      shopeeLink: "https://shopee.co.id/akar_jawi"
    },
  ];

  const displayedProducts = showAllProducts ? products : products.slice(0, 6);

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProduct.image.length);
    }
  };

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
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image[0]}
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

        {/* Tombol untuk menampilkan lebih banyak atau lebih sedikit produk */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAllProducts(!showAllProducts)}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {showAllProducts ? "Lihat Sedikit Produk" : "Lihat Semua Produk"}
          </button>
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        {selectedProduct && (
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedProduct.name}</DialogTitle>
            </DialogHeader>
            <div className="mt-4 flex flex-col items-center">
              <div className="relative w-full">
                <img
                  src={selectedProduct.image[currentImageIndex]}
                  alt={`Image ${currentImageIndex + 1} of ${selectedProduct.name}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity"
                >
                  <FaChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity"
                >
                  <FaChevronRight size={24} />
                </button>
              </div>

              <div className="text-left mt-4 w-full">
                <p className="text-lg font-semibold text-primary mb-2">
                  {selectedProduct.price}
                </p>
                <p className="text-gray-700 mb-4">
                  {selectedProduct.longDescription}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Detail Produk:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedProduct.specifications.map((spec, index) => (
                      <li key={index} className="text-gray-600">{spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 space-y-2">
                  {selectedProduct.shopeeLink && (
                    <a
                      href={selectedProduct.shopeeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-orange-500 hover:text-orange-700 transition-colors"
                    >
                      <SiShopee size={20} className="mr-2" />
                      Beli di Shopee
                    </a>
                  )}
                  {selectedProduct.tokopediaLink && (
                    <a
                      href={selectedProduct.tokopediaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 hover:text-green-700 transition-colors"
                    >
                      <FaShoppingCart size={20} className="mr-2" />
                      Beli di Tokopedia
                    </a>
                  )}
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
