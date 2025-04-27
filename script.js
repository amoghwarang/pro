// Sample data for movies, series, and cartoons
const contentData = {
    movies: [
        { 
            title: 'The Shawshank Redemption', 
            rating: 9.5, 
            image: 'iloveimg-compressed/end-game.jpg',
            description: 'Over the course of several years, two convicts form a friendship, seeking redemption through basic compassion and small acts of common decency.',
            year: '1994',
            genre: 'Drama',
            duration: '142 min',
            moods: ['inspiring', 'emotional', 'thoughtful']
        },
        { 
            title: 'The Godfather', 
            rating: 9.4, 
            image: 'iloveimg-compressed/the godfather.png',
            description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
            year: '1972',
            genre: 'Crime, Drama',
            duration: '175 min',
            moods: ['intense', 'dark', 'dramatic']
        },
        { 
            title: 'The Dark Knight', 
            rating: 9.3, 
            image: 'iloveimg-compressed/batman.jpg',
            description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
            year: '2008',
            genre: 'Action, Crime, Drama',
            duration: '152 min',
            moods: ['thrilling', 'intense', 'dark']
        },
        { 
            title: 'Pulp Fiction', 
            rating: 9.2, 
            image: 'iloveimg-compressed/blood-shot.jpg',
            description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
            year: '1994',
            genre: 'Crime, Drama',
            duration: '154 min',
            moods: ['quirky', 'intense', 'dark']
        },
        { 
            title: 'Forrest Gump', 
            rating: 9.1, 
            image: 'iloveimg-compressed/transformer.jpg',
            description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
            year: '1994',
            genre: 'Drama, Romance',
            duration: '142 min',
            moods: ['heartwarming', 'emotional', 'inspiring']
        },
        { 
            title: 'Inception', 
            rating: 9.6, 
            image: 'iloveimg-compressed/insidious.jpg',
            description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            year: '2010',
            genre: 'Action, Adventure, Sci-Fi',
            duration: '148 min',
            moods: ['mind-bending', 'thrilling', 'intense']
        },
        { 
            title: 'The Matrix', 
            rating: 9.3, 
            image: 'iloveimg-compressed/matrix.png',
            description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
            year: '1999',
            genre: 'Action, Sci-Fi',
            duration: '136 min',
            moods: ['mind-bending', 'thrilling', 'futuristic']
        },
        { 
            title: 'Interstellar', 
            rating: 9.5, 
            image: 'iloveimg-compressed/interstellar.png',
            description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
            year: '2014',
            genre: 'Adventure, Drama, Sci-Fi',
            duration: '169 min',
            moods: ['emotional', 'mind-bending', 'inspiring']
        },
        { 
            title: 'Avatar', 
            rating: 9.2, 
            image: 'iloveimg-compressed/avatar.png',
            description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
            year: '2009',
            genre: 'Action, Adventure, Sci-Fi',
            duration: '162 min',
            moods: ['adventurous', 'visually-stunning', 'emotional']
        }
    ],
    series: [
        { 
            title: 'Breaking Bad', 
            rating: 9.3, 
            image: 'iloveimg-compressed/breaking bad.png',
            description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine to secure his family\'s future.',
            year: '2008-2013',
            genre: 'Crime, Drama, Thriller',
            duration: '5 Seasons',
            moods: ['intense', 'dark', 'dramatic']
        },
        { 
            title: 'Game of Thrones', 
            rating: 9.2, 
            image: 'iloveimg-compressed/house of dragons.png',
            description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
            year: '2011-2019',
            genre: 'Action, Adventure, Drama',
            duration: '8 Seasons',
            moods: ['epic', 'dark', 'intense']
        },
        { 
            title: 'The Wire', 
            rating: 9.1, 
            image: 'iloveimg-compressed/the wire.png',
            description: 'The Baltimore drug scene, seen through the eyes of drug dealers and law enforcement.',
            year: '2002-2008',
            genre: 'Crime, Drama, Thriller',
            duration: '5 Seasons',
            moods: ['gritty', 'realistic', 'intense']
        },
        { 
            title: 'Stranger Things', 
            rating: 9.0, 
            image: 'iloveimg-compressed/stranger-thing.jpg',
            description: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.',
            year: '2016-Present',
            genre: 'Drama, Fantasy, Horror',
            duration: '4 Seasons',
            moods: ['mysterious', 'nostalgic', 'thrilling']
        },
        { 
            title: 'The Crown', 
            rating: 8.9, 
            image: 'iloveimg-compressed/the crown.png',
            description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
            year: '2016-2023',
            genre: 'Biography, Drama, History',
            duration: '6 Seasons',
            moods: ['dramatic', 'historical', 'elegant']
        }
    ],
    cartoons: [
        { 
            title: 'Avatar: The Last Airbender', 
            rating: 9.0, 
            image: 'iloveimg-compressed/avatar.png',
            description: 'In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar.',
            year: '2005-2008',
            genre: 'Animation, Action, Adventure',
            duration: '3 Seasons',
            moods: ['adventurous', 'uplifting', 'heartwarming']
        },
        { 
            title: 'Rick and Morty', 
            rating: 8.9, 
            image: 'iloveimg-compressed/rick and morty.png',
            description: 'An alcoholic genius scientist and his grandson go on dangerous adventures across the universe, causing chaos and running from their problems.',
            year: '2013-Present',
            genre: 'Animation, Adventure, Comedy',
            duration: '7 Seasons',
            moods: ['quirky', 'mind-bending', 'humorous']
        },
        { 
            title: 'The Simpsons', 
            rating: 8.8, 
            image: 'iloveimg-compressed/the simpsons.png',
            description: 'The satiric adventures of a working-class family in the misfit city of Springfield, showing the humorous side of American life.',
            year: '1989-Present',
            genre: 'Animation, Comedy',
            duration: '35 Seasons',
            moods: ['humorous', 'satirical', 'light-hearted']
        },
        { 
            title: 'Dragon Ball Z', 
            rating: 8.7, 
            image: 'iloveimg-compressed/dragon ball z.png',
            description: 'After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies.',
            year: '1989-1996',
            genre: 'Animation, Action, Adventure',
            duration: '9 Seasons',
            moods: ['action-packed', 'exciting', 'adventurous']
        },
        { 
            title: 'Demon Slayer', 
            rating: 8.6, 
            image: 'iloveimg-compressed/demon slayer.png',
            description: 'A young boy becomes a demon slayer after his family is slaughtered and his sister is turned into a demon. He goes on a quest to find a cure for his sister and take revenge.',
            year: '2019-Present',
            genre: 'Animation, Action, Fantasy',
            duration: '3 Seasons',
            moods: ['action-packed', 'emotional', 'intense']
        }
    ],
    limitedTime: [
        { 
            title: 'Transformers', 
            rating: 9.8, 
            image: 'iloveimg-compressed/transformers.png', 
            daysLeft: 2,
            description: 'An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.',
            year: '2007',
            genre: 'Action, Adventure, Sci-Fi',
            duration: '144 min',
            moods: ['action-packed', 'thrilling', 'intense']
        },
        { 
            title: 'John Wick Chapter 4', 
            rating: 9.7, 
            image: 'iloveimg-compressed/john wick chapter 4.png', 
            daysLeft: 3,
            description: 'John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe.',
            year: '2023',
            genre: 'Action, Crime, Thriller',
            duration: '169 min',
            moods: ['action-packed', 'thrilling', 'intense']
        },
        { 
            title: 'Avengers: Endgame', 
            rating: 9.6, 
            image: 'iloveimg-compressed/avengers endgame.png', 
            daysLeft: 4,
            description: 'After the devastating events of Infinity War, the universe is in ruins. The Avengers assemble once more to reverse Thanos\' actions and restore balance to the universe.',
            year: '2019',
            genre: 'Action, Adventure, Drama',
            duration: '181 min',
            moods: ['epic', 'emotional', 'action-packed']
        }
    ]
};

