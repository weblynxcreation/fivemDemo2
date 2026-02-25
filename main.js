import { getHomeView, getForumView, getStoreView, getRulesView } from './views.js';
import { initNavbarLogo } from './logo_component.js';


const routes = {
    'home': getHomeView,
    'forum': getForumView,
    'store': getStoreView,
    'rules': getRulesView
};


let currentRoute = 'home';


window.navigate = (route) => {
    if (routes[route]) {
        currentRoute = route;
        render();
        updateActiveLink();
        

        window.scrollTo(0, 0);
        

        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    }
};


function render() {
    const root = document.getElementById('app-root');
    const viewGenerator = routes[currentRoute];
    root.innerHTML = viewGenerator();
    

    lucide.createIcons();
}


function updateActiveLink() {

    document.querySelectorAll('.nav-link').forEach(link => {



        

        link.classList.remove('text-brand-olive', 'text-white');
        link.classList.add('text-gray-400');
        

        if(link.getAttribute('onclick').includes(`'${currentRoute}'`)) {
            link.classList.remove('text-gray-400');
            link.classList.add('text-white'); 
        }
    });
}


function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    initNavbarLogo();
    initMobileMenu();
    

    render();
    updateActiveLink();
});
