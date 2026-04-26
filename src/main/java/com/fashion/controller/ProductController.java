package com.fashion.controller;

import com.fashion.model.Category;
import com.fashion.model.Product;
import com.fashion.service.CartService;
import com.fashion.service.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class ProductController {

    private final ProductService productService;
    private final CartService cartService;

    public ProductController(ProductService productService, CartService cartService) {
        this.productService = productService;
        this.cartService = cartService;
    }

    @GetMapping("/products")
    public String products(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) String size,
            @RequestParam(required = false) String color,
            @RequestParam(required = false) String sort,
            Model model) {

        Category cat = null;
        if (category != null && !category.isEmpty()) {
            try {
                cat = Category.valueOf(category.toUpperCase());
            } catch (IllegalArgumentException ignored) {}
        }

        List<Product> products = productService.getFilteredProducts(minPrice, maxPrice, cat, size, color, sort);

        model.addAttribute("products", products);
        model.addAttribute("categories", Category.values());
        model.addAttribute("selectedCategory", cat);
        model.addAttribute("cartCount", cartService.getItemCount());
        return "products";
    }

    @GetMapping("/product/{id}")
    public String productDetail(@PathVariable Long id, Model model) {
        Product product = productService.getProductById(id).orElse(null);
        if (product == null) {
            return "redirect:/products";
        }
        model.addAttribute("product", product);
        model.addAttribute("relatedProducts", productService.getProductsByCategory(product.getCategory()));
        model.addAttribute("cartCount", cartService.getItemCount());
        return "product-detail";
    }
}

