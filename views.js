import { newsData, forumCategories, storeItems, serverRules } from './data_store.js';

const renderLogo = (size = 'normal') => {
    const scale = size === 'large' ? 'scale-150' : 'scale-100';
    return `
    <div class="flex flex-col items-center select-none ${scale} origin-center transition-transform">
        <h1 class="text-4xl md:text-5xl font-block text-white tracking-tight logo-block leading-none">PROJECT</h1>
        <span class="text-3xl md:text-4xl font-script text-brand-olive -mt-3 md:-mt-4 logo-script z-10 relative">Los Santos</span>
    </div>
    `;
};

export const getHomeView = () => `
    <!-- Hero Section -->
    <section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-40"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
        
        <div class="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center animate-fade-in">
            ${renderLogo('large')}
            
            <p class="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl font-light">
                Immerse yourself in a living, breathing city. Build your empire, enforce the law, or live the civilian life in the most advanced GTA V Roleplay server.
            </p>
            
            <div class="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center">
                <button class="px-8 py-4 bg-brand-olive hover:bg-lime-500 text-black font-bold text-lg rounded-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(132,204,22,0.4)] flex items-center justify-center gap-2">
                    <i data-lucide="play" class="w-5 h-5 fill-current"></i>
                    Join Server
                </button>
                <button class="px-8 py-4 bg-brand-surface border border-brand-border hover:border-brand-olive text-white font-medium text-lg rounded-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 group">
                    <i data-lucide="copy" class="w-5 h-5 group-hover:text-brand-olive"></i>
                    <span>play.projectls.net</span>
                </button>
            </div>

            <div class="mt-8 flex items-center gap-2 text-sm text-gray-400 bg-black/40 px-4 py-2 rounded-full border border-white/10">
                <span class="status-dot"></span>
                <span>342 / 500 Players Online</span>
            </div>
        </div>
    </section>

    <!-- News Section -->
    <section class="max-w-7xl mx-auto px-4 py-20">
        <div class="flex items-center justify-between mb-10">
            <h2 class="text-3xl font-bold text-white tracking-tight">Latest <span class="text-brand-olive">Updates</span></h2>
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">View Archive -></a>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${newsData.map((news, index) => `
                <article class="glass-card p-6 rounded-lg animate-fade-in" style="animation-delay: ${index * 100}ms">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-xs font-semibold text-brand-olive bg-brand-oliveDim px-2 py-1 rounded border border-brand-olive/20">${news.category}</span>
                        <span class="text-xs text-gray-500">${news.date}</span>
                    </div>
                    <h3 class="text-xl font-semibold text-white mb-2 hover:text-brand-olive cursor-pointer transition-colors">${news.title}</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">${news.excerpt}</p>
                    <a href="#" class="mt-4 inline-block text-sm text-brand-olive hover:text-white transition-colors font-medium">Read more</a>
                </article>
            `).join('')}
        </div>
    </section>
`;

export const getForumView = () => `
    <div class="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
        <div class="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-brand-border pb-6 gap-4">
            <div>
                <h1 class="text-4xl font-bold text-white mb-2">Community <span class="text-brand-olive">Forums</span></h1>
                <p class="text-gray-400">Join the discussion, report bugs, or apply for factions.</p>
            </div>
            <div class="flex gap-3">
                 <button class="bg-brand-surface hover:bg-brand-border text-white px-4 py-2 rounded-md text-sm font-medium border border-brand-border transition-colors">
                    Login
                </button>
                <button class="bg-brand-olive hover:bg-lime-500 text-black px-4 py-2 rounded-md text-sm font-bold shadow-lg shadow-brand-olive/20 transition-colors">
                    New Topic
                </button>
            </div>
        </div>

        <div class="space-y-4">
            ${forumCategories.map((cat, index) => `
                <div class="glass-card p-6 rounded-lg flex flex-col md:flex-row items-center gap-6 group hover:bg-brand-surface/80 transition-colors">
                    <div class="p-4 bg-brand-dark rounded-full text-brand-olive group-hover:scale-110 transition-transform">
                        <i data-lucide="${cat.icon}" class="w-6 h-6"></i>
                    </div>
                    <div class="flex-grow text-center md:text-left">
                        <h3 class="text-xl font-semibold text-white group-hover:text-brand-olive transition-colors cursor-pointer">${cat.title}</h3>
                        <p class="text-sm text-gray-400 mt-1">${cat.description}</p>
                    </div>
                    <div class="flex gap-8 text-center md:text-right w-full md:w-auto justify-center md:justify-end">
                        <div>
                            <div class="text-lg font-bold text-white">${cat.topics}</div>
                            <div class="text-xs text-gray-500 uppercase tracking-wide">Topics</div>
                        </div>
                        <div class="hidden md:block w-32">
                            <div class="text-sm text-gray-300 truncate font-medium">"${cat.recent}"</div>
                            <div class="text-xs text-gray-500">Just now</div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
