package com.fashion.model;

import java.util.List;

public class Product {
    private Long id;
    private String name;
    private String description;
    private double price;
    private double originalPrice;
    private String imageUrl;
    private List<String> imageUrls;
    private Category category;
    private List<String> sizes;
    private List<String> colors;
    private int stock;
    private double rating;
    private int reviewCount;
    private boolean newArrival;
    private boolean flashSale;
    private int discountPercent;
    private String brand;

    public Product() {}

    public Product(Long id, String name, String description, double price, double originalPrice,
                   String imageUrl, List<String> imageUrls, Category category,
                   List<String> sizes, List<String> colors, int stock,
                   double rating, int reviewCount, boolean newArrival, boolean flashSale,
                   int discountPercent, String brand) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.originalPrice = originalPrice;
        this.imageUrl = imageUrl;
        this.imageUrls = imageUrls;
        this.category = category;
        this.sizes = sizes;
        this.colors = colors;
        this.stock = stock;
        this.rating = rating;
        this.reviewCount = reviewCount;
        this.newArrival = newArrival;
        this.flashSale = flashSale;
        this.discountPercent = discountPercent;
        this.brand = brand;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public double getOriginalPrice() { return originalPrice; }
    public void setOriginalPrice(double originalPrice) { this.originalPrice = originalPrice; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public List<String> getImageUrls() { return imageUrls; }
    public void setImageUrls(List<String> imageUrls) { this.imageUrls = imageUrls; }

    public Category getCategory() { return category; }
    public void setCategory(Category category) { this.category = category; }

    public List<String> getSizes() { return sizes; }
    public void setSizes(List<String> sizes) { this.sizes = sizes; }

    public List<String> getColors() { return colors; }
    public void setColors(List<String> colors) { this.colors = colors; }

    public int getStock() { return stock; }
    public void setStock(int stock) { this.stock = stock; }

    public double getRating() { return rating; }
    public void setRating(double rating) { this.rating = rating; }

    public int getReviewCount() { return reviewCount; }
    public void setReviewCount(int reviewCount) { this.reviewCount = reviewCount; }

    public boolean isNewArrival() { return newArrival; }
    public void setNewArrival(boolean newArrival) { this.newArrival = newArrival; }

    public boolean isFlashSale() { return flashSale; }
    public void setFlashSale(boolean flashSale) { this.flashSale = flashSale; }

    public int getDiscountPercent() { return discountPercent; }
    public void setDiscountPercent(int discountPercent) { this.discountPercent = discountPercent; }

    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }
}

