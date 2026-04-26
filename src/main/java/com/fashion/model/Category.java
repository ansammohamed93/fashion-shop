package com.fashion.model;

public enum Category {
    WOMEN("Women"),
    MEN("Men"),
    KIDS("Kids"),
    ACCESSORIES("Accessories"),
    SHOES("Shoes"),
    BAGS("Bags");

    private final String displayName;

    Category(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}

