const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage (replace with a database in production)
let products = [
  {
    id: 1,
    name: "Produk 1",
    description: "Deskripsi singkat tentang produk 1 dan manfaatnya.",
    longDescription: "Deskripsi lengkap tentang produk 1. Produk ini memiliki banyak manfaat dan keunggulan. Dibuat dengan bahan berkualitas tinggi dan proses produksi yang terjamin mutunya.",
    price: "Rp 150.000",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    specifications: [
      "Bahan: Premium",
      "Ukuran: Standard",
      "Berat: 250gr"
    ]
  },
  {
    id: 2,
    name: "Produk 2",
    description: "Deskripsi singkat tentang produk 2 dan manfaatnya.",
    longDescription: "Deskripsi lengkap tentang produk 2. Produk ini memiliki banyak manfaat dan keunggulan. Dibuat dengan bahan berkualitas tinggi dan proses produksi yang terjamin mutunya.",
    price: "Rp 200.000",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    specifications: [
      "Bahan: Premium",
      "Ukuran: Large",
      "Berat: 300gr"
    ]
  },
  {
    id: 3,
    name: "Produk 3",
    description: "Deskripsi singkat tentang produk 3 dan manfaatnya.",
    longDescription: "Deskripsi lengkap tentang produk 3. Produk ini memiliki banyak manfaat dan keunggulan. Dibuat dengan bahan berkualitas tinggi dan proses produksi yang terjamin mutunya.",
    price: "Rp 175.000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    specifications: [
      "Bahan: Premium",
      "Ukuran: Medium",
      "Berat: 200gr"
    ]
  },
];

let contacts = [];

// Routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newContact = {
    id: contacts.length + 1,
    name,
    email,
    message,
    createdAt: new Date()
  };

  contacts.push(newContact);
  res.status(201).json(newContact);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
