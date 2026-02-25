
export function initNavbarLogo() {
    const container = document.getElementById('nav-logo-container');
    if(container) {
        container.innerHTML = `
            <div class="flex flex-col items-start leading-none group">
                <div class="text-xl font-block text-white tracking-tight logo-block group-hover:text-gray-200 transition-colors">PROJECT</div>
                <div class="text-lg font-script text-brand-olive -mt-2 ml-0.5 logo-script group-hover:text-lime-400 transition-colors">Los Santos</div>
            </div>
        `;
    }
}
