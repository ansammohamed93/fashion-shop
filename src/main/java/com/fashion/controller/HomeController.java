package com.fashion.controller;

import com.fashion.model.Category;
import com.fashion.service.CartService;
import com.fashion.service.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    private final ProductService productService;
    private final CartService cartService;

    public HomeController(ProductService productService, CartService cartService) {
        this.productService = productService;
        this.cartService = cartService;
    }

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("newArrivals", productService.getNewArrivals());
        model.addAttribute("flashSales", productService.getFlashSales());
        model.addAttribute("categories", Category.values());
        model.addAttribute("cartCount", cartService.getItemCount());
        return "index";
    }

    @GetMapping("/search")
    public String search(String q, Model model) {
        model.addAttribute("products", productService.searchProducts(q));
        model.addAttribute("query", q);
        model.addAttribute("categories", Category.values());
        model.addAttribute("cartCount", cartService.getItemCount());
        return "products";
    }
}

