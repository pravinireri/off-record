// ============================================
// PRELOADER
// ============================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1600);
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .btn-subscribe-mobile');

mobileMenuBtn.addEventListener('click', () => {
    const isActive = mobileNav.classList.toggle('active');
    
    if (isActive) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

// Close mobile menu when a link is clicked
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });
});

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = 80;
            const targetPosition = target.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// STORIES DATA & RENDERING
// ============================================
const storiesData = [
    {
        id: 1,
        title: "The Rise of Digital Journalism",
        excerpt: "How technology is reshaping the way we tell and consume stories in the modern age.",
        category: "Technology",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
        trending: true
    },
    {
        id: 2,
        title: "Voices from the Margins",
        excerpt: "Amplifying stories that traditional media often overlooks in our changing world.",
        category: "Society",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&h=400&fit=crop",
        trending: false
    },
    {
        id: 3,
        title: "Climate Change Chronicles",
        excerpt: "On-the-ground reporting from communities facing the realities of environmental change.",
        category: "Environment",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=400&fit=crop",
        trending: true
    }
];

function renderStories() {
    const storiesGrid = document.getElementById('storiesGrid');
    
    storiesGrid.innerHTML = storiesData.map(story => `
        <article class="story-card">
            <div class="story-image-wrapper">
                <img src="${story.image}" alt="${story.title}" class="story-image">
                <div class="story-overlay"></div>
                ${story.trending ? `
                    <span class="badge badge-trending">
                        <i data-lucide="trending-up" class="trending-icon"></i>
                        Trending
                    </span>
                ` : ''}
                <span class="badge badge-category">${story.category}</span>
            </div>
            
            <div class="story-content">
                <h3 class="story-title">${story.title}</h3>
                <p class="story-excerpt">${story.excerpt}</p>
                
                <div class="story-footer">
                    <div class="story-meta">
                        <i data-lucide="clock" class="meta-icon"></i>
                        <span>${story.readTime}</span>
                    </div>
                    <button class="btn-read-more">
                        Read More
                        <i data-lucide="arrow-right" class="btn-icon"></i>
                    </button>
                </div>
            </div>
        </article>
    `).join('');
    
    // Reinitialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }
}

// ============================================
// CATEGORIES DATA & RENDERING
// ============================================
const categoriesData = [
    {
        icon: "newspaper",
        name: "Investigative",
        count: 42,
        color: "color-blue"
    },
    {
        icon: "users",
        name: "Society",
        count: 38,
        color: "color-purple"
    },
    {
        icon: "globe",
        name: "Environment",
        count: 31,
        color: "color-green"
    },
    {
        icon: "lightbulb",
        name: "Technology",
        count: 29,
        color: "color-amber"
    },
    {
        icon: "briefcase",
        name: "Business",
        count: 25,
        color: "color-cyan"
    },
    {
        icon: "heart",
        name: "Culture",
        count: 34,
        color: "color-pink"
    }
];

function renderCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    
    categoriesGrid.innerHTML = categoriesData.map(category => `
        <div class="category-card">
            <div class="category-header">
                <div class="category-icon-wrapper ${category.color}">
                    <i data-lucide="${category.icon}" class="category-icon"></i>
                </div>
                <span class="category-count">${category.count} stories</span>
            </div>
            <h3 class="category-title">${category.name}</h3>
            <p class="category-description">
                Explore our collection of ${category.name.toLowerCase()} stories
            </p>
        </div>
    `).join('');
    
    // Reinitialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }
}

// ============================================
// NEWSLETTER FORM SUBMISSION
// ============================================
const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Show success message (you can customize this)
    alert(`Thank you for subscribing! We'll send updates to ${email}`);
    
    // Reset form
    e.target.reset();
});

// ============================================
// INITIALIZE ON DOM LOAD
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Render dynamic content
    renderStories();
    renderCategories();
    
    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }
});
