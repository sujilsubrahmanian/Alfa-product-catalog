import MovieCard from "../Components/Card";
import { useState } from "react";
import "../css/Home.css";




function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "Aluminium Casement Door",
      price: "₹9999",
      description:
        "Standard casement door frame with hinge and premium finish.",
      expected_date: "Delivery by 27th July",
      category: "DOORS",
      sizes: "4ft×7ft · 3ft×7ft · Custom",
      url: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    }, 
    {
      id: 2,
      title: "Aluminium Sliding Door",
      price: "₹12999",
      description:
        "Heavy-duty sliding system with smooth SS track and rollers.",
      expected_date: "Delivery by 28th July",
      category: "DOORS",
      sizes: "5ft×7ft · 6ft×7ft · Custom",
      url: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    },

    {
      id: 3,
      title: "Premium Window Frame",
      price: "₹7999",
      description:
        "Elegant aluminium frame with powder-coated matte finish.",
      expected_date: "Delivery by 30th July",
      category: "WINDOWS",
      sizes: "Custom Sizes Available",
      url: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    },

    {
      id: 4,
      title: "Office Partition",
      price: "₹15999",
      description:
        "Modern office partition with acoustic aluminium support.",
      expected_date: "Delivery by 1st August",
      category: "PARTITIONS",
      sizes: "Custom Build",
      url: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    },
    {
      id: 1,
      title: "Aluminium Casement Door",
      price: "₹9999",
      description:
        "Standard casement door frame with hinge and premium finish.",
      expected_date: "Delivery by 27th July",
      category: "DOORS",
      sizes: "4ft×7ft · 3ft×7ft · Custom",
      url: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    },
    {
      id: 1,
      title: "Aluminium Casement Door",
      price: "₹9999",
      description:
        "Standard casement door frame with hinge and premium finish.",
      expected_date: "Delivery by 27th July",
      category: "DOORS",
      sizes: "4ft×7ft · 3ft×7ft · Custom",
      url: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    },
    {
      id: 1,
      title: "Aluminium Casement Door",
      price: "₹9999",
      description:
        "Standard casement door frame with hinge and premium finish.",
      expected_date: "Delivery by 27th July",
      category: "DOORS",
      sizes: "4ft×7ft · 3ft×7ft · Custom",
      url: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    },
    {
      id: 1,
      title: "Aluminium Casement Door",
      price: "₹9999",
      description:
        "Standard casement door frame with hinge and premium finish.",
      expected_date: "Delivery by 27th July",
      category: "DOORS",
      sizes: "4ft×7ft · 3ft×7ft · Custom",
      url: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    },
    {
      id: 1,
      title: "Aluminium Casement Door",
      price: "₹9999",
      description:
        "Standard casement door frame with hinge and premium finish.",
      expected_date: "Delivery by 27th July",
      category: "DOORS",
      sizes: "4ft×7ft · 3ft×7ft · Custom",
      url: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    },
    {
      id: 1,
      title: "Aluminium Casement Door",
      price: "₹9999",
      description:
        "Standard casement door frame with hinge and premium finish.",
      expected_date: "Delivery by 27th July",
      category: "DOORS",
      sizes: "4ft×7ft · 3ft×7ft · Custom",
      url: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    },
    {
      id: 1,
      title: "Aluminium Casement Door",
      price: "₹9999",
      description:
        "Standard casement door frame with hinge and premium finish.",
      expected_date: "Delivery by 27th July",
      category: "DOORS",
      sizes: "4ft×7ft · 3ft×7ft · Custom",
      url: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    },
    {
      id: 1,
      title: "Aluminium Casement Door",
      price: "₹9999",
      description:
        "Standard casement door frame with hinge and premium finish.",
      expected_date: "Delivery by 27th July",
      category: "DOORS",
      sizes: "4ft×7ft · 3ft×7ft · Custom",
      url: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    },
    {
      id: 1,
      title: "Aluminium Casement Door",
      price: "₹9999",
      description:
        "Standard casement door frame with hinge and premium finish.",
      expected_date: "Delivery by 27th July",
      category: "DOORS",
      sizes: "4ft×7ft · 3ft×7ft · Custom",
      url: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    },
    {
      id: 1,
      title: "Aluminium Casement Door",
      price: "₹9999",
      description:
        "Standard casement door frame with hinge and premium finish.",
      expected_date: "Delivery by 27th July",
      category: "DOORS",
      sizes: "4ft×7ft · 3ft×7ft · Custom",
      url: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    },

   
  ];

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="home">
      <div className="page-header">
        <h1>ALL PRODUCTS</h1>
        <span>({filteredMovies.length} items)</span>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="🔍 Search products..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <div className="favorites-empty">
          <h2>No Products Found</h2>
          <p>Try searching for another product.</p>
        </div>
      )}
    </div>
  );
}

export default Home;