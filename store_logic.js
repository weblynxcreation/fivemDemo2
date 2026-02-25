const storeData = [
    {
        id: 1,
        name: "Bronze VIP",
        category: "vip",
        price: 9.99,
        description: "Basic VIP status with priority queue and $50,000 in-game cash.",
        features: ["Priority Queue", "$50,000 Cash", "Bronze Discord Rank", "1 Custom Vehicle"],
        color: "from-orange-600 to-amber-600"
    },
    {
        id: 2,
        name: "Silver VIP",
        category: "vip",
        price: 19.99,
        description: "Enhanced VIP package with exclusive vehicles and monthly bonuses.",
        features: ["Fast Priority Queue", "$150,000 Cash", "Silver Discord Rank", "3 Custom Vehicles", "Exclusive Clothing"],
        color: "from-gray-400 to-gray-600"
    },
    {
        id: 3,
        name: "Gold VIP",
        category: "vip",
        price: 39.99,
        description: "Premium tier with maximum benefits and exclusive access.",
        features: ["Instant Queue", "$500,000 Cash", "Gold Discord Rank", "10 Custom Vehicles", "Exclusive Properties", "Monthly Crate"],
        color: "from-yellow-500 to-amber-500"
    },
    {
        id: 4,
        name: "Luxury Vehicle Pack",
        category: "vehicles",
        price: 14.99,
        description: "Collection of 5 imported luxury vehicles for your garage.",
        features: ["5 Exclusive Cars", "Custom Plates", "Premium Insurance"],
        color: "from-blue-600 to-cyan-600"
    },
    {
        id: 5,
        name: "Supercar Collection",
        category: "vehicles",
        price: 24.99,
        description: "The ultimate supercar pack with the fastest vehicles on the server.",
        features: ["3 Hypercars", "Custom Handling", "Unique Paint Jobs", "VIP Parking Access"],
        color: "from-red-600 to-pink-600"
    },
    {
        id: 6,
        name: "Starter Pack",
        category: "packages",
        price: 4.99,
        description: "Perfect for new players. Get a head start in Los Santos.",
        features: ["$25,000 Cash", "Basic Apartment", "Economy Car", "Job Equipment"],
        color: "from-green-600 to-emerald-600"
    },
    {
        id: 7,
        name: "Criminal Empire",
        category: "packages",
        price: 49.99,
        description: "Everything needed to establish your criminal organization.",
        features: ["$1,000,000 Cash", "Warehouse", "Illegal Business License", "Armored Vehicle", "Weapon Cache"],
        color: "from-purple-600 to-indigo-600"
    }
];

let cart = JSON.parse(localStorage.getItem('pls_cart')) || [];

function initStore() {
    renderStore(storeData);
    updateCartUI();
}

function renderStore(items) {
    const grid = document.getElementById('store-grid');
    if (!grid) return;
    
    grid.innerHTML = items.map(item => `
        <div class="bg-[#15151f] rounded-xl border border-white/5 overflow-hidden card-hover group">
            <div class="h-32 bg-gradient-to-br ${item.color} relative overflow-hidden">
                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-30"></div>
                <div class="absolute bottom-4 left-4">
                    <span class="text-xs font-bold uppercase tracking-wider text-white/80 bg-black/20 px-2 py-1 rounded">${item.category}</span>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">${item.name}</h3>
                <p class="text-gray-400 text-sm mb-4 line-clamp-2">${item.description}</p>
                <ul class="space-y-2 mb-6">
                    ${item.features.map(f => `
                        <li class="flex items-center gap-2 text-sm text-gray-300">
                            <i data-lucide="check" class="w-4 h-4 text-cyan-400"></i>
                            ${f}
                        </li>
                    `).join('')}
                </ul>
                <div class="flex items-center justify-between pt-4 border-t border-white/5">
                    <span class="text-2xl font-bold text-white">$${item.price}</span>
                    <button onclick="addToCart(${item.id})" class="px-4 py-2 bg-white/10 hover:bg-cyan-500 hover:text-black rounded-lg font-medium transition-all flex items-center gap-2">
                        <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                        Add
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

function filterStore(category) {
    document.querySelectorAll('[id^="filter-"]').forEach(btn => {
        btn.classList.remove('bg-cyan-500/10', 'text-cyan-400', 'border-cyan-500/20');
        btn.classList.add('bg-white/5', 'text-gray-400', 'border-white/10');
    });
    
    const activeBtn = document.getElementById(`filter-${category}`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-white/5', 'text-gray-400', 'border-white/10');
        activeBtn.classList.add('bg-cyan-500/10', 'text-cyan-400', 'border-cyan-500/20');
    }
    
    if (category === 'all') {
        renderStore(storeData);
    } else {
        renderStore(storeData.filter(item => item.category === category));
    }
}

function addToCart(itemId) {
    const item = storeData.find(i => i.id === itemId);
    if (!item) return;
    
    const existing = cart.find(i => i.id === itemId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    saveCart();
    updateCartUI();
    showCartNotification(`Added ${item.name} to cart`);
}

function removeFromCart(itemId) {
    cart = cart.filter(i => i.id !== itemId);
    saveCart();
    updateCartUI();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('pls_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (!cartCount || !cartItems || !cartTotal) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (totalItems > 0) {
        cartCount.textContent = totalItems;
        cartCount.classList.remove('hidden');
    } else {
        cartCount.classList.add('hidden');
    }
    
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center py-8">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="flex gap-4 mb-4 bg-white/5 p-4 rounded-lg">
                <div class="flex-1">
                    <h4 class="font-semibold text-sm">${item.name}</h4>
                    <p class="text-gray-400 text-xs">$${item.price} each</p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs">-</button>
                    <span class="text-sm w-4 text-center">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs">+</button>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-red-400 hover:text-red-300">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            </div>
        `).join('');
        lucide.createIcons();
    }
}

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('translate-x-full');
    }
}

function checkout() {
    if (cart.length === 0) return;
    
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
    
    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
}

function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

function showCartNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-8 right-8 bg-[#15151f] border border-cyan-500/30 text-white px-6 py-4 rounded-lg shadow-[0_0_30px_rgba(0,212,255,0.2)] z-50 flex items-center gap-3 animate-float';
    toast.innerHTML = `
        <i data-lucide="check-circle" class="w-5 h-5 text-cyan-400"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);
    lucide.createIcons();
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', initStore);