// Function to create content cards
function createContentCard(item, type) {
    // Create main card container
    const card = document.createElement('div');
    card.className = 'content-card';
    
    // Create card inner container for flip effect
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    
    // Create card front
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    
    // Create card back
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    
    // Create image element
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    
    // Create title container for front
    const titleContainer = document.createElement('div');
    titleContainer.className = 'title-container';
    
    // Create title for front
    const title = document.createElement('h3');
    title.textContent = item.title;
    
    // Create rating for front
    const rating = document.createElement('div');
    rating.className = 'rating';
    rating.textContent = `⭐ ${item.rating}`;
    
    // Add flip hint
    const flipHint = document.createElement('div');
    flipHint.className = 'flip-hint';
    flipHint.textContent = 'Click for details';
    
    // Add title and rating to title container
    titleContainer.appendChild(title);
    titleContainer.appendChild(rating);
    
    // Add elements to card front
    cardFront.appendChild(img);
    cardFront.appendChild(titleContainer);
    cardFront.appendChild(flipHint);
    
    // Create back side elements
    const backTitle = document.createElement('h3');
    backTitle.textContent = item.title;
    
    const description = document.createElement('p');
    
    // Set default description based on type
    let descriptionText = 'No description available.';
    if (type === 'movie') {
        descriptionText = item.description;
    } else if (type === 'series') {
        descriptionText = item.description;
    } else if (type === 'cartoon') {
        descriptionText = item.description;
    } else if (type === 'limitedTime') {
        descriptionText = item.description;
    }
    
    description.textContent = descriptionText;
    
    // Create meta information
    const meta = document.createElement('div');
    meta.className = 'meta';
    
    const year = document.createElement('span');
    year.textContent = item.year;
    
    const genre = document.createElement('span');
    genre.textContent = item.genre;
    
    const duration = document.createElement('span');
    duration.textContent = item.duration;
    
    meta.appendChild(year);
    meta.appendChild(genre);
    meta.appendChild(duration);
    
    // Check if the movie is already purchased
    let isPurchased = false;
    if (localStorage.getItem('purchasedContent')) {
        try {
            const purchasedContent = JSON.parse(localStorage.getItem('purchasedContent'));
            isPurchased = purchasedContent.includes(item.title);
        } catch (e) {
            console.error('Error checking purchased status:', e);
        }
    }
    
    // Create button (either Buy Now or Watch based on purchase status)
    const trailerBtn = document.createElement('button');
    trailerBtn.className = isPurchased ? 'card-btn watch-card-trailer purchased' : 'card-btn watch-card-trailer';
    trailerBtn.setAttribute('data-trailer', 'https://www.youtube.com/embed/mqqft2x_Aa4'); // Batman trailer
    trailerBtn.setAttribute('data-movie-title', item.title); // Store movie title for reference
    
    const btnIcon = document.createElement('i');
    btnIcon.className = isPurchased ? 'fas fa-play' : 'fas fa-shopping-cart';
    trailerBtn.appendChild(btnIcon);
    
    // Set different text based on purchase status
    if (isPurchased) {
        trailerBtn.appendChild(document.createTextNode(' Watch'));
    } else {
        trailerBtn.appendChild(document.createTextNode(' Buy Now - $9.99'));
    }
    
    // Add elements to card back
    cardBack.appendChild(backTitle);
    cardBack.appendChild(description);
    cardBack.appendChild(meta);
    cardBack.appendChild(trailerBtn);
    
    // Assemble the card
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    
    // Add timer badge for limited time items
    if (type === 'limitedTime') {
        const timer = document.createElement('div');
        timer.className = 'timer';
        timer.textContent = `Available for: ${item.daysLeft} days`;
        cardFront.appendChild(timer);
    }
    
    return card;
}

