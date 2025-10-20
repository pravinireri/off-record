// EPISODE DATA
const episodesData = [
    {
        id: 1,
        title: "Voices of Change",
        name: "Maya Rodriguez",
        description: "A young activist fighting for climate justice in underserved communities, bringing awareness to environmental racism",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop",
        duration: "32 min",
        category: "Activism",
        trending: true,
        story: `Maya Rodriguez grew up in one of the most polluted neighborhoods in her city, where factories dumped waste without regulation and children developed respiratory issues at alarming rates. Instead of accepting this as inevitable, Maya organized her community to fight back.

At just 19 years old, she founded "Green Justice Now," a grassroots organization that has successfully shut down two illegal waste facilities and secured $2 million in city funding for environmental cleanup in underserved areas.

Her journey wasn't easy. She faced intimidation from corporate interests, skepticism from local politicians, and exhaustion from balancing activism with her studies. But Maya persisted, driven by the memory of her younger sister's asthma attacks and her community's suffering.

Today, Maya continues to fight for environmental justice, proving that one voice can spark a movement and that the most powerful stories come from those living on the frontlines of injustice.`,
        supportLinks: [
            { name: "Support Green Justice Now", url: "https://example.com/donate", type: "Donate" },
            { name: "Follow Maya's Work", url: "https://example.com/maya", type: "Social Media" },
            { name: "Community GoFundMe", url: "https://example.com/gofundme", type: "Fundraiser" },
        ],
    },
    {
        id: 2,
        title: "Stories of Resilience",
        name: "Dr. James Chen",
        description: "Community leader rebuilding after displacement and finding hope through grassroots organizing",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
        duration: "45 min",
        category: "Community",
        trending: false,
        story: `Dr. James Chen lost everything when his neighborhood was demolished to make way for luxury development. His medical practice, his home, and his community of 30 years—gone in a matter of months.

Instead of starting over somewhere else, Dr. Chen stayed and fought. He organized displaced residents, documented the human cost of gentrification, and eventually secured funding to rebuild a community health center that serves thousands of former residents.

His story is one of incredible resilience. Despite losing his savings, facing legal battles with developers, and watching his community scatter across the city, Dr. Chen never gave up on the people who depended on him.

The new community center he helped build doesn't just provide healthcare—it's a gathering place, a symbol of resistance, and proof that communities can rebuild when they stand together. Dr. Chen's work reminds us that some things are worth fighting for, no matter the personal cost.`,
        supportLinks: [
            { name: "Community Health Center Fund", url: "https://example.com/health", type: "Donate" },
            { name: "Dr. Chen's Foundation", url: "https://example.com/foundation", type: "Organization" },
        ],
    },
    {
        id: 3,
        title: "Breaking Barriers",
        name: "Aisha Patel",
        description: "Healthcare worker bringing medical care to marginalized neighborhoods against systemic obstacles",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop",
        duration: "38 min",
        category: "Healthcare",
        trending: true,
        story: `Aisha Patel is a nurse practitioner who refused to accept that some neighborhoods simply didn't have access to quality healthcare. Working in one of the city's most underserved areas, she saw firsthand how systemic inequality meant life or death for her patients.

She started with a mobile clinic in a converted van, driving through neighborhoods where hospitals had closed and pharmacies had left. What began as one-person operation has grown into a network of community health workers providing care to thousands of people who were previously ignored by the healthcare system.

Aisha's work is revolutionary not just for what she does, but for how she does it. She trains local residents to become health advocates, works with traditional healers to bridge cultural gaps, and fights insurance companies that try to deny coverage to her patients.

Her story is one of breaking down barriers—institutional, financial, and cultural—to ensure that everyone, regardless of their zip code or bank account, has access to healthcare. Aisha proves that care is a right, not a privilege.`,
        supportLinks: [
            { name: "Mobile Health Clinic Fund", url: "https://example.com/mobile", type: "Donate" },
            { name: "Sponsor a Health Worker", url: "https://example.com/sponsor", type: "Sponsorship" },
            { name: "Aisha's Community Fund", url: "https://example.com/community", type: "General Support" },
        ],
    },
];

