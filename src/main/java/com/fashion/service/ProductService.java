package com.fashion.service;

import com.fashion.model.Category;
import com.fashion.model.Product;
import com.fashion.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    public List<Product> getProductsByCategory(Category category) {
        return productRepository.findByCategory(category);
    }

    public List<Product> searchProducts(String query) {
        return productRepository.search(query);
    }

    public List<Product> getNewArrivals() {
        return productRepository.findNewArrivals();
    }

    public List<Product> getFlashSales() {
        return productRepository.findFlashSales();
    }

    public List<Product> getFilteredProducts(Double minPrice, Double maxPrice, Category category, String size, String color, String sort) {
        List<Product> products = productRepository.filter(minPrice, maxPrice, category, size, color);

        if (sort != null) {
            switch (sort) {
                case "price_asc" -> products.sort(Comparator.comparingDouble(Product::getPrice));
                case "price_desc" -> products.sort(Comparator.comparingDouble(Product::getPrice).reversed());
                case "rating" -> products.sort(Comparator.comparingDouble(Product::getRating).reversed());
                case "newest" -> products.sort(Comparator.comparing(Product::getId).reversed());
            }
        }

        return products;
    }
}