// Function to populate content sections
function populateContent() {
    // Populate movies
    const moviesSection = document.querySelector('#movies .content-slider');
    if (moviesSection) {
        contentData.movies.forEach(movie => {
            moviesSection.appendChild(createContentCard(movie, 'movie'));
        });
    }
    
    // Populate series
    const seriesSection = document.querySelector('#series .content-slider');
    if (seriesSection) {
        contentData.series.forEach(series => {
            seriesSection.appendChild(createContentCard(series, 'series'));
        });
    }
    
    // Populate cartoons
    const cartoonsSection = document.querySelector('#cartoons .content-slider');
    if (cartoonsSection) {
        contentData.cartoons.forEach(cartoon => {
            cartoonsSection.appendChild(createContentCard(cartoon, 'cartoon'));
        });
    }
    
    // Populate limited time movies
    const limitedTimeSection = document.querySelector('#limited-time .content-slider');
    if (limitedTimeSection) {
        contentData.limitedTime.forEach(movie => {
            limitedTimeSection.appendChild(createContentCard(movie, 'limitedTime'));
        });
    }
    
    // Re-initialize flip cards and trailer functionality
    initFlipCards();
    
    // Re-attach trailer events if the function exists
    if (typeof window.attachTrailerEvents === 'function') {
        window.attachTrailerEvents();
    }
}

// Search functionality
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (!searchInput || !searchBtn) return;
    
    // Function to perform search
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        // If search is empty, show all content
        if (searchTerm === '') {
            showAllContent();
            return;
        }
        
        // If we're not on the index page, redirect to index with search param
        if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
            window.location.href = `index.html?search=${encodeURIComponent(searchTerm)}`;
            return;
        }
        
        // Hide all content sections initially
        const contentSections = document.querySelectorAll('.content-section');
        contentSections.forEach(section => {
            const sectionTitle = section.querySelector('h2');
            if (sectionTitle) sectionTitle.classList.add('has-results');
            section.classList.add('filtered');
        });
        
        // Get all content cards
        const allCards = document.querySelectorAll('.content-card');
        let hasResults = false;
        
        // Filter cards based on search term
        allCards.forEach(card => {
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.card-back p')?.textContent.toLowerCase() || '';
            const meta = card.querySelector('.meta')?.textContent.toLowerCase() || '';
            
            // Check if card matches search term
            if (title.includes(searchTerm) || description.includes(searchTerm) || meta.includes(searchTerm)) {
                card.style.display = 'block';
                hasResults = true;
                
                // Make sure parent section is visible
                const parentSection = card.closest('.content-section');
                if (parentSection) {
                    parentSection.classList.remove('no-results');
                    parentSection.classList.add('has-results');
                }
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show no results message if needed
        contentSections.forEach(section => {
            const visibleCards = section.querySelectorAll('.content-card[style="display: block;"]').length;
            if (visibleCards === 0) {
                section.classList.add('no-results');
                section.classList.remove('has-results');
            }
        });
        
        // Show message when no results across all sections
        const noResultsMessage = document.getElementById('no-results-message') || createNoResultsMessage();
        if (!hasResults) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    }
    
    // Function to show all content
    function showAllContent() {
        // Show all sections
        const contentSections = document.querySelectorAll('.content-section');
        contentSections.forEach(section => {
            section.classList.remove('filtered', 'no-results', 'has-results');
        });
        
        // Show all cards
        const allCards = document.querySelectorAll('.content-card');
        allCards.forEach(card => {
            card.style.display = '';
        });
        
        // Hide no results message
        const noResultsMessage = document.getElementById('no-results-message');
        if (noResultsMessage) {
            noResultsMessage.style.display = 'none';
        }
        
        // Clear URL parameter
        const url = new URL(window.location);
        url.searchParams.delete('search');
        window.history.replaceState({}, '', url);
    }
    
    // Function to create no results message if it doesn't exist
    function createNoResultsMessage() {
        const msg = document.createElement("div");
        msg.id = "noResultsMsg";
        msg.className = "no-results-message";
        msg.style.textAlign = "center";
        msg.style.padding = "20px";
        msg.style.margin = "20px auto";
        msg.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        msg.style.color = "#ffffff";
        msg.style.borderRadius = "8px";
        msg.style.maxWidth = "800px";
        msg.style.fontSize = "1.2rem";
        
        // Find the mood selector container, or fall back to the main content area
        const container = document.querySelector(".mood-selector-container") || 
                         document.querySelector("main") || 
                         document.body;
        container.appendChild(msg);
        return msg;
    }
    
    // Add event listeners
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        } else if (searchInput.value.trim() === '') {
            showAllContent();
        }
    });
    
    // Clear search when X is clicked in the input
    searchInput.addEventListener('search', function() {
        if (this.value === '') {
            showAllContent();
        }
    });
    
    // Check for search parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    
    if (searchParam) {
        searchInput.value = searchParam;
        // Delay search execution to ensure content is loaded
        setTimeout(performSearch, 500);
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#141414';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)';
    }
});

// Initialize content when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // First initialize trailer modal
    initTrailerModal();
    
    // Then populate content which creates all the dynamic cards
    populateContent();
    
    // Initialize sliders after content is populated
    initSliders();
    
    // Initialize hero slider
    initHeroSlider();
    
    // Add search bar to navbar if not present
    addSearchBarToNavbar();
    
    // Initialize search functionality
    initSearch();
    
    // Initialize button handlers
    initButtonHandlers();
    
    // Initialize mood selector
    createMoodSelector();
    setupMoodFiltering();
    
    // Initialize payment modal
    initPaymentModal();
    
    // Update all buttons based on purchased status
    updateAllButtons();
});

