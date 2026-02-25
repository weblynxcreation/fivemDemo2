const navHTML = `
<nav class="fixed top-0 left-0 right-0 z-50 glass-nav">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
            <a href="index.html" class="flex flex-col items-start group">
                <span class="text-2xl font-bold tracking-wider text-white logo-text-project group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">PROJECT</span>
                <span class="text-xl -mt-1 logo-text-santos group-hover:drop-shadow-[0_0_8px_rgba(107,140,66,0.5)] transition-all">Los Santos</span>
            </a>
            
            <div class="hidden md:flex items-center gap-8">
                <a href="index.html" class="nav-link text-gray-300 hover:text-white font-medium">Home</a>
                <a href="forum.html" class="nav-link text-gray-300 hover:text-white font-medium">Forum</a>
                <a href="store.html" class="nav-link text-gray-300 hover:text-white font-medium">Store</a>
                <a href="rules.html" class="nav-link text-gray-300 hover:text-white font-medium">Rules</a>
            </div>

            <div class="hidden md:flex items-center gap-4">
                <a href="https://discord.gg/fG4PFbQDCA" target="_blank" class="text-gray-400 hover:text-[#5865F2] transition-colors">
                    <i data-lucide="message-circle" class="w-6 h-6"></i>
                </a>
                <a href="index.html#join" class="px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all">
                    Join Server
                </a>
            </div>

            <button class="md:hidden text-white" onclick="toggleMobileMenu()">
                <i data-lucide="menu" class="w-6 h-6"></i>
            </button>
        </div>
    </div>

    <div id="mobile-menu" class="mobile-menu fixed inset-0 bg-[#0a0a0f] z-40 pt-20 px-4 md:hidden">
        <div class="flex flex-col gap-4">
            <a href="index.html" class="text-2xl font-bold text-white py-4 border-b border-white/10">Home</a>
            <a href="forum.html" class="text-2xl font-bold text-white py-4 border-b border-white/10">Forum</a>
            <a href="store.html" class="text-2xl font-bold text-white py-4 border-b border-white/10">Store</a>
            <a href="rules.html" class="text-2xl font-bold text-white py-4 border-b border-white/10">Rules</a>
            <a href="https://discord.gg/fG4PFbQDCA" target="_blank" class="flex items-center gap-3 text-xl text-[#5865F2] py-4">
                <i data-lucide="message-circle" class="w-6 h-6"></i>
                Join Discord
            </a>
        </div>
        <button class="absolute top-6 right-4 text-white" onclick="toggleMobileMenu()">
            <i data-lucide="x" class="w-6 h-6"></i>
        </button>
    </div>
</nav>
`;

const footerHTML = `
<footer class="bg-[#0f0f15] border-t border-white/5 py-12 px-4">
    <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
            <div class="md:col-span-2">
                <div class="flex flex-col items-start mb-4">
                    <span class="text-3xl font-bold tracking-wider text-white logo-text-project">PROJECT</span>
                    <span class="text-2xl -mt-2 logo-text-santos">Los Santos</span>
                </div>
                <p class="text-gray-400 text-sm leading-relaxed max-w-md">
                    The premier GTA V roleplay server. Join thousands of players in immersive storytelling and endless possibilities in Los Santos.
                </p>
            </div>
            
            <div>
                <h4 class="font-semibold text-white mb-4">Quick Links</h4>
                <ul class="space-y-2 text-sm text-gray-400">
                    <li><a href="index.html" class="hover:text-cyan-400 transition-colors">Home</a></li>
                    <li><a href="forum.html" class="hover:text-cyan-400 transition-colors">Forum</a></li>
                    <li><a href="store.html" class="hover:text-cyan-400 transition-colors">Store</a></li>
                    <li><a href="rules.html" class="hover:text-cyan-400 transition-colors">Rules</a></li>
                </ul>
            </div>
            
            <div>
                <h4 class="font-semibold text-white mb-4">Connect</h4>
                <div class="flex gap-4">
                    <a href="https://discord.gg/fG4PFbQDCA" target="_blank" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#5865F2] hover:text-white transition-all">
                        <i data-lucide="message-circle" class="w-5 h-5"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all">
                        <i data-lucide="twitter" class="w-5 h-5"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-all">
                        <i data-lucide="youtube" class="w-5 h-5"></i>
                    </a>
                </div>
                <div class="mt-4 text-sm text-gray-500">
                    <p>support@projectlossantos.com</p>
                </div>
            </div>
        </div>
        
        <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-gray-500 text-sm">&copy; 2026 Project Los Santos. All rights reserved.</p>
            <div class="flex gap-6 text-sm text-gray-500">
                <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
    </div>
</footer>
`;

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('nav-container');
    const footerContainer = document.getElementById('footer-container');
    
    if (navContainer) navContainer.innerHTML = navHTML;
    if (footerContainer) footerContainer.innerHTML = footerHTML;
    
    lucide.createIcons();
    
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        if (document.querySelector('.hero-logo')) {
            gsap.from('.hero-logo', {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: 'power3.out'
            });
            gsap.from('.hero-text', {
                duration: 1,
                y: 30,
                opacity: 0,
                delay: 0.3,
                ease: 'power3.out'
            });
            gsap.from('.hero-buttons', {
                duration: 1,
                y: 30,
                opacity: 0,
                delay: 0.5,
                ease: 'power3.out'
            });
            gsap.from('.hero-ip', {
                duration: 1,
                y: 20,
                opacity: 0,
                delay: 0.7,
                ease: 'power3.out'
            });
        }
    }
    
    let lastScroll = 0;
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
            nav.style.background = 'rgba(10, 10, 15, 0.8)';
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
});
