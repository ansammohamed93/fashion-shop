package com.fashion.repository;

import com.fashion.model.Category;
import com.fashion.model.Product;
import org.springframework.stereotype.Repository;

import jakarta.annotation.PostConstruct;
import java.util.*;
import java.util.stream.Collectors;

@Repository
public class ProductRepository {

    private final List<Product> products = new ArrayList<>();
    private long nextId = 1;

    @PostConstruct
    public void init() {
        // Women Products
        addProduct("Elegant Floral Summer Dress", "Beautiful floral print dress perfect for summer outings and beach vacations. Made with breathable cotton fabric.",
                29.99, 59.99, "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600",
                        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600",
                        "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=600"),
                Category.WOMEN, Arrays.asList("XS","S","M","L","XL"), Arrays.asList("Red","Blue","Pink"), 45, 4.8, 128, true, true, 50, "Zara Style");

        addProduct("Classic White Blouse", "Professional white blouse with elegant collar. Perfect for office wear and formal occasions.",
                24.99, 39.99, "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600",
                        "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600"),
                Category.WOMEN, Arrays.asList("S","M","L"), Arrays.asList("White","Cream"), 30, 4.5, 89, true, false, 37, "H&M Premium");

        addProduct("High-Waisted Skinny Jeans", "Stretchy high-waisted jeans that sculpt your figure. Comfortable for all-day wear.",
                34.99, 49.99, "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
                        "https://images.unsplash.com/photo-1584370848010-d7cc637476f4?w=600"),
                Category.WOMEN, Arrays.asList("XS","S","M","L","XL","XXL"), Arrays.asList("Blue","Black","Grey"), 60, 4.7, 245, false, true, 30, "Levi's Inspired");

        addProduct("Bohemian Maxi Skirt", "Flowing maxi skirt with bohemian patterns. Great for festivals and casual summer days.",
                22.99, 45.00, "https://images.unsplash.com/photo-1583496661160-fb5886a0ujj1?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1583496661160-fb5886a0ujj1?w=600"),
                Category.WOMEN, Arrays.asList("S","M","L"), Arrays.asList("Orange","Green"), 20, 4.3, 67, false, false, 48, "Boho Chic");

        addProduct("Cozy Oversized Sweater", "Knitted oversized sweater for chilly days. Soft and warm with a relaxed fit.",
                39.99, 65.00, "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600",
                        "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?w=600"),
                Category.WOMEN, Arrays.asList("S","M","L","XL"), Arrays.asList("Beige","Grey","Pink"), 35, 4.9, 156, true, false, 38, "CozyKnit");

        // Men Products
        addProduct("Slim Fit Casual Shirt", "Modern slim fit shirt with premium cotton. Suitable for both casual and semi-formal events.",
                27.99, 45.00, "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
                        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600"),
                Category.MEN, Arrays.asList("S","M","L","XL"), Arrays.asList("White","Blue","Black"), 50, 4.6, 112, true, true, 37, "Urban Men");

        addProduct("Classic Denim Jacket", "Timeless denim jacket with vintage wash. A wardrobe essential for every man.",
                49.99, 79.99, "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=600"),
                Category.MEN, Arrays.asList("M","L","XL","XXL"), Arrays.asList("Blue","Black"), 25, 4.7, 203, false, false, 37, "DenimCo");

        addProduct("Athletic Joggers", "Comfortable athletic joggers with moisture-wicking fabric. Perfect for gym and lounging.",
                19.99, 35.00, "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600",
                        "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600"),
                Category.MEN, Arrays.asList("S","M","L","XL"), Arrays.asList("Black","Grey","Navy"), 80, 4.4, 178, true, true, 42, "SportZone");

        addProduct("Formal Suit Blazer", "Slim fit formal blazer for business meetings and weddings. Premium tailoring.",
                89.99, 150.00, "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600"),
                Category.MEN, Arrays.asList("M","L","XL"), Arrays.asList("Navy","Black","Grey"), 15, 4.8, 92, false, false, 40, "Gentlemen's");

        // Kids Products
        addProduct("Cute Dinosaur T-Shirt", "Fun dinosaur print t-shirt for kids. Soft cotton that is gentle on skin.",
                9.99, 18.00, "https://images.unsplash.com/photo-1519278407-7e5f4b54cc6a?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1519278407-7e5f4b54cc6a?w=600"),
                Category.KIDS, Arrays.asList("2Y","4Y","6Y","8Y","10Y"), Arrays.asList("Green","Blue","Yellow"), 40, 4.9, 310, true, false, 44, "KidsJoy");

        addProduct("Princess Tulle Dress", "Dreamy tulle dress for little princesses. Perfect for parties and special occasions.",
                18.99, 32.00, "https://images.unsplash.com/photo-1542384701-c0e46e0eda04?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1542384701-c0e46e0eda04?w=600"),
                Category.KIDS, Arrays.asList("3Y","5Y","7Y","9Y"), Arrays.asList("Pink","Purple","White"), 28, 4.7, 145, true, true, 40, "Little Princess");

        // Shoes
        addProduct("White Running Sneakers", "Lightweight running sneakers with cushioned sole. Breathable mesh upper.",
                39.99, 69.99, "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
                        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600"),
                Category.SHOES, Arrays.asList("36","37","38","39","40","41","42"), Arrays.asList("White","Black"), 55, 4.6, 267, true, true, 42, "RunFast");

        addProduct("Elegant High Heels", "Stylish high heels for evening events. Comfortable padded insole.",
                34.99, 59.99, "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600"),
                Category.SHOES, Arrays.asList("36","37","38","39","40"), Arrays.asList("Black","Red","Nude"), 22, 4.3, 98, false, false, 41, "HeelQueen");

        addProduct("Casual Canvas Sneakers", "Classic canvas sneakers for everyday wear. Durable rubber outsole.",
                24.99, 39.99, "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600"),
                Category.SHOES, Arrays.asList("37","38","39","40","41","42","43"), Arrays.asList("White","Navy","Red"), 45, 4.5, 189, true, false, 37, "StreetWalk");

        // Bags
        addProduct("Leather Crossbody Bag", "Genuine leather crossbody bag with adjustable strap. Multiple compartments.",
                45.99, 80.00, "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600"),
                Category.BAGS, Arrays.asList("One Size"), Arrays.asList("Brown","Black","Tan"), 18, 4.8, 76, false, true, 42, "LeatherCraft");

        addProduct("Trendy Backpack", "Fashionable backpack with laptop compartment. Water-resistant material.",
                32.99, 55.00, "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"),
                Category.BAGS, Arrays.asList("One Size"), Arrays.asList("Black","Grey","Pink"), 30, 4.4, 134, true, false, 40, "BagIt");

        // Accessories
        addProduct("Vintage Sunglasses", "UV400 protection vintage style sunglasses. Lightweight frame.",
                14.99, 28.00, "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"),
                Category.ACCESSORIES, Arrays.asList("One Size"), Arrays.asList("Black","Brown","Gold"), 50, 4.5, 215, true, true, 46, "SunShade");

        addProduct("Silk Scarf", "Luxurious silk scarf with artistic prints. Versatile styling options.",
                12.99, 25.00, "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"),
                Category.ACCESSORIES, Arrays.asList("One Size"), Arrays.asList("Red","Blue","Multi"), 35, 4.6, 88, false, false, 48, "SilkArt");

        addProduct("Minimalist Watch", "Sleek minimalist watch with genuine leather strap. Water resistant.",
                29.99, 55.00, "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
                Arrays.asList("https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600"),
                Category.ACCESSORIES, Arrays.asList("One Size"), Arrays.asList("Silver","Gold","Rose Gold"), 20, 4.7, 156, true, false, 45, "TimeLess");
    }

    private void addProduct(String name, String description, double price, double originalPrice,
                            String imageUrl, List<String> imageUrls, Category category,
                            List<String> sizes, List<String> colors, int stock,
                            double rating, int reviewCount, boolean newArrival, boolean flashSale,
                            int discountPercent, String brand) {
        Product p = new Product(nextId++, name, description, price, originalPrice,
                imageUrl, imageUrls, category, sizes, colors, stock,
                rating, reviewCount, newArrival, flashSale, discountPercent, brand);
        products.add(p);
    }

    public List<Product> findAll() {
        return new ArrayList<>(products);
    }

    public Optional<Product> findById(Long id) {
        return products.stream().filter(p -> p.getId().equals(id)).findFirst();
    }

    public List<Product> findByCategory(Category category) {
        return products.stream()
                .filter(p -> p.getCategory() == category)
                .collect(Collectors.toList());
    }

    public List<Product> search(String query) {
        String q = query.toLowerCase();
        return products.stream()
                .filter(p -> p.getName().toLowerCase().contains(q) ||
                        p.getDescription().toLowerCase().contains(q) ||
                        p.getBrand().toLowerCase().contains(q))
                .collect(Collectors.toList());
    }

    public List<Product> findNewArrivals() {
        return products.stream()
                .filter(Product::isNewArrival)
                .collect(Collectors.toList());
    }

    public List<Product> findFlashSales() {
        return products.stream()
                .filter(Product::isFlashSale)
                .collect(Collectors.toList());
    }

    public List<Product> filter(Double minPrice, Double maxPrice, Category category, String size, String color) {
        return products.stream()
                .filter(p -> minPrice == null || p.getPrice() >= minPrice)
                .filter(p -> maxPrice == null || p.getPrice() <= maxPrice)
                .filter(p -> category == null || p.getCategory() == category)
                .filter(p -> size == null || p.getSizes().contains(size))
                .filter(p -> color == null || p.getColors().contains(color))
                .collect(Collectors.toList());
    }
}