// Function to add search bar to navbar on all pages
function addSearchBarToNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    // Check if search bar already exists
    if (document.querySelector('.search-container')) return;
    
    // Create search container
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    
    // Create search input
    const searchInput = document.createElement('input');
    searchInput.type = 'search';
    searchInput.className = 'search-input';
    searchInput.placeholder = 'Search movies, series...';
    
    // Create search button
    const searchBtn = document.createElement('button');
    searchBtn.className = 'search-btn';
    searchBtn.innerHTML = '<i class="fas fa-search"></i>';
    
    // Add elements to container
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchBtn);
    
    // Find the nav-buttons container
    const navButtons = navbar.querySelector('.nav-buttons');
    
    // If nav-buttons exists, insert search container as the first element
    if (navButtons) {
        // Get login and signup buttons
        const loginBtn = navButtons.querySelector('.login-btn');
        const signupBtn = navButtons.querySelector('.signup-btn');
        
        // Clear nav-buttons
        navButtons.innerHTML = '';
        
        // Add search container first
        navButtons.appendChild(searchContainer);
        
        // Re-add the buttons
        if (loginBtn) navButtons.appendChild(loginBtn);
        if (signupBtn) navButtons.appendChild(signupBtn);
    } else {
        // If nav-buttons doesn't exist, create it and append to navbar
        const newNavButtons = document.createElement('div');
        newNavButtons.className = 'nav-buttons';
        newNavButtons.appendChild(searchContainer);
        navbar.appendChild(newNavButtons);
    }
}

// Hero slider functionality
function initHeroSlider() {
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-dot');
    const prevArrow = document.querySelector('.hero-arrow-left');
    const nextArrow = document.querySelector('.hero-arrow-right');
    let currentSlide = 0;
    let heroInterval;
    
    // Function to go to a specific slide
    function goToSlide(slideIndex) {
        if (slideIndex < 0) {
            slideIndex = heroSlides.length - 1;
        } else if (slideIndex >= heroSlides.length) {
            slideIndex = 0;
        }
        
        heroSlider.style.transform = `translateX(-${slideIndex * 100}%)`;
        currentSlide = slideIndex;
        
        // Update active dot
        heroDots.forEach(dot => dot.classList.remove('active'));
        heroDots[currentSlide].classList.add('active');
    }
    
    // Set up click events for arrows
    prevArrow.addEventListener('click', () => {
        resetAutoScroll();
        goToSlide(currentSlide - 1);
    });
    
    nextArrow.addEventListener('click', () => {
        resetAutoScroll();
        goToSlide(currentSlide + 1);
    });
    
    // Set up click events for dots
    heroDots.forEach(dot => {
        dot.addEventListener('click', () => {
            resetAutoScroll();
            const slideIndex = parseInt(dot.getAttribute('data-index'));
            goToSlide(slideIndex);
        });
    });
    
    // Auto rotation for hero section
    function startAutoScroll() {
        heroInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 6000);
    }
    
    function resetAutoScroll() {
        clearInterval(heroInterval);
        startAutoScroll();
    }
    
    // Start the auto-scroll
    startAutoScroll();
    
    // Pause auto-scroll on hover
    heroSlider.addEventListener('mouseenter', () => {
        clearInterval(heroInterval);
    });
    
    // Resume auto-scroll when mouse leaves
    heroSlider.addEventListener('mouseleave', () => {
        startAutoScroll();
    });
}