// MERCH DATA
const merchData = [
    {
        id: 1,
        name: "Off-Record T-Shirt",
        price: "$28",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
        description: "Premium cotton tee with embroidered logo",
        sizes: ["S", "M", "L", "XL", "2XL"],
    },
    {
        id: 2,
        name: "Off-Record Hoodie",
        price: "$58",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
        description: "Cozy pullover hoodie in forest green",
        sizes: ["S", "M", "L", "XL", "2XL"],
    },
    {
        id: 3,
        name: "Off-Record Mug",
        price: "$18",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=800&fit=crop",
        description: "Ceramic mug perfect for your morning coffee",
        sizes: ["One Size"],
    },
];

// ROUTING
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    
    // Show requested page
    const page = document.getElementById(`page-${pageId}`);
    if (page) {
        page.style.display = 'block';
        window.scrollTo(0, 0);
    }
}

function handleRouting() {
    const hash = window.location.hash.slice(1) || 'home';
    
    // Check if it's an episode detail page
    if (hash.startsWith('episode-')) {
        const episodeId = hash.split('-')[1];
        showPage('episode-detail');
        loadEpisodeDetail(parseInt(episodeId));
    } else {
        showPage(hash);
        
        // Load content for specific pages
        if (hash === 'home') {
            loadFeaturedEpisodes();
        } else if (hash === 'episodes') {
            loadAllEpisodes();
        } else if (hash === 'merch') {
            loadMerchProducts();
        }
    }
}

// RENDER EPISODES
function renderEpisodeCard(episode) {
    return `
        <div class="episode-card" onclick="window.location.hash='episode-${episode.id}'">
            <div class="episode-image-wrapper">
                <img src="${episode.image}" alt="${episode.name}" class="episode-image">
                <div class="episode-overlay"></div>
                ${episode.trending ? `
                    <span class="badge badge-trending">
                        <i data-lucide="trending-up" style="width:12px;height:12px;"></i>
                        Trending
                    </span>
                ` : ''}
                <span class="badge badge-category">${episode.category}</span>
                <span class="badge badge-duration">${episode.duration}</span>
            </div>
            
            <div class="episode-content">
                <h3 class="episode-title">${episode.title}</h3>
                <p class="episode-name">${episode.name}</p>
                <p class="episode-description">${episode.description}</p>
                
                <div class="episode-footer">
                    <div class="episode-meta">
                        <i data-lucide="book-open" style="width:16px;height:16px;"></i>
                        <span>${episode.duration}</span>
                    </div>
                    <span class="episode-cta">
                        Listen Now
                        <i data-lucide="arrow-right" class="btn-icon" style="width:16px;height:16px;"></i>
                    </span>
                </div>
            </div>
        </div>
    `;
}

function loadFeaturedEpisodes() {
    const grid = document.getElementById('featuredEpisodesGrid');
    if (grid) {
        grid.innerHTML = episodesData.map(renderEpisodeCard).join('');
        lucide.createIcons();
    }
}

function loadAllEpisodes() {
    const grid = document.getElementById('allEpisodesGrid');
    if (grid) {
        grid.innerHTML = episodesData.map(renderEpisodeCard).join('');
        lucide.createIcons();
    }
}

