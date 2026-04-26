// ===== CART MANAGEMENT =====
function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(productId, quantity, size, color) {
    const cart = getCart();
    const existing = cart.find(item => item.productId === productId && item.size === size && item.color === color);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ productId, quantity, size, color });
    }
    saveCart(cart);
    showToast('Added to cart successfully!', 'success');
}

function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}

function updateCartQty(index, qty) {
    const cart = getCart();
    if (qty >= 1 && qty <= 10) {
        cart[index].quantity = qty;
        saveCart(cart);
        renderCart();
    }
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartBadge();
    renderCart();
}

function getCartCount() {
    return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.productId);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
}

function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) badge.textContent = getCartCount();
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `custom-toast ${type}`;
    toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100px)';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// ===== PRODUCT RENDERING =====
function renderProductCard(product) {
    const discount = product.discountPercent > 0 ? `<span class="product-badge badge-sale">${product.discountPercent}% OFF</span>` : '';
    const newBadge = product.newArrival ? `<span class="product-badge badge-new">New</span>` : '';
    const originalPrice = product.originalPrice > product.price ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : '';
    return `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.imageUrl}" alt="${product.name}" loading="lazy">
                    ${newBadge}
                    ${discount}
                    <div class="product-actions">
                        <a href="product.html?id=${product.id}" class="action-btn"><i class="fas fa-eye"></i></a>
                        <button class="action-btn" onclick='quickAdd(${product.id})'><i class="fas fa-shopping-bag"></i></button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h5 class="product-title">${product.name}</h5>
                    <div class="product-rating"><i class="fas fa-star"></i><span>${product.rating} (${product.reviewCount})</span></div>
                    <div class="product-price">
                        <span class="price-current">$${product.price.toFixed(2)}</span>
                        ${originalPrice}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function quickAdd(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const size = product.sizes[0];
    const color = product.colors[0];
    addToCart(productId, 1, size, color);
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        badge.style.transform = 'scale(1.5)';
        setTimeout(() => badge.style.transform = 'scale(1)', 200);
    }
}

// ===== URL PARAMS =====
function getParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

// ===== NAVBAR =====
function renderNavbar() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    const catLinks = categories.map(cat =>
        `<li><a class="dropdown-item" href="products.html?category=${cat.name}">${cat.displayName}</a></li>`
    ).join('');

    nav.innerHTML = `
        <div class="container">
            <a class="navbar-brand fw-bold" href="index.html">
                <i class="fas fa-crown me-2"></i>FASHION<span class="text-accent">SHOP</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="products.html">Shop</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Categories</a>
                        <ul class="dropdown-menu">${catLinks}</ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="products.html?sort=newest">New Arrivals</a></li>
                </ul>
                <div class="d-flex align-items-center gap-3">
                    <form class="search-form d-flex" action="products.html" method="get">
                        <input type="search" name="q" class="form-control search-input" placeholder="Search..." required>
                        <button type="submit" class="btn search-btn"><i class="fas fa-search"></i></button>
                    </form>
                    <a href="cart.html" class="cart-icon position-relative">
                        <i class="fas fa-shopping-bag fs-5"></i>
                        <span class="cart-badge">${getCartCount()}</span>
                    </a>
                </div>
            </div>
        </div>
    `;
}

function renderFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;
    footer.innerHTML = `
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4">
                    <h4 class="fw-bold mb-3"><i class="fas fa-crown me-2"></i>FASHION<span class="text-accent">SHOP</span></h4>
                    <p class="text-muted">Your ultimate destination for trendy fashion. Discover the latest styles at unbeatable prices.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-tiktok"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-6">
                    <h6 class="fw-bold mb-3">Shop</h6>
                    <ul class="list-unstyled">
                        <li><a href="products.html">All Products</a></li>
                        <li><a href="products.html?category=WOMEN">Women</a></li>
                        <li><a href="products.html?category=MEN">Men</a></li>
                        <li><a href="products.html?category=KIDS">Kids</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-6">
                    <h6 class="fw-bold mb-3">Help</h6>
                    <ul class="list-unstyled">
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="col-lg-4">
                    <h6 class="fw-bold mb-3">Newsletter</h6>
                    <p class="text-muted small">Subscribe for exclusive deals and new arrivals!</p>
                    <form class="newsletter-form" onsubmit="event.preventDefault(); showToast('Subscribed!','success');">
                        <div class="input-group">
                            <input type="email" class="form-control" placeholder="Your email" required>
                            <button class="btn btn-accent" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <hr class="my-4">
            <div class="row align-items-center">
                <div class="col-md-6 text-center text-md-start text-muted small">
                    &copy; 2024 Fashion Shop. All rights reserved.
                </div>
                <div class="col-md-6 text-center text-md-end text-muted small">
                    <span class="me-3"><i class="fas fa-image me-1"></i>Images: <a href="https://unsplash.com" target="_blank" class="text-accent text-decoration-none">Unsplash</a></span>
                    <span><i class="fas fa-database me-1"></i>Data: Local JSON</span>
                </div>
            </div>
        </div>
    `;
}

// ===== COUNTDOWN =====
function initCountdown() {
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    if (!hoursEl || !minutesEl || !secondsEl) return;
    let totalSeconds = 4 * 3600 + 32 * 60 + 15;
    setInterval(() => {
        totalSeconds--;
        if (totalSeconds < 0) totalSeconds = 4 * 3600 + 32 * 60 + 15;
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        hoursEl.textContent = String(h).padStart(2, '0');
        minutesEl.textContent = String(m).padStart(2, '0');
        secondsEl.textContent = String(s).padStart(2, '0');
    }, 1000);
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animate section titles
    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('scroll-animate', 'fade-up');
        observer.observe(el);
    });

    // Animate product cards with stagger
    document.querySelectorAll('.product-card').forEach((el, i) => {
        el.classList.add('scroll-animate', 'fade-up');
        el.style.transitionDelay = `${i * 0.08}s`;
        observer.observe(el);
    });

    // Animate category cards with stagger
    document.querySelectorAll('.category-card').forEach((el, i) => {
        el.classList.add('scroll-animate', 'scale-up');
        el.style.transitionDelay = `${i * 0.06}s`;
        observer.observe(el);
    });

    // Animate countdown items
    document.querySelectorAll('.countdown-item').forEach((el, i) => {
        el.classList.add('scroll-animate', 'scale-up');
        el.style.transitionDelay = `${i * 0.1}s`;
        observer.observe(el);
    });

    // Animate feature banner items
    document.querySelectorAll('.py-5 .col-md-3, .py-5 .col-4').forEach((el, i) => {
        el.classList.add('scroll-animate', 'fade-up');
        el.style.transitionDelay = `${i * 0.1}s`;
        observer.observe(el);
    });

    // Animate trending section cards
    document.querySelectorAll('.trending-section .product-card').forEach((el, i) => {
        el.classList.add('scroll-animate', 'fade-up');
        el.style.transitionDelay = `${i * 0.08}s`;
        observer.observe(el);
    });

    // Animate testimonial cards
    document.querySelectorAll('.testimonial-card').forEach((el, i) => {
        el.classList.add('scroll-animate', 'fade-up');
        el.style.transitionDelay = `${i * 0.12}s`;
        observer.observe(el);
    });

    // Animate cart items
    document.querySelectorAll('.cart-item').forEach((el, i) => {
        el.classList.add('scroll-animate', 'fade-right');
        el.style.transitionDelay = `${i * 0.08}s`;
        observer.observe(el);
    });

    // Animate cart summary
    const cartSummary = document.querySelector('.cart-summary');
    if (cartSummary) {
        cartSummary.classList.add('scroll-animate', 'fade-left');
        observer.observe(cartSummary);
    }

    // Animate filter sidebar
    const filterSidebar = document.querySelector('.filter-sidebar');
    if (filterSidebar) {
        filterSidebar.classList.add('scroll-animate', 'fade-left');
        observer.observe(filterSidebar);
    }

    // Animate product detail gallery
    const productGallery = document.querySelector('.product-gallery');
    if (productGallery) {
        productGallery.classList.add('scroll-animate', 'fade-right');
        observer.observe(productGallery);
    }

    // Animate product detail info
    const productDetailInfo = document.querySelector('.product-detail-info');
    if (productDetailInfo) {
        productDetailInfo.classList.add('scroll-animate', 'fade-left');
        observer.observe(productDetailInfo);
    }
}

// ===== NAVBAR SCROLL =====
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '8px 0';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            navbar.style.padding = '12px 0';
            navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        }
    });
}

// ===== RE-INIT SCROLL ANIMATIONS (call after dynamic content render) =====
function reinitScrollAnimations() {
    initScrollAnimations();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderFooter();
    updateCartBadge();
    initCountdown();
    initNavbarScroll();
    initScrollAnimations();
    initHeroScrollEffect();
});

// ===== HERO SCROLL EFFECT =====
function initHeroScrollEffect() {
    const heroImage = document.querySelector('.hero-image');
    if (!heroImage) return;
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroHeight = document.querySelector('.hero').offsetHeight;
        const scrollPercent = Math.min(scrollY / heroHeight, 1);
        
        // Move image to the right and scale up as user scrolls
        const translateX = scrollPercent * 50;
        const scale = 1 + (scrollPercent * 0.1);
        const rotateY = -10 + (scrollPercent * 10);
        
        heroImage.style.transform = `translateX(${translateX}px) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`;
    });
}