// Slider functionality
function initSliders() {
    const sliders = document.querySelectorAll('.content-slider');
    
    // Add click event listeners to all arrows
    document.querySelectorAll('.slider-arrow').forEach(arrow => {
        arrow.addEventListener('click', function() {
            const slider = this.closest('.slider-container').querySelector('.content-slider');
            const cardWidth = slider.querySelector('.content-card').offsetWidth + 16; // Card width + gap
            const scrollAmount = cardWidth * 3; // Scroll 3 cards at a time
            
            if (this.classList.contains('arrow-left')) {
                slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });
    });
    
    // Auto-scroll functionality
    sliders.forEach((slider, index) => {
        // Create different interval for each slider to avoid synchronized scrolling
        const delay = 5000 + (index * 1000); 
        
        // Store the interval ID so we can clear it on hover
        slider.autoScrollInterval = setInterval(() => {
            const cardWidth = slider.querySelector('.content-card').offsetWidth + 16;
            const scrollAmount = cardWidth;
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            
            // If we're at the end, go back to the beginning
            if (slider.scrollLeft >= maxScroll - 10) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, delay);
        
        // Pause auto-scroll on hover
        slider.addEventListener('mouseenter', () => {
            clearInterval(slider.autoScrollInterval);
        });
        
        // Resume auto-scroll when mouse leaves
        slider.addEventListener('mouseleave', () => {
            slider.autoScrollInterval = setInterval(() => {
                const cardWidth = slider.querySelector('.content-card').offsetWidth + 16;
                const scrollAmount = cardWidth;
                const maxScroll = slider.scrollWidth - slider.clientWidth;
                
                if (slider.scrollLeft >= maxScroll - 10) {
                    slider.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }, delay);
        });
    });
}

// Flip card functionality
function initFlipCards() {
    // First ensure all cards are properly initialized with click event
    document.querySelectorAll('.content-card').forEach(card => {
        // Check if card has the .card-inner structure
        if (!card.querySelector('.card-inner')) {
            return; // Skip cards without the proper structure
        }
        
        // Add click handler for flipping
        card.addEventListener('click', function(e) {
            // Don't flip if clicking on the trailer button or inside a button
            if (e.target.classList.contains('watch-card-trailer') || 
                e.target.closest('.card-btn')) {
                return;
            }
            
            this.classList.toggle('flipped');
            
            // Add active effect
            if (this.classList.contains('flipped')) {
                // Bring the flipped card to the front
                this.style.zIndex = "10";
                
                // Add subtle glow effect
                this.style.boxShadow = "0 0 20px rgba(229,9,20,0.6)";
            } else {
                // Reset after animation completes
                setTimeout(() => {
                    this.style.zIndex = "";
                    this.style.boxShadow = "";
                    
                    // Reset scroll position of card back content
                    const cardBack = this.querySelector('.card-back');
                    if (cardBack) {
                        cardBack.scrollTop = 0;
                    }
                }, 300);
            }
        });
        
        // Additional hover effect for flip hint
        const flipHint = card.querySelector('.flip-hint');
        if (flipHint) {
            card.addEventListener('mouseenter', () => {
                flipHint.style.opacity = '1';
            });
            
            card.addEventListener('mouseleave', () => {
                flipHint.style.opacity = '0';
            });
        }
    });
}

// Trailer modal functionality
function initTrailerModal() {
    // First check if the modal exists or create it
    let modal = document.getElementById('trailer-modal');
    let iframe, closeBtn;
    
    // If modal doesn't exist, create it
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'trailer-modal';
        modal.className = 'trailer-modal';
        
        const trailerContent = document.createElement('div');
        trailerContent.className = 'trailer-content';
        
        iframe = document.createElement('iframe');
        iframe.id = 'trailer-iframe';
        iframe.setAttribute('allowfullscreen', '');
        
        closeBtn = document.createElement('span');
        closeBtn.className = 'close-trailer';
        closeBtn.innerHTML = '&times;';
        
        trailerContent.appendChild(iframe);
        trailerContent.appendChild(closeBtn);
        modal.appendChild(trailerContent);
        document.body.appendChild(modal);
    } else {
        iframe = document.getElementById('trailer-iframe');
        closeBtn = document.querySelector('.close-trailer');
    }
    
    // Open modal from hero watch button
    document.querySelectorAll('.watch-trailer').forEach(button => {
        button.addEventListener('click', function() {
            const trailerUrl = this.getAttribute('data-trailer');
            openTrailerModal(trailerUrl);
        });
    });
    
    // Re-attach all trailer button event listeners to ensure they work
    // This needs to be done after new cards are created
    function attachTrailerEvents() {
        document.querySelectorAll('.watch-card-trailer').forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent card from flipping
                const trailerUrl = this.getAttribute('data-trailer');
                openTrailerModal(trailerUrl);
            });
        });
    }
    
    // Initial attachment
    attachTrailerEvents();
    
    // Expose the attach function to be called after new cards are added
    window.attachTrailerEvents = attachTrailerEvents;
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', closeTrailerModal);
    
    // Close modal when clicking outside content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeTrailerModal();
        }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeTrailerModal();
        }
    });
    
    // Helper functions for modal
    function openTrailerModal(url) {
        // Make sure URL is properly formatted for embedding
        if (url.includes('youtube.com') && !url.includes('youtube.com/embed/')) {
            // Convert regular YouTube URL to embed URL
            const videoId = url.split('v=')[1]?.split('&')[0];
            if (videoId) {
                url = `https://www.youtube.com/embed/${videoId}`;
            }
        }
        
        // Ensure the URL uses https protocol
        url = url.replace('http://', 'https://');
        
        // Explicitly set parameters to avoid connection issues
        if (url.includes('youtube.com/embed/')) {
            if (!url.includes('?')) {
                url += '?';
            } else {
                url += '&';
            }
            url += 'autoplay=1&origin=' + encodeURIComponent(window.location.origin);
        }
        
        // Open the modal and set the iframe source
        iframe.src = url;
        modal.style.display = 'flex';
        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';
        
        // Add animation
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 50);
        
        // Add fallback if iframe fails to load
        iframe.onerror = function() {
            iframe.src = 'about:blank';
            const errorMsg = document.createElement('div');
            errorMsg.className = 'trailer-error';
            errorMsg.innerHTML = '<p>Sorry, the trailer could not be loaded. Please try again later.</p>';
            trailerContent.appendChild(errorMsg);
        };
    }
    
    function closeTrailerModal() {
        // Fade out animation
        modal.style.opacity = '0';
        setTimeout(() => {
            iframe.src = '';
            modal.style.display = 'none';
            // Re-enable body scrolling
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Initialize button event handlers
function initButtonHandlers() {
    // Add click handlers for pricing buttons
    const pricingButtons = document.querySelectorAll('.pricing-btn');
    pricingButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your interest! This is a demo website.');
        });
    });
    
    // Add click handlers for login/signup buttons
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }
    
    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            window.location.href = 'signup.html';
        });
    }
}

// Create a map of all available moods
function getAllMoods() {
    const moodSet = new Set();
    
    // Collect all moods from all content types
    ['movies', 'series', 'cartoons', 'limitedTime'].forEach(contentType => {
        contentData[contentType].forEach(item => {
            if (item.moods && Array.isArray(item.moods)) {
                item.moods.forEach(mood => moodSet.add(mood));
            }
        });
    });
    
    // Convert Set to sorted Array
    return Array.from(moodSet).sort();
}

// Add Mood Selector functionality
const moods = [
    { name: "happy", icon: "😊", label: "Happy" },
    { name: "funny", icon: "😂", label: "Funny" },
    { name: "thrilling", icon: "😱", label: "Thrilling" },
    { name: "dark", icon: "🖤", label: "Dark" },
    { name: "emotional", icon: "😢", label: "Emotional" },
    { name: "mind-bending", icon: "🤯", label: "Mind-bending" },
    { name: "inspiring", icon: "✨", label: "Inspiring" },
    { name: "relaxing", icon: "😌", label: "Relaxing" },
    { name: "adventurous", icon: "🚀", label: "Adventurous" },
    { name: "intense", icon: "🔥", label: "Intense" }
];

// Create the mood selector interface
function createMoodSelector() {
    const moodSelector = document.getElementById("moodSelector");
    if (!moodSelector) return;
    
    const resetBtn = document.getElementById("resetMoodBtn");
    
    moods.forEach(mood => {
        const moodBtn = document.createElement("button");
        moodBtn.className = "mood-btn";
        moodBtn.dataset.mood = mood.name;
        moodBtn.innerHTML = `${mood.icon} <span>${mood.label}</span>`;
        moodSelector.appendChild(moodBtn);
    });
}