// EPISODE DETAIL
function loadEpisodeDetail(id) {
    const episode = episodesData.find(ep => ep.id === id);
    if (!episode) return;
    
    const detailContent = document.getElementById('episodeDetailContent');
    if (detailContent) {
        detailContent.innerHTML = `
            <div class="episode-detail-image">
                <img src="${episode.image}" alt="${episode.name}">
            </div>
            
            <div class="episode-detail-info">
                <div>
                    <span class="episode-category-badge">${episode.category}</span>
                    <h1 class="episode-detail-title">${episode.title}</h1>
                    <p class="episode-detail-name">${episode.name}</p>
                </div>
                
                <div class="episode-detail-meta">
                    <span style="display:flex;align-items:center;gap:0.5rem;">
                        <i data-lucide="clock" style="width:20px;height:20px;"></i>
                        ${episode.duration}
                    </span>
                </div>
                
                <div class="episode-detail-buttons">
                    <button class="btn-primary" style="flex:1;">
                        <i data-lucide="heart" style="width:16px;height:16px;margin-right:0.5rem;"></i>
                        Support ${episode.name.split(' ')[0]}
                    </button>
                    <button class="btn-icon-only">
                        <i data-lucide="share-2" style="width:16px;height:16px;"></i>
                    </button>
                </div>
            </div>
        `;
        lucide.createIcons();
    }
    
    // Story content
    const storyContent = document.getElementById('storyContent');
    if (storyContent) {
        const paragraphs = episode.story.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');
        storyContent.innerHTML = paragraphs;
    }
    
    // Support section
    const supportTitle = document.getElementById('supportTitle');
    if (supportTitle) {
        supportTitle.innerHTML = `Support <span class="text-primary">${episode.name}</span>`;
    }
    
    const supportLinksGrid = document.getElementById('supportLinksGrid');
    if (supportLinksGrid) {
        supportLinksGrid.innerHTML = episode.supportLinks.map(link => `
            <div class="support-link-card" onclick="window.open('${link.url}', '_blank')">
                <div class="support-link-header">
                    <div>
                        <span class="support-link-type">${link.type}</span>
                        <h3 class="support-link-name">${link.name}</h3>
                    </div>
                    <i data-lucide="external-link" class="support-link-icon"></i>
                </div>
                <button class="btn-primary" style="width:100%;">Visit Link</button>
            </div>
        `).join('');
        lucide.createIcons();
    }
    
    const supportCtaText = document.getElementById('supportCtaText');
    if (supportCtaText) {
        supportCtaText.textContent = `100% of donations go directly to supporting ${episode.name.split(' ')[0]} and their community work`;
    }
}

// MERCH
function loadMerchProducts() {
    const grid = document.getElementById('productsGrid');
    if (grid) {
        grid.innerHTML = merchData.map(product => `
            <div class="product-card">
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </div>
                
                <div class="product-content">
                    <div>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <p class="product-price">${product.price}</p>
                    </div>
                    
                    <div>
                        <p class="product-sizes-label">Available Sizes:</p>
                        <div class="product-sizes">
                            ${product.sizes.map(size => `<span class="size-option">${size}</span>`).join('')}
                        </div>
                    </div>
                    
                    <button class="btn-primary" style="width:100%;">
                        <i data-lucide="shopping-cart" style="width:16px;height:16px;margin-right:0.5rem;"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    }
}

// MOBILE MENU
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
    const isActive = mobileNav.classList.toggle('active');
    const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn.querySelector('.close-icon');
    
    if (isActive) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

// Close mobile menu when clicking links
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileMenuBtn.querySelector('.menu-icon').style.display = 'block';
        mobileMenuBtn.querySelector('.close-icon').style.display = 'none';
    });
});

// SEARCH FUNCTIONALITY
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = episodesData.filter(ep => 
            ep.title.toLowerCase().includes(searchTerm) ||
            ep.name.toLowerCase().includes(searchTerm) ||
            ep.description.toLowerCase().includes(searchTerm) ||
            ep.category.toLowerCase().includes(searchTerm)
        );
        
        const grid = document.getElementById('allEpisodesGrid');
        if (grid) {
            grid.innerHTML = filtered.map(renderEpisodeCard).join('');
            lucide.createIcons();
        }
    });
}

// INITIALIZATION
window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', () => {
    handleRouting();
    lucide.createIcons();
});
