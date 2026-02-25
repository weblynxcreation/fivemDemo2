export const newsData = [
    {
        id: 1,
        title: "Server Update v2.5: The Heist Update",
        date: "Feb 24, 2026",
        category: "Update",
        excerpt: "New banking systems, improved police mechanics, and 5 new custom vehicles added to the import dealership."
    },
    {
        id: 2,
        title: "Community Event: Street Racing Series",
        date: "Feb 20, 2026",
        category: "Event",
        excerpt: "Join us this Friday at the Vinewood Bowl for the start of the underground racing season. Big cash prizes!"
    },
    {
        id: 3,
        title: "Staff Applications Open",
        date: "Feb 15, 2026",
        category: "Announcement",
        excerpt: "We are looking for dedicated moderators to help manage our growing community. Apply on the forums."
    }
];

export const forumCategories = [
    {
        id: "general",
        title: "General Discussion",
        description: "Talk about anything related to Project Los Santos.",
        icon: "message-square",
        topics: 1240,
        recent: "Best starter car?"
    },
    {
        id: "support",
        title: "Support & Help",
        description: "Having trouble connecting? Ask here.",
        icon: "life-buoy",
        topics: 450,
        recent: "Voice chat issues"
    },
    {
        id: "bugs",
        title: "Bug Reports",
        description: "Report glitches and technical issues.",
        icon: "bug",
        topics: 89,
        recent: "Inventory glitch at PD"
    },
    {
        id: "suggestions",
        title: "Suggestions",
        description: "Help us improve the server with your ideas.",
        icon: "lightbulb",
        topics: 312,
        recent: "Add more fishing spots"
    },
    {
        id: "factions",
        title: "Factions & Gangs",
        description: "Recruitment and diplomacy for verified groups.",
        icon: "users",
        topics: 560,
        recent: "Ballas Recruitment Open"
    }
];

export const storeItems = [
    {
        id: 1,
        name: "VIP Gold",
        price: 15.00,
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1000&auto=format&fit=crop",
        features: ["Priority Queue", "Gold Name Color", "$50,000 Starting Cash", "Custom Phone Number"]
    },
    {
        id: 2,
        name: "Custom Import Vehicle",
        price: 35.00,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
        features: ["1 of 1 Import Token", "Full Performance Tunes", "Custom License Plate", "Garage Slot"]
    },
    {
        id: 3,
        name: "Gang Starter Pack",
        price: 50.00,
        image: "https://images.unsplash.com/photo-1599557288673-868cb5a4205f?q=80&w=1000&auto=format&fit=crop",
        features: ["Gang HQ Mapping", "Stash Access", "5x Gang Vehicles", "Radio Frequency"]
    },
    {
        id: 4,
        name: "Priority Queue Tier 1",
        price: 10.00,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop",
        features: ["Skip the line", "Valid for 30 days"]
    }
];

export const serverRules = [
    {
        title: "General Conduct",
        rules: [
            "Respect all players and staff. Toxicity is not tolerated.",
            "No racism, homophobia, or hate speech.",
            "English only in public chats."
        ]
    },
    {
        title: "Roleplay Standards",
        rules: [
            "No RDM (Random Deathmatch) or VDM (Vehicle Deathmatch).",
            "Value your life (FearRP). If someone has a gun to you, comply.",
            "No Metagaming. Do not use outside information in-game.",
            "No Powergaming. Do not force actions on others without chance."
        ]
    },
    {
        title: "Criminal Activities",
        rules: [
            "Maximum of 4 members per criminal heist.",
            "Police must be online for major bank robberies.",
            "No robbing new players (under 10 hours playtime)."
        ]
    }
];
