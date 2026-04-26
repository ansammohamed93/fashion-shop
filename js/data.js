const products = [
    {
        id: 1, name: "Elegant Floral Summer Dress", description: "Beautiful floral print dress perfect for summer outings and beach vacations. Made with breathable cotton fabric.",
        price: 29.99, originalPrice: 59.99, imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600","https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600","https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=600"],
        category: "WOMEN", sizes: ["XS","S","M","L","XL"], colors: ["Red","Blue","Pink"], stock: 45, rating: 4.8, reviewCount: 128, newArrival: true, flashSale: true, discountPercent: 50, brand: "Zara Style"
    },
    {
        id: 2, name: "Classic White Blouse", description: "Professional white blouse with elegant collar. Perfect for office wear and formal occasions.",
        price: 24.99, originalPrice: 39.99, imageUrl: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600","https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600"],
        category: "WOMEN", sizes: ["S","M","L"], colors: ["White","Cream"], stock: 30, rating: 4.5, reviewCount: 89, newArrival: true, flashSale: false, discountPercent: 37, brand: "H&M Premium"
    },
    {
        id: 3, name: "High-Waisted Skinny Jeans", description: "Stretchy high-waisted jeans that sculpt your figure. Comfortable for all-day wear.",
        price: 34.99, originalPrice: 49.99, imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600","https://images.unsplash.com/photo-1584370848010-d7cc637476f4?w=600"],
        category: "WOMEN", sizes: ["XS","S","M","L","XL","XXL"], colors: ["Blue","Black","Grey"], stock: 60, rating: 4.7, reviewCount: 245, newArrival: false, flashSale: true, discountPercent: 30, brand: "Levi's Inspired"
    },
    {
        id: 4, name: "Bohemian Maxi Skirt", description: "Flowing maxi skirt with bohemian patterns. Great for festivals and casual summer days.",
        price: 22.99, originalPrice: 45.00, imageUrl: "https://images.unsplash.com/photo-1583496661160-fb5886a0ujj1?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1583496661160-fb5886a0ujj1?w=600"],
        category: "WOMEN", sizes: ["S","M","L"], colors: ["Orange","Green"], stock: 20, rating: 4.3, reviewCount: 67, newArrival: false, flashSale: false, discountPercent: 48, brand: "Boho Chic"
    },
    {
        id: 5, name: "Cozy Oversized Sweater", description: "Knitted oversized sweater for chilly days. Soft and warm with a relaxed fit.",
        price: 39.99, originalPrice: 65.00, imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600","https://images.unsplash.com/photo-1620799140408-ed5341cd2431?w=600"],
        category: "WOMEN", sizes: ["S","M","L","XL"], colors: ["Beige","Grey","Pink"], stock: 35, rating: 4.9, reviewCount: 156, newArrival: true, flashSale: false, discountPercent: 38, brand: "CozyKnit"
    },
    {
        id: 6, name: "Slim Fit Casual Shirt", description: "Modern slim fit shirt with premium cotton. Suitable for both casual and semi-formal events.",
        price: 27.99, originalPrice: 45.00, imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600","https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600"],
        category: "MEN", sizes: ["S","M","L","XL"], colors: ["White","Blue","Black"], stock: 50, rating: 4.6, reviewCount: 112, newArrival: true, flashSale: true, discountPercent: 37, brand: "Urban Men"
    },
    {
        id: 7, name: "Classic Denim Jacket", description: "Timeless denim jacket with vintage wash. A wardrobe essential for every man.",
        price: 49.99, originalPrice: 79.99, imageUrl: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=600"],
        category: "MEN", sizes: ["M","L","XL","XXL"], colors: ["Blue","Black"], stock: 25, rating: 4.7, reviewCount: 203, newArrival: false, flashSale: false, discountPercent: 37, brand: "DenimCo"
    },
    {
        id: 8, name: "Athletic Joggers", description: "Comfortable athletic joggers with moisture-wicking fabric. Perfect for gym and lounging.",
        price: 19.99, originalPrice: 35.00, imageUrl: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600","https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600"],
        category: "MEN", sizes: ["S","M","L","XL"], colors: ["Black","Grey","Navy"], stock: 80, rating: 4.4, reviewCount: 178, newArrival: true, flashSale: true, discountPercent: 42, brand: "SportZone"
    },
    {
        id: 9, name: "Formal Suit Blazer", description: "Slim fit formal blazer for business meetings and weddings. Premium tailoring.",
        price: 89.99, originalPrice: 150.00, imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600"],
        category: "MEN", sizes: ["M","L","XL"], colors: ["Navy","Black","Grey"], stock: 15, rating: 4.8, reviewCount: 92, newArrival: false, flashSale: false, discountPercent: 40, brand: "Gentlemen's"
    },
    {
        id: 10, name: "Cute Dinosaur T-Shirt", description: "Fun dinosaur print t-shirt for kids. Soft cotton that is gentle on skin.",
        price: 9.99, originalPrice: 18.00, imageUrl: "https://images.unsplash.com/photo-1519278407-7e5f4b54cc6a?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1519278407-7e5f4b54cc6a?w=600"],
        category: "KIDS", sizes: ["2Y","4Y","6Y","8Y","10Y"], colors: ["Green","Blue","Yellow"], stock: 40, rating: 4.9, reviewCount: 310, newArrival: true, flashSale: false, discountPercent: 44, brand: "KidsJoy"
    },
    {
        id: 11, name: "Princess Tulle Dress", description: "Dreamy tulle dress for little princesses. Perfect for parties and special occasions.",
        price: 18.99, originalPrice: 32.00, imageUrl: "https://images.unsplash.com/photo-1542384701-c0e46e0eda04?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1542384701-c0e46e0eda04?w=600"],
        category: "KIDS", sizes: ["3Y","5Y","7Y","9Y"], colors: ["Pink","Purple","White"], stock: 28, rating: 4.7, reviewCount: 145, newArrival: true, flashSale: true, discountPercent: 40, brand: "Little Princess"
    },
    {
        id: 12, name: "White Running Sneakers", description: "Lightweight running sneakers with cushioned sole. Breathable mesh upper.",
        price: 39.99, originalPrice: 69.99, imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600","https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600"],
        category: "SHOES", sizes: ["36","37","38","39","40","41","42"], colors: ["White","Black"], stock: 55, rating: 4.6, reviewCount: 267, newArrival: true, flashSale: true, discountPercent: 42, brand: "RunFast"
    },
    {
        id: 13, name: "Elegant High Heels", description: "Stylish high heels for evening events. Comfortable padded insole.",
        price: 34.99, originalPrice: 59.99, imageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600"],
        category: "SHOES", sizes: ["36","37","38","39","40"], colors: ["Black","Red","Nude"], stock: 22, rating: 4.3, reviewCount: 98, newArrival: false, flashSale: false, discountPercent: 41, brand: "HeelQueen"
    },
    {
        id: 14, name: "Casual Canvas Sneakers", description: "Classic canvas sneakers for everyday wear. Durable rubber outsole.",
        price: 24.99, originalPrice: 39.99, imageUrl: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600"],
        category: "SHOES", sizes: ["37","38","39","40","41","42","43"], colors: ["White","Navy","Red"], stock: 45, rating: 4.5, reviewCount: 189, newArrival: true, flashSale: false, discountPercent: 37, brand: "StreetWalk"
    },
    {
        id: 15, name: "Leather Crossbody Bag", description: "Genuine leather crossbody bag with adjustable strap. Multiple compartments.",
        price: 45.99, originalPrice: 80.00, imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600"],
        category: "BAGS", sizes: ["One Size"], colors: ["Brown","Black","Tan"], stock: 18, rating: 4.8, reviewCount: 76, newArrival: false, flashSale: true, discountPercent: 42, brand: "LeatherCraft"
    },
    {
        id: 16, name: "Trendy Backpack", description: "Fashionable backpack with laptop compartment. Water-resistant material.",
        price: 32.99, originalPrice: 55.00, imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"],
        category: "BAGS", sizes: ["One Size"], colors: ["Black","Grey","Pink"], stock: 30, rating: 4.4, reviewCount: 134, newArrival: true, flashSale: false, discountPercent: 40, brand: "BagIt"
    },
    {
        id: 17, name: "Vintage Sunglasses", description: "UV400 protection vintage style sunglasses. Lightweight frame.",
        price: 14.99, originalPrice: 28.00, imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"],
        category: "ACCESSORIES", sizes: ["One Size"], colors: ["Black","Brown","Gold"], stock: 50, rating: 4.5, reviewCount: 215, newArrival: true, flashSale: true, discountPercent: 46, brand: "SunShade"
    },
    {
        id: 18, name: "Silk Scarf", description: "Luxurious silk scarf with artistic prints. Versatile styling options.",
        price: 12.99, originalPrice: 25.00, imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"],
        category: "ACCESSORIES", sizes: ["One Size"], colors: ["Red","Blue","Multi"], stock: 35, rating: 4.6, reviewCount: 88, newArrival: false, flashSale: false, discountPercent: 48, brand: "SilkArt"
    },
    {
        id: 19, name: "Minimalist Watch", description: "Sleek minimalist watch with genuine leather strap. Water resistant.",
        price: 29.99, originalPrice: 55.00, imageUrl: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
        imageUrls: ["https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600"],
        category: "ACCESSORIES", sizes: ["One Size"], colors: ["Silver","Gold","Rose Gold"], stock: 20, rating: 4.7, reviewCount: 156, newArrival: true, flashSale: false, discountPercent: 45, brand: "TimeLess"
    }
];

const categories = [
    { name: "WOMEN", displayName: "Women", icon: "fa-female" },
    { name: "MEN", displayName: "Men", icon: "fa-male" },
    { name: "KIDS", displayName: "Kids", icon: "fa-child" },
    { name: "SHOES", displayName: "Shoes", icon: "fa-shoe-prints" },
    { name: "BAGS", displayName: "Bags", icon: "fa-shopping-bag" },
    { name: "ACCESSORIES", displayName: "Accessories", icon: "fa-gem" }
];

