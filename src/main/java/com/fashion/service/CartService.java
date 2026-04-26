package com.fashion.service;

import com.fashion.model.CartItem;
import com.fashion.model.Product;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@SessionScope
public class CartService {

    private final List<CartItem> cartItems = new ArrayList<>();

    public void addToCart(Product product, int quantity, String size, String color) {
        Optional<CartItem> existing = cartItems.stream()
                .filter(item -> item.getProduct().getId().equals(product.getId())
                        && item.getSelectedSize().equals(size)
                        && item.getSelectedColor().equals(color))
                .findFirst();

        if (existing.isPresent()) {
            existing.get().setQuantity(existing.get().getQuantity() + quantity);
        } else {
            cartItems.add(new CartItem(product, quantity, size, color));
        }
    }

    public void removeFromCart(int index) {
        if (index >= 0 && index < cartItems.size()) {
            cartItems.remove(index);
        }
    }

    public void updateQuantity(int index, int quantity) {
        if (index >= 0 && index < cartItems.size() && quantity > 0) {
            cartItems.get(index).setQuantity(quantity);
        }
    }

    public List<CartItem> getCartItems() {
        return new ArrayList<>(cartItems);
    }

    public double getTotal() {
        return cartItems.stream().mapToDouble(CartItem::getTotal).sum();
    }

    public int getItemCount() {
        return cartItems.stream().mapToInt(CartItem::getQuantity).sum();
    }

    public void clearCart() {
        cartItems.clear();
    }
}