// Setup mood filtering functionality
function setupMoodFiltering() {
    const moodBtns = document.querySelectorAll(".mood-btn");
    const resetBtn = document.getElementById("resetMoodBtn");
    if (!moodBtns.length || !resetBtn) return;
    
    let selectedMood = null;
    
    moodBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const mood = this.dataset.mood;
            console.log(`Mood selected: ${mood}`); // Debug log
            
            // Reset previously selected button - make them all gray
            moodBtns.forEach(b => b.classList.remove("selected"));
            
            if (selectedMood === mood) {
                // If clicking the same mood, deselect it
                selectedMood = null;
                resetBtn.style.display = "none";
                showAllContent();
            } else {
                // Select new mood - make it red
                selectedMood = mood;
                this.classList.add("selected");
                resetBtn.style.display = "block";
                filterContentByMood(mood);
            }
        });
    });
    
    // Reset button functionality
    resetBtn.addEventListener("click", function() {
        selectedMood = null;
        moodBtns.forEach(b => b.classList.remove("selected"));
        this.style.display = "none";
        showAllContent();
    });
}

// Filter content by selected mood
function filterContentByMood(mood) {
    console.log(`Filtering by mood: ${mood}`); // Debug log
    
    const allContentCards = document.querySelectorAll(".content-card");
    
    // Create a flat array of all content with the selected mood
    const matchingContent = [
        ...contentData.movies.filter(movie => movie.moods && movie.moods.includes(mood)),
        ...contentData.series.filter(series => series.moods && series.moods.includes(mood)),
        ...contentData.cartoons.filter(cartoon => cartoon.moods && cartoon.moods.includes(mood)),
        ...contentData.limitedTime.filter(item => item.moods && item.moods.includes(mood))
    ];
    
    console.log(`Found ${matchingContent.length} matching items`); // Debug log
    
    // Get the titles of matching content
    const matchingTitles = matchingContent.map(item => item.title);
    console.log(`Matching titles: ${matchingTitles.join(', ')}`); // Debug log
    
    // Show/hide content cards based on mood
    allContentCards.forEach(card => {
        // Get the title from the h3 element in both card-front and card-back
        const cardFrontTitle = card.querySelector(".card-front h3");
        if (!cardFrontTitle) return;
        
        const cardTitle = cardFrontTitle.textContent.trim();
        console.log(`Checking card: ${cardTitle}`); // Debug log
        
        if (matchingTitles.includes(cardTitle)) {
            console.log(`Match found for: ${cardTitle}`); // Debug log
            card.style.display = "block";
            // Add a subtle highlight to matching cards
            card.classList.add("mood-match");
        } else {
            card.style.display = "none";
            card.classList.remove("mood-match");
        }
    });
    
    // Show or hide section headers based on whether they have visible children
    document.querySelectorAll(".content-section").forEach(section => {
        const visibleCards = section.querySelectorAll(".content-card[style='display: block;']");
        const header = section.querySelector("h2");
        
        if (visibleCards.length === 0) {
            section.style.display = "none";
        } else {
            section.style.display = "block";
            
            // Update header to show how many matches in this category
            if (header) {
                const originalText = header.getAttribute("data-original-text") || header.textContent;
                header.setAttribute("data-original-text", originalText);
                header.textContent = `${originalText} (${visibleCards.length} match${visibleCards.length > 1 ? 'es' : ''})`;
            }
        }
    });
    
    // Show message if no content matches the selected mood
    const noResultsMsg = document.getElementById("noResultsMsg") || createNoResultsMessage();
    if (matchingContent.length === 0) {
        noResultsMsg.textContent = `No content matches the "${mood}" mood. Try a different mood!`;
        noResultsMsg.style.display = "block";
    } else {
        noResultsMsg.style.display = "none";
    }
}

// Show all content (reset filters)
function showAllContent() {
    // Show all content cards
    document.querySelectorAll(".content-card").forEach(card => {
        card.style.display = "block";
        card.classList.remove("mood-match");
    });
    
    // Show all sections
    document.querySelectorAll(".content-section").forEach(section => {
        section.style.display = "block";
        
        // Reset section headers to original text
        const header = section.querySelector("h2");
        if (header && header.getAttribute("data-original-text")) {
            header.textContent = header.getAttribute("data-original-text");
        }
    });
    
    // Hide no results message
    const noResultsMsg = document.getElementById("no-results-message");
    if (noResultsMsg) {
        noResultsMsg.style.display = "none";
    }
}

// These functions were called but not defined, so let's implement them
function displayMovies() {
    // This function is now handled by populateContent()
    // Leave empty, but defined to prevent errors
}

function displaySeries() {
    // This function is now handled by populateContent()
    // Leave empty, but defined to prevent errors
}

function displayCartoons() {
    // This function is now handled by populateContent()
    // Leave empty, but defined to prevent errors
}

function displayLimitedTime() {
    // This function is now handled by populateContent()
    // Leave empty, but defined to prevent errors
}

function setupSearchFunctionality() {
    // This function is now handled by initSearch()
    // Leave empty, but defined to prevent errors
}

// Function to update all Buy Now/Watch buttons based on purchased status
function updateAllButtons() {
    // Get purchased content from localStorage
    let purchasedContent = [];
    try {
        if (localStorage.getItem('purchasedContent')) {
            purchasedContent = JSON.parse(localStorage.getItem('purchasedContent'));
            console.log("Updating all buttons based on purchased content:", purchasedContent);
        }
    } catch (e) {
        console.error("Error loading purchased content for button updates:", e);
        localStorage.removeItem('purchasedContent'); // Reset corrupted data
        purchasedContent = [];
    }
    
    // Reset all buttons first to ensure proper state
    console.log("Resetting all buttons to Buy Now state");
    
    // Reset card buttons to Buy Now
    document.querySelectorAll('.card-btn.watch-card-trailer').forEach(button => {
        button.innerHTML = '<i class="fas fa-shopping-cart"></i> Buy Now - $9.99';
        button.classList.remove('purchased');
    });
    
    // Reset hero buttons to Buy Now
    document.querySelectorAll('.cta-btn.primary').forEach(button => {
        button.innerHTML = '<i class="fas fa-shopping-cart"></i> Buy Now - $9.99';
        button.classList.remove('purchased');
    });
    
    // If no purchased content, we're done
    if (!purchasedContent || !purchasedContent.length) {
        console.log("No purchased content found, all buttons reset to Buy Now");
        return;
    }
    
    // Now update buttons for purchased content
    // Update card buttons
    document.querySelectorAll('.card-btn.watch-card-trailer').forEach(button => {
        const card = button.closest('.card-inner');
        if (!card) return;
        
        const title = card.querySelector('h3')?.textContent;
        if (!title) return;
        
        if (purchasedContent.includes(title)) {
            // This is purchased content
            button.innerHTML = '<i class="fas fa-play"></i> Watch';
            button.classList.add('purchased');
            console.log("Updated card button for purchased content:", title);
        }
    });
    
    // Update hero section buttons
    document.querySelectorAll('.cta-btn.primary').forEach(button => {
        const heroContent = button.closest('.hero-content');
        if (!heroContent) return;
        
        const title = heroContent.querySelector('h1')?.textContent;
        if (!title) return;
        
        if (purchasedContent.includes(title)) {
            // This is purchased content
            button.innerHTML = '<i class="fas fa-play"></i> Watch';
            button.classList.add('purchased');
            console.log("Updated hero button for purchased content:", title);
        }
    });
}