`;

export const getStoreView = () => `
    <div class="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
        <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-white mb-4">Server <span class="text-brand-olive">Store</span></h1>
            <p class="text-gray-400 max-w-2xl mx-auto">Support the server and get exclusive cosmetic rewards. All donations go directly towards server hosting and development.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${storeItems.map((item, index) => `
                <div class="glass-card rounded-xl overflow-hidden flex flex-col h-full group">
                    <div class="h-48 overflow-hidden relative">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-brand-surface to-transparent"></div>
                        <div class="absolute bottom-3 right-3 bg-brand-olive text-black font-bold px-3 py-1 rounded text-sm">
                            $${item.price.toFixed(2)}
                        </div>
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <h3 class="text-xl font-bold text-white mb-4">${item.name}</h3>
                        <ul class="space-y-2 mb-6 flex-grow">
                            ${item.features.map(f => `
                                <li class="flex items-center gap-2 text-sm text-gray-400">
                                    <i data-lucide="check" class="w-4 h-4 text-brand-olive"></i>
                                    ${f}
                                </li>
                            `).join('')}
                        </ul>
                        <button class="w-full py-3 bg-brand-surface border border-brand-border hover:border-brand-olive hover:text-brand-olive text-white rounded font-medium transition-all flex items-center justify-center gap-2">
                            <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="mt-20 p-8 glass-panel rounded-lg border border-red-500/20">
            <h3 class="text-lg font-bold text-white mb-2">Refund Policy & Terms</h3>
            <p class="text-sm text-gray-400 leading-relaxed">
                By purchasing from the store, you agree that all sales are final. Since these are digital goods, we do not offer refunds. 
                Perks are subject to server rules; being banned for rule violations may result in the loss of your purchased perks without refund.
                Please ensure you are over 18 or have parental permission before donating.
            </p>
        </div>
    </div>
`;

export const getRulesView = () => `
    <div class="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
        <div class="mb-12 text-center">
            <h1 class="text-4xl font-bold text-white mb-4">Server <span class="text-brand-olive">Rules</span></h1>
            <p class="text-gray-400">Knowledge of these rules is required to play on Project Los Santos.</p>
        </div>

        <div class="space-y-8">
            ${serverRules.map((category, index) => `
                <div class="glass-panel rounded-lg p-8 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-1 h-full bg-brand-olive"></div>
                    <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span class="text-brand-olive font-mono opacity-50">0${index + 1}.</span>
                        ${category.title}
                    </h2>
                    <ul class="space-y-4">
                        ${category.rules.map(rule => `
                            <li class="flex items-start gap-3 text-gray-300">
                                <i data-lucide="chevron-right" class="w-5 h-5 text-brand-olive shrink-0 mt-0.5"></i>
                                <span class="leading-relaxed">${rule}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>

        <div class="mt-12 text-center">
            <h3 class="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
            <div class="glass-card p-6 rounded-lg text-left">
                <details class="group mb-4">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none text-white">
                        <span>How do I get whitelisted?</span>
                        <span class="transition group-open:rotate-180">
                            <i data-lucide="chevron-down" class="w-5 h-5"></i>
                        </span>
                    </summary>
                    <div class="text-gray-400 mt-3 group-open:animate-fadeIn text-sm">
                        You can apply for the whitelist on our Forum under the "Applications" section. You will need to link your Discord account.
                    </div>
                </details>
                <div class="w-full h-px bg-brand-border my-2"></div>
                <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none text-white">
                        <span>What voice chat system do you use?</span>
                        <span class="transition group-open:rotate-180">
                            <i data-lucide="chevron-down" class="w-5 h-5"></i>
                        </span>
                    </summary>
                    <div class="text-gray-400 mt-3 group-open:animate-fadeIn text-sm">
                        We use mumble-voip (in-game voice). No external TeamSpeak plugin is required. Check your audio settings in GTA V.
                    </div>
                </details>
            </div>
        </div>
    </div>
`;
