const forumData = {
    categories: {
        general: { name: "General Discussion", color: "category-general" },
        support: { name: "Support", color: "category-support" },
        bugs: { name: "Bug Reports", color: "category-bugs" },
        suggestions: { name: "Suggestions", color: "category-suggestions" }
    },
    topics: [
        {
            id: 1,
            title: "Welcome to Project Los Santos - Read First!",
            category: "general",
            author: "Admin",
            replies: 45,
            views: 1205,
            lastPost: "2 hours ago",
            lastAuthor: "Moderator",
            pinned: true
        },
        {
            id: 2,
            title: "Server Update 2.0 Patch Notes",
            category: "general",
            author: "Developer",
            replies: 89,
            views: 3402,
            lastPost: "5 hours ago",
            lastAuthor: "PlayerOne",
            pinned: true
        },
        {
            id: 3,
            title: "Lost my vehicle after restart",
            category: "support",
            author: "NewPlayer123",
            replies: 3,
            views: 45,
            lastPost: "30 mins ago",
            lastAuthor: "SupportTeam",
            pinned: false
        },
        {
            id: 4,
            title: "Character creation bug - infinite loading",
            category: "bugs",
            author: "BugHunter",
            replies: 12,
            views: 230,
            lastPost: "1 hour ago",
            lastAuthor: "Developer",
            pinned: false
        },
        {
            id: 5,
            title: "Suggestion: Add motorcycle gangs",
            category: "suggestions",
            author: "BikerBoy",
            replies: 56,
            views: 890,
            lastPost: "3 hours ago",
            lastAuthor: "Admin",
            pinned: false
        },
        {
            id: 6,
            title: "How to join the police force?",
            category: "general",
            author: "Citizen42",
            replies: 8,
            views: 156,
            lastPost: "6 hours ago",
            lastAuthor: "SergeantDoe",
            pinned: false
        },
        {
            id: 7,
            title: "Refund request - accidental purchase",
            category: "support",
            author: "Shopper99",
            replies: 2,
            views: 34,
            lastPost: "1 day ago",
            lastAuthor: "SupportTeam",
            pinned: false
        }
    ]
};

let currentCategory = 'all';

function initForum() {
    loadTopics();
    updateStats();
}

function loadTopics() {
    const container = document.getElementById('topics-list');
    if (!container) return;
    
    let topics = forumData.topics;
    
    const savedTopics = localStorage.getItem('pls_forum_topics');
    if (savedTopics) {
        const parsed = JSON.parse(savedTopics);
        topics = [...topics, ...parsed];
    }
    
    if (currentCategory !== 'all') {
        topics = topics.filter(t => t.category === currentCategory);
    }
    
    const pinned = topics.filter(t => t.pinned);
    const regular = topics.filter(t => !t.pinned);
    
    container.innerHTML = [...pinned, ...regular].map(topic => `
        <div class="topic-row p-4 flex items-center gap-4 border-b border-white/5 last:border-0">
            <div class="flex-shrink-0">
                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                    <i data-lucide="${topic.pinned ? 'pin' : 'message-square'}" class="w-5 h-5 text-cyan-400"></i>
                </div>
            </div>
            
            <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                    <span class="category-badge ${forumData.categories[topic.category].color} text-xs">
                        ${forumData.categories[topic.category].name}
                    </span>
                    ${topic.pinned ? '<span class="text-xs text-yellow-500 font-semibold">PINNED</span>' : ''}
                </div>
                <h3 class="font-semibold text-white truncate hover:text-cyan-400 cursor-pointer transition-colors">
                    ${topic.title}
                </h3>
                <div class="flex items-center gap-3 text-xs text-gray-500 mt-1">
                    <span>by <span class="text-gray-400">${topic.author}</span></span>
                    <span class="w-1 h-1 rounded-full bg-gray-600"></span>
                    <span>${topic.views} views</span>
                </div>
            </div>
            
            <div class="hidden md:flex flex-col items-center w-24 text-sm">
                <span class="font-bold text-white">${topic.replies}</span>
                <span class="text-xs text-gray-500">replies</span>
            </div>
            
            <div class="hidden md:block w-32 text-right text-sm">
                <div class="text-gray-400 text-xs">${topic.lastPost}</div>
                <div class="text-cyan-400 text-xs truncate">by ${topic.lastAuthor}</div>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

function filterCategory(category) {
    currentCategory = category;
    
    document.querySelectorAll('#category-list button').forEach(btn => {
        btn.classList.remove('bg-cyan-500/10', 'text-cyan-400', 'border', 'border-cyan-500/20');
        btn.classList.add('text-gray-400');
    });
    
    event.target.classList.remove('text-gray-400');
    event.target.classList.add('bg-cyan-500/10', 'text-cyan-400', 'border', 'border-cyan-500/20');
    
    loadTopics();
}

function updateStats() {
    const totalTopics = document.getElementById('total-topics');
    if (totalTopics) {
        const saved = localStorage.getItem('pls_forum_topics');
        const count = forumData.topics.length + (saved ? JSON.parse(saved).length : 0);
        totalTopics.textContent = count;
    }
}

function openNewTopicModal() {
    const modal = document.getElementById('new-topic-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeNewTopicModal() {
    const modal = document.getElementById('new-topic-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

function submitNewTopic() {
    const category = document.getElementById('new-topic-category').value;
    const title = document.getElementById('new-topic-title').value;
    const content = document.getElementById('new-topic-content').value;
    
    if (!title.trim() || !content.trim()) {
        alert('Please fill in all fields');
        return;
    }
    
    const newTopic = {
        id: Date.now(),
        title: title,
        category: category,
        author: "You",
        replies: 0,
        views: 0,
        lastPost: "Just now",
        lastAuthor: "You",
        pinned: false
    };
    
    const saved = localStorage.getItem('pls_forum_topics');
    const topics = saved ? JSON.parse(saved) : [];
    topics.push(newTopic);
    localStorage.setItem('pls_forum_topics', JSON.stringify(topics));
    
    document.getElementById('new-topic-title').value = '';
    document.getElementById('new-topic-content').value = '';
    
    closeNewTopicModal();
    loadTopics();
    updateStats();
    
    showNotification('Topic created successfully!');
}

function showNotification(message) {
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

document.addEventListener('DOMContentLoaded', initForum);