// Function to clear all purchased content (for debugging purposes)
function clearPurchasedContent() {
    localStorage.removeItem('purchasedContent');
    console.log("Cleared all purchased content");
    updateAllButtons();
}

// Initialize Payment Modal
function initPaymentModal() {
    // Create a set to track purchased content
    let purchasedContent = new Set();
    
    // Try to load previously purchased content from localStorage
    if (localStorage.getItem('purchasedContent')) {
        try {
            const saved = JSON.parse(localStorage.getItem('purchasedContent'));
            if (Array.isArray(saved)) {
                // Convert the array to a Set
                purchasedContent = new Set(saved);
                console.log("Loaded purchased content:", saved);
            }
        } catch (e) {
            console.error('Error loading purchased content:', e);
            // Reset localStorage if corrupted
            localStorage.removeItem('purchasedContent');
        }
    }
    
    const paymentModal = document.getElementById('paymentModal');
    const closePaymentBtn = document.getElementById('closePaymentBtn');
    const paymentForm = document.getElementById('paymentForm');
    const movieThumbnail = document.getElementById('movieThumbnail');
    const movieTitle = document.getElementById('movieTitle');
    const moviePrice = document.getElementById('moviePrice');
    
    // Get all buy now buttons
    const buyNowButtons = document.querySelectorAll('.cta-btn.primary, .card-btn.watch-card-trailer');
    
    // Function to play trailer for a specific title
    function playTrailerForPurchased(title) {
        console.log("Playing trailer for purchased title:", title);
        // Default trailer URL if we can't find a specific one
        let trailerUrl = "moodie.mp4"; // Default to local video file
        
        // Try to find the correct trailer URL by searching through content
        ['movies', 'series', 'cartoons', 'limitedTime'].forEach(contentType => {
            contentData[contentType].forEach(item => {
                if (item.title === title && item.trailerUrl) {
                    trailerUrl = item.trailerUrl;
                }
            });
        });
        
        // Open the trailer modal with the URL
        openTrailerModal(trailerUrl);
    }
    
    // Function to update the UI of all buttons for a specific movie
    function updateButtonsForPurchasedMovie(title) {
        // Update card buttons
        document.querySelectorAll('.card-btn.watch-card-trailer').forEach(button => {
            const card = button.closest('.card-inner');
            if (!card) return;
            
            const cardTitle = card.querySelector('h3')?.textContent;
            if (cardTitle === title) {
                button.innerHTML = '<i class="fas fa-play"></i> Watch';
                button.classList.add('purchased');
                console.log("Updated card button for purchased movie:", title);
            }
        });
        
        // Update hero section buttons
        document.querySelectorAll('.cta-btn.primary').forEach(button => {
            const heroContent = button.closest('.hero-content');
            if (!heroContent) return;
            
            const heroTitle = heroContent.querySelector('h1')?.textContent;
            if (heroTitle === title) {
                button.innerHTML = '<i class="fas fa-play"></i> Watch';
                button.classList.add('purchased');
                console.log("Updated hero button for purchased movie:", title);
            }
        });
    }
    
    // Add event listeners to all buy now buttons
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Extract movie data
            let title, price, image;
            
            // Different ways to get data depending on button location
            if (button.classList.contains('cta-btn')) {
                // Hero section buttons
                const heroContent = button.closest('.hero-content');
                title = heroContent.querySelector('h1').textContent;
                // Check if it has price info or is already a "Watch" button
                if (button.classList.contains('purchased')) {
                    price = '0.00'; // Already purchased
                } else {
                    const priceMatch = button.textContent.match(/\$([0-9.]+)/);
                    price = priceMatch ? priceMatch[1] : '9.99';
                }
                
                // Get image from background
                const heroBackground = button.closest('.hero-slide').querySelector('.hero-background');
                image = heroBackground.style.backgroundImage.replace('url(\'', '').replace('\')', '');
            } else {
                // Card buttons
                const card = button.closest('.card-inner');
                title = card.querySelector('h3').textContent;
                
                // Check if it has price info or is already a "Watch" button
                if (button.classList.contains('purchased')) {
                    price = '0.00'; // Already purchased
                } else {
                    const priceMatch = button.textContent.match(/\$([0-9.]+)/);
                    price = priceMatch ? priceMatch[1] : '9.99';
                }
                
                // Try to get image from the front of the card
                const cardFront = card.querySelector('.card-front');
                if (cardFront) {
                    const img = cardFront.querySelector('img');
                    if (img) {
                        image = img.src;
                    }
                }
            }
            
            console.log("Clicked on:", title, "- Is purchased:", purchasedContent.has(title), "- Button class:", button.className);
            
            // Only use the button class to determine if content is purchased
            // This ensures the visual state matches the behavior
            if (button.classList.contains('purchased')) {
                // Content already purchased, play the trailer instead
                playTrailerForPurchased(title);
                return;
            }
            
            // Not purchased, show payment modal
            console.log("Showing payment modal for:", title);
            
            // Fill the modal with movie data
            movieTitle.textContent = title;
            moviePrice.textContent = price;
            if (image) {
                movieThumbnail.src = image;
            }
            
            // Open the modal
            openPaymentModal();
        });
    });
    
    // Close modal when clicking the close button
    closePaymentBtn.addEventListener('click', closePaymentModal);
    
    // Close modal when clicking outside the content
    paymentModal.addEventListener('click', function(e) {
        if (e.target === paymentModal) {
            closePaymentModal();
        }
    });
    
    // Handle form submission
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state on button
        const submitBtn = this.querySelector('.submit-payment-btn');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';
        
        // Get the movie title
        const title = movieTitle.textContent;
        
        // Simulate payment processing
        setTimeout(() => {
            // Add the movie to purchased content
            purchasedContent.add(title);
            
            // Save purchased content to localStorage
            const purchasedArray = Array.from(purchasedContent);
            localStorage.setItem('purchasedContent', JSON.stringify(purchasedArray));
            console.log("Saved purchased content:", purchasedArray);
            
            // Update all buttons for this movie
            updateButtonsForPurchasedMovie(title);
            
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.className = 'payment-success';
            successMessage.innerHTML = `
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Payment Successful!</h3>
                <p>Your purchase of "${title}" is complete.</p>
                <p>You can now enjoy your content!</p>
                <button class="success-btn">Done</button>
                <button class="watch-now-btn">Watch Now</button>
            `;
            
            // Replace form with success message
            const paymentBody = document.querySelector('.payment-body');
            paymentBody.innerHTML = '';
            paymentBody.appendChild(successMessage);
            
            // Add event listener to done button
            const doneBtn = successMessage.querySelector('.success-btn');
            doneBtn.addEventListener('click', () => {
                closePaymentModal();
                
                // Reset the payment modal after it's closed
                setTimeout(() => {
                    // Re-initialize the form
                    initializePaymentForm(paymentBody);
                }, 300);
            });
            
            // Add event listener to watch now button
            const watchNowBtn = successMessage.querySelector('.watch-now-btn');
            watchNowBtn.addEventListener('click', () => {
                closePaymentModal();
                
                // Play the trailer for this movie
                playTrailerForPurchased(title);
                
                // Reset the payment modal after it's closed
                setTimeout(() => {
                    // Re-initialize the form
                    initializePaymentForm(paymentBody);
                }, 300);
            });
        }, 1500);
    });
    
    // Helper function to re-initialize the payment form
    function initializePaymentForm(paymentBody) {
        paymentBody.innerHTML = '';
        
        // Create movie details container
        const movieDetails = document.createElement('div');
        movieDetails.className = 'movie-details';
        
        // Create thumbnail image
        const thumbnail = document.createElement('img');
        thumbnail.id = 'movieThumbnail';
        thumbnail.className = 'movie-thumbnail';
        thumbnail.alt = 'Movie Thumbnail';
        
        // Create movie info container
        const movieInfo = document.createElement('div');
        movieInfo.className = 'movie-info';
        
        // Create title
        const title = document.createElement('h3');
        title.id = 'movieTitle';
        
        // Create price
        const price = document.createElement('div');
        price.className = 'movie-price';
        price.textContent = 'Price: $';
        
        // Create price span
        const priceValue = document.createElement('span');
        priceValue.id = 'moviePrice';
        price.appendChild(priceValue);
        
        // Assemble movie info
        movieInfo.appendChild(title);
        movieInfo.appendChild(price);
        
        // Assemble movie details
        movieDetails.appendChild(thumbnail);
        movieDetails.appendChild(movieInfo);
        
        // Create payment form
        const form = document.createElement('form');
        form.id = 'paymentForm';
        form.className = 'payment-form';
        
        // Add form HTML
        form.innerHTML = `
            <div class="form-group">
                <label for="cardName">Name on Card</label>
                <input type="text" id="cardName" placeholder="John Doe" required>
            </div>
            <div class="form-group">
                <label for="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19" required>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="expiryDate">Expiry Date</label>
                    <input type="text" id="expiryDate" placeholder="MM/YY" maxlength="5" required>
                </div>
                <div class="form-group">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" placeholder="123" maxlength="3" required>
                </div>
            </div>
            <button type="submit" class="submit-payment-btn">Complete Payment</button>
            <div class="secure-badge">
                <i class="fas fa-lock"></i> Secure Payment
            </div>
        `;
        
        // Add elements to payment body
        paymentBody.appendChild(movieDetails);
        paymentBody.appendChild(form);
        
        // Reinitialize the payment modal inputs
        const cardNumberInput = document.getElementById('cardNumber');
        if (cardNumberInput) {
            cardNumberInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\s+/g, '');
                if (value.length > 0) {
                    value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
                }
                e.target.value = value;
            });
        }
        
        const expiryInput = document.getElementById('expiryDate');
        if (expiryInput) {
            expiryInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2, 4);
                }
                e.target.value = value;
            });
        }
        
        const cvvInput = document.getElementById('cvv');
        if (cvvInput) {
            cvvInput.addEventListener('input', function(e) {
                e.target.value = e.target.value.replace(/\D/g, '');
            });
        }
    }
    
    // Format credit card number with spaces
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s+/g, '');
            if (value.length > 0) {
                value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
            }
            e.target.value = value;
        });
    }
    
    // Format expiry date with slash
    const expiryInput = document.getElementById('expiryDate');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
    
    // Restrict CVV to numbers only
    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }
}

// Function to open the payment modal
function openPaymentModal() {
    const paymentModal = document.getElementById('paymentModal');
    if (paymentModal) {
        paymentModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

// Function to close the payment modal
function closePaymentModal() {
    const paymentModal = document.getElementById('paymentModal');
    if (paymentModal) {
        paymentModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        
        // Reset form
        const paymentForm = document.getElementById('paymentForm');
        if (paymentForm) {
            paymentForm.reset();
        }
    }
} 