// ==================== EPISODE DATA ====================
const episodesData = [
    {
        id: 1,
        title: "The Teacher Who Spoke Up",
        name: "Rena Walker",
        description: "After standing up for what she believed was right, a devoted teacher found herself silenced and pushed out. Her story exposes how workplace bullying can hide behind professionalism.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=1000&fit=crop",
        duration: "28 min",
        category: "Workplace Justice",
        trending: true,
        story: `For years, Rena Walker poured her heart into teaching — not for recognition, but because she loved helping children learn and feel safe. So when she joined Dunwoody Prep, she was excited to be part of a school that claimed to "do things differently." But behind the classroom doors, Rena's compassion and dedication met an environment that wasn't what it seemed.

In late August 2025, a small misunderstanding between teachers spiraled into something much deeper. Rena was accused of behavior she says never happened — behavior that cost her the career she loved. Letters exchanged between staff and administration reveal tension, exclusion, and what Rena describes as targeted mistreatment. She recalls trying to de-escalate chaos in her classroom, only to face intimidation, false accusations, and emotional isolation.

"I was doing my best," she says. "But some people just didn't want to work with me. When we met Friday, I didn't feel I had a chance to share my side."

In a heartfelt note to the school's director, she wrote not out of anger — but from gratitude and pain. She thanked them for the opportunity, spoke of her love for children, and said she wanted to share her story so others would know they're not alone.

Rena believes what she went through was workplace bullying — and she's not staying silent about it. Through her courage to speak out, she hopes to bring awareness to teachers everywhere who face similar challenges but stay quiet out of fear.

This isn't just about one school. It's about the silent emotional battles happening in classrooms across America — where teachers give their all but aren't always treated with the respect they deserve. Rena's story is a call for empathy, transparency, and change in education workplaces.`,
        supportLinks: [
            { name: "Support Rena's Story", url: "https://example.com/support-rena", type: "Donate" },
            { name: "National Workplace Bullying Coalition", url: "https://www.workplacebullying.org", type: "Learn More" },
            { name: "Share Your Story", url: "https://example.com/share", type: "Get Involved" },
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

// ==================== NAVIGATION ====================
function navigateToPage(event, page) {
    event.preventDefault();
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    
    // Close mobile menu if open
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav.classList.contains('active')) {
        toggleMobileMenu();
    }
    
    // Show requested page
    if (page === 'home') {
        document.getElementById('page-home').style.display = 'block';
        window.scrollTo(0, 0);
    } else if (page === 'episodes') {
        document.getElementById('page-episodes').style.display = 'block';
        renderAllEpisodes();
        window.scrollTo(0, 0);
    } else if (page.startsWith('episode-')) {
        const episodeId = parseInt(page.split('-')[1]);
        showEpisodeDetail(episodeId);
    }
}

function showEpisodeDetail(episodeId) {
    const episode = episodesData.find(ep => ep.id === episodeId);
    if (!episode) {
        navigateToPage({ preventDefault: () => {} }, 'episodes');
        return;
    }
    
    document.getElementById('page-episode-detail').style.display = 'block';
    renderEpisodeDetail(episode);
    window.scrollTo(0, 0);
}

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    mobileNav.classList.toggle('active');
    
    if (mobileNav.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

// ==================== RENDER EPISODE CARD ====================
function createEpisodeCard(episode) {
    return `
        <a href="#episode-${episode.id}" class="episode-card" onclick="navigateToPage(event, 'episode-${episode.id}')">
            <div class="episode-image-wrapper">
                <img src="${episode.image}" alt="${episode.title}" class="episode-image">
                <div class="episode-overlay"></div>
                
                <div style="position: absolute; top: 1rem; left: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                    ${episode.trending ? `
                        <span class="badge badge-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.25rem;">
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                                <polyline points="16 7 22 7 22 13"/>
                            </svg>
                            Trending
                        </span>
                    ` : ''}
                    <span class="badge badge-secondary">${episode.category}</span>
                </div>

                <div style="position: absolute; bottom: 1rem; right: 1rem;">
                    <span class="badge badge-duration">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.25rem;">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        ${episode.duration}
                    </span>
                </div>
            </div>

            <div class="episode-content">
                <h3 class="episode-title">${episode.title}</h3>
                <p class="episode-name">${episode.name}</p>
                <p class="episode-description">${episode.description}</p>

                <div class="episode-footer">
                    <span class="episode-meta">${episode.category}</span>
                    <span class="episode-cta">
                        Read Story
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon">
                            <path d="M5 12h14"/>
                            <path d="m12 5 7 7-7 7"/>
                        </svg>
                    </span>
                </div>
            </div>
        </a>
    `;
}

// ==================== RENDER FEATURED EPISODES ====================
function renderFeaturedEpisodes() {
    const grid = document.getElementById('featuredEpisodesGrid');
    const featured = episodesData.slice(0, 3);
    grid.innerHTML = featured.map(episode => createEpisodeCard(episode)).join('');
}

// ==================== RENDER ALL EPISODES ====================
function renderAllEpisodes() {
    const grid = document.getElementById('allEpisodesGrid');
    grid.innerHTML = episodesData.map(episode => createEpisodeCard(episode)).join('');
    document.getElementById('noResults').style.display = 'none';
}

// ==================== SEARCH/FILTER EPISODES ====================
function filterEpisodes() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const grid = document.getElementById('allEpisodesGrid');
    const noResults = document.getElementById('noResults');
    
    const filtered = episodesData.filter(episode =>
        episode.title.toLowerCase().includes(searchQuery) ||
        episode.name.toLowerCase().includes(searchQuery) ||
        episode.description.toLowerCase().includes(searchQuery) ||
        episode.category.toLowerCase().includes(searchQuery)
    );
    
    if (filtered.length > 0) {
        grid.innerHTML = filtered.map(episode => createEpisodeCard(episode)).join('');
        grid.style.display = 'grid';
        noResults.style.display = 'none';
    } else {
        grid.style.display = 'none';
        noResults.style.display = 'block';
    }
}

// ==================== RENDER EPISODE DETAIL ====================
function renderEpisodeDetail(episode) {
    // Render hero content
    const detailContent = document.getElementById('episodeDetailContent');
    detailContent.innerHTML = `
        <div class="episode-detail-image">
            <img src="${episode.image}" alt="${episode.title}">
        </div>

        <div class="episode-detail-info">
            <span class="episode-category-badge">${episode.category}</span>

            <h1 class="episode-detail-title">${episode.title}</h1>

            <p class="episode-detail-name">${episode.name}</p>

            <div class="episode-detail-meta">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>${episode.duration}</span>
                </div>
                <span class="badge badge-secondary">${episode.category}</span>
            </div>

            <p class="episode-detail-description">${episode.description}</p>

            <div class="episode-detail-buttons">
                <button class="btn-primary" style="flex: 1;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                    </svg>
                    Support
                </button>
                <button class="btn-icon-only">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="18" cy="5" r="3"/>
                        <circle cx="6" cy="12" r="3"/>
                        <circle cx="18" cy="19" r="3"/>
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    // Render story content
    const storyContent = document.getElementById('storyContent');
    const paragraphs = episode.story.split('\n\n');
    storyContent.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
    
    // Render support section
    document.getElementById('supportTitle').textContent = `Support ${episode.name}`;
    document.getElementById('supportCtaText').textContent = 
        `100% of donations go directly to supporting ${episode.name}'s community work`;
    
    const supportLinksGrid = document.getElementById('supportLinksGrid');
    supportLinksGrid.innerHTML = episode.supportLinks.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="support-link-card">
            <div class="support-link-header">
                <div>
                    <span class="support-link-type">${link.type}</span>
                    <h3 class="support-link-name">${link.name}</h3>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="support-link-icon">
                    <path d="M7 7h10v10"/>
                    <path d="M7 17 17 7"/>
                </svg>
            </div>
        </a>
    `).join('');
}

// ==================== INITIALIZE ON LOAD ====================
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedEpisodes();
    
    // Check if there's a hash in the URL
    const hash = window.location.hash.slice(1); // Remove the '#'
    if (hash) {
        if (hash === 'episodes') {
            navigateToPage({ preventDefault: () => {} }, 'episodes');
        } else if (hash.startsWith('episode-')) {
            const episodeId = parseInt(hash.split('-')[1]);
            navigateToPage({ preventDefault: () => {} }, hash);
        }
    }
});
