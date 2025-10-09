// Sample blog data
const sampleBlogs = [
    {
        id: 1,
        title: "The Future of Artificial Intelligence",
        description: "Exploring how AI is transforming industries and what to expect in the coming years.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "technology",
        author: "Jane Smith",
        date: "2023-10-15",
        content: "Full content about AI future...",
        featured: true
    },
    {
        id: 2,
        title: "10 Tips for Healthy Living",
        description: "Simple changes you can make to improve your health and wellbeing.",
        image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "lifestyle",
        author: "John Doe",
        date: "2023-10-12",
        content: "Full content about healthy living...",
        featured: true
    },
    {
        id: 3,
        title: "Exploring the Hidden Gems of Italy",
        description: "Discover the less traveled paths and authentic experiences in beautiful Italy.",
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "travel",
        author: "Maria Garcia",
        date: "2023-10-08",
        content: "Full content about Italy travel...",
        featured: false
    },
    {
        id: 4,
        title: "The Art of French Cooking",
        description: "Learn the secrets behind classic French dishes and techniques.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "food",
        author: "Pierre Leclerc",
        date: "2023-10-05",
        content: "Full content about French cooking...",
        featured: true
    },
    {
        id: 5,
        title: "Minimalism: Living with Less",
        description: "How adopting a minimalist lifestyle can bring more joy and purpose.",
        image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "lifestyle",
        author: "Sarah Johnson",
        date: "2023-10-01",
        content: "Full content about minimalism...",
        featured: false
    },
    {
        id: 6,
        title: "Blockchain Technology Explained",
        description: "Understanding the fundamentals of blockchain and its potential applications.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "technology",
        author: "Alex Chen",
        date: "2023-09-28",
        content: "Full content about blockchain...",
        featured: false
    }
];

// User management
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let users = JSON.parse(localStorage.getItem('users')) || [];
let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || sampleBlogs;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in and redirect if needed
    checkAuthentication();
    
    // Load appropriate content based on page
    const path = window.location.pathname;
    const page = path.split("/").pop();
    
    switch(page) {
        case 'index.html':
        case '':
            loadFeaturedBlogs();
            break;
        case 'blog.html':
            loadAllBlogs();
            setupFilters();
            break;
        case 'login.html':
            setupLoginForm();
            break;
        case 'register.html':
            setupRegistrationForm();
            break;
        case 'writer.html':
            if (!currentUser || currentUser.type !== 'writer') {
                window.location.href = 'login.html';
                return;
            }
            setupWriterDashboard();
            break;
        case 'reader.html':
            if (!currentUser || currentUser.type !== 'reader') {
                window.location.href = 'login.html';
                return;
            }
            setupReaderDashboard();
            break;
    }
    
    // Setup logout functionality
    setupLogout();
});

// Check authentication status
function checkAuthentication() {
    const protectedPages = ['writer.html', 'reader.html'];
    const currentPage = window.location.pathname.split("/").pop();
    
    if (protectedPages.includes(currentPage) && !currentUser) {
        window.location.href = 'login.html';
    }
    
    // Update navigation based on authentication
    updateNavigation();
}

// Update navigation based on user authentication
function updateNavigation() {
    const authButtons = document.querySelector('.auth-buttons');
    if (!authButtons) return;
    
    if (currentUser) {
        authButtons.innerHTML = `
            <span class="user-welcome">Welcome, ${currentUser.name}!</span>
            <a href="#" class="btn btn-outline" id="logoutBtn">Logout</a>
        `;
    } else {
        authButtons.innerHTML = `
            <a href="login.html" class="btn btn-outline">Login</a>
            <a href="register.html" class="btn btn-primary">Register</a>
        `;
    }
    
    // Re-attach logout event listener
    setupLogout();
}

// Setup logout functionality
function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            currentUser = null;
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });
    }
}

// Load featured blogs on home page
function loadFeaturedBlogs() {
    const featuredContainer = document.getElementById('featuredBlogs');
    if (!featuredContainer) return;
    
    const featuredBlogs = blogPosts.filter(blog => blog.featured).slice(0, 3);
    
    if (featuredBlogs.length === 0) {
        featuredContainer.innerHTML = '<p>No featured blogs available.</p>';
        return;
    }
    
    featuredContainer.innerHTML = featuredBlogs.map(blog => `
        <div class="blog-card">
            <img src="${blog.image}" alt="${blog.title}" class="blog-image">
            <div class="blog-content">
                <span class="blog-category">${blog.category}</span>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-description">${blog.description}</p>
                <div class="blog-meta">
                    <span>By ${blog.author}</span>
                    <span>${formatDate(blog.date)}</span>
                </div>
                <button class="btn btn-primary read-more" data-id="${blog.id}">Read More</button>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to read more buttons
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const blogId = parseInt(this.getAttribute('data-id'));
            // In a real app, this would navigate to a blog detail page
            alert(`This would show the full blog post with ID: ${blogId}`);
        });
    });
}

// Load all blogs on blog page
function loadAllBlogs() {
    const blogsContainer = document.getElementById('allBlogs');
    if (!blogsContainer) return;
    
    if (blogPosts.length === 0) {
        blogsContainer.innerHTML = '<p>No blog posts available.</p>';
        return;
    }
    
    blogsContainer.innerHTML = blogPosts.map(blog => `
        <div class="blog-card">
            <img src="${blog.image}" alt="${blog.title}" class="blog-image">
            <div class="blog-content">
                <span class="blog-category">${blog.category}</span>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-description">${blog.description}</p>
                <div class="blog-meta">
                    <span>By ${blog.author}</span>
                    <span>${formatDate(blog.date)}</span>
                </div>
                <button class="btn btn-primary read-more" data-id="${blog.id}">Read More</button>
                ${currentUser && currentUser.type === 'reader' ? 
                    `<button class="btn btn-outline save-post" data-id="${blog.id}">Save</button>` : ''}
            </div>
        </div>
    `).join('');
    
    // Add event listeners
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const blogId = parseInt(this.getAttribute('data-id'));
            alert(`This would show the full blog post with ID: ${blogId}`);
        });
    });
    
    document.querySelectorAll('.save-post').forEach(button => {
        button.addEventListener('click', function() {
            const blogId = parseInt(this.getAttribute('data-id'));
            savePostForReader(blogId);
        });
    });
}

// Setup filters on blog page
function setupFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterBlogs);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterBlogs);
    }
}

// Filter blogs based on search and category
function filterBlogs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    
    const filteredBlogs = blogPosts.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm) || 
                             blog.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !category || blog.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    const blogsContainer = document.getElementById('allBlogs');
    if (!blogsContainer) return;
    
    if (filteredBlogs.length === 0) {
        blogsContainer.innerHTML = '<p>No blog posts match your filters.</p>';
        return;
    }
    
    blogsContainer.innerHTML = filteredBlogs.map(blog => `
        <div class="blog-card">
            <img src="${blog.image}" alt="${blog.title}" class="blog-image">
            <div class="blog-content">
                <span class="blog-category">${blog.category}</span>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-description">${blog.description}</p>
                <div class="blog-meta">
                    <span>By ${blog.author}</span>
                    <span>${formatDate(blog.date)}</span>
                </div>
                <button class="btn btn-primary read-more" data-id="${blog.id}">Read More</button>
                ${currentUser && currentUser.type === 'reader' ? 
                    `<button class="btn btn-outline save-post" data-id="${blog.id}">Save</button>` : ''}
            </div>
        </div>
    `).join('');
    
    // Re-attach event listeners
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const blogId = parseInt(this.getAttribute('data-id'));
            alert(`This would show the full blog post with ID: ${blogId}`);
        });
    });
    
    document.querySelectorAll('.save-post').forEach(button => {
        button.addEventListener('click', function() {
            const blogId = parseInt(this.getAttribute('data-id'));
            savePostForReader(blogId);
        });
    });
}

// Setup login form
function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Validate credentials
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            // Show success message
            showMessage('loginMessage', 'Login successful! Redirecting...', 'success');
            
            // Redirect based on user type
            setTimeout(() => {
                if (user.type === 'writer') {
                    window.location.href = 'writer.html';
                } else {
                    window.location.href = 'reader.html';
                }
            }, 1500);
        } else {
            showMessage('loginMessage', 'Invalid email or password. Please try again.', 'error');
        }
    });
}

// Setup registration form
function setupRegistrationForm() {
    const registerForm = document.getElementById('registerForm');
    const userTypeBtns = document.querySelectorAll('.user-type-btn');
    const userTypeInput = document.getElementById('userType');
    
    if (!registerForm) return;
    
    // Handle user type selection
    userTypeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            userTypeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            userTypeInput.value = this.getAttribute('data-type');
        });
    });
    
    // Check URL parameters for pre-selected user type
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    if (type && (type === 'reader' || type === 'writer')) {
        userTypeBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-type') === type) {
                btn.classList.add('active');
                userTypeInput.value = type;
            }
        });
    }
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        const userType = userTypeInput.value;
        
        // Validate form
        if (password !== confirmPassword) {
            showMessage('registerMessage', 'Passwords do not match.', 'error');
            return;
        }
        
        if (users.find(u => u.email === email)) {
            showMessage('registerMessage', 'Email already registered. Please use a different email.', 'error');
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            type: userType,
            joinDate: new Date().toISOString().split('T')[0]
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Auto-login the new user
        currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        showMessage('registerMessage', 'Registration successful! Redirecting...', 'success');
        
        // Redirect based on user type
        setTimeout(() => {
            if (userType === 'writer') {
                window.location.href = 'writer.html';
            } else {
                window.location.href = 'reader.html';
            }
        }, 1500);
    });
}

// Setup writer dashboard
function setupWriterDashboard() {
    const newPostBtn = document.getElementById('newPostBtn');
    const postForm = document.getElementById('postForm');
    const cancelPostBtn = document.getElementById('cancelPostBtn');
    const blogPostForm = document.getElementById('blogPostForm');
    
    if (newPostBtn && postForm) {
        newPostBtn.addEventListener('click', function() {
            postForm.style.display = 'block';
            this.style.display = 'none';
        });
    }
    
    if (cancelPostBtn && postForm) {
        cancelPostBtn.addEventListener('click', function() {
            postForm.style.display = 'none';
            newPostBtn.style.display = 'block';
            blogPostForm.reset();
        });
    }
    
    if (blogPostForm) {
        blogPostForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('postTitle').value;
            const category = document.getElementById('postCategory').value;
            const image = document.getElementById('postImage').value;
            const description = document.getElementById('postDescription').value;
            const content = document.getElementById('postContent').value;
            
            // Create new blog post
            const newPost = {
                id: Date.now(),
                title,
                description,
                image: image || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                category,
                content,
                author: currentUser.name,
                date: new Date().toISOString().split('T')[0],
                featured: false
            };
            
            blogPosts.unshift(newPost);
            localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
            
            showMessage('postForm', 'Blog post published successfully!', 'success');
            
            // Reset form and hide it
            setTimeout(() => {
                blogPostForm.reset();
                postForm.style.display = 'none';
                newPostBtn.style.display = 'block';
                
                // Reload writer's posts
                loadWriterPosts();
            }, 1500);
        });
    }
    
    // Load writer's posts
    loadWriterPosts();
}

// Load writer's posts on writer dashboard
function loadWriterPosts() {
    const myPostsContainer = document.getElementById('myPosts');
    if (!myPostsContainer) return;
    
    const writerPosts = blogPosts.filter(blog => blog.author === currentUser.name);
    
    if (writerPosts.length === 0) {
        myPostsContainer.innerHTML = '<p>You haven\'t published any posts yet.</p>';
        return;
    }
    
    myPostsContainer.innerHTML = writerPosts.map(blog => `
        <div class="blog-card">
            <img src="${blog.image}" alt="${blog.title}" class="blog-image">
            <div class="blog-content">
                <span class="blog-category">${blog.category}</span>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-description">${blog.description}</p>
                <div class="blog-meta">
                    <span>Published on ${formatDate(blog.date)}</span>
                </div>
                <div class="post-actions">
                    <button class="btn btn-primary read-more" data-id="${blog.id}">Read More</button>
                    <button class="btn btn-outline edit-post" data-id="${blog.id}">Edit</button>
                    <button class="btn btn-outline delete-post" data-id="${blog.id}">Delete</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const blogId = parseInt(this.getAttribute('data-id'));
            alert(`This would show the full blog post with ID: ${blogId}`);
        });
    });
    
    document.querySelectorAll('.edit-post').forEach(button => {
        button.addEventListener('click', function() {
            const blogId = parseInt(this.getAttribute('data-id'));
            alert(`Edit functionality for post ID: ${blogId} would be implemented here.`);
        });
    });
    
    document.querySelectorAll('.delete-post').forEach(button => {
        button.addEventListener('click', function() {
            const blogId = parseInt(this.getAttribute('data-id'));
            if (confirm('Are you sure you want to delete this post?')) {
                blogPosts = blogPosts.filter(blog => blog.id !== blogId);
                localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
                loadWriterPosts();
            }
        });
    });
}

// Setup reader dashboard
function setupReaderDashboard() {
    loadSavedPosts();
    loadRecommendedPosts();
}

// Load saved posts for reader
function loadSavedPosts() {
    const savedPostsContainer = document.getElementById('savedPosts');
    if (!savedPostsContainer) return;
    
    const savedPostIds = JSON.parse(localStorage.getItem(`savedPosts_${currentUser.id}`)) || [];
    const savedPosts = blogPosts.filter(blog => savedPostIds.includes(blog.id));
    
    if (savedPosts.length === 0) {
        savedPostsContainer.innerHTML = '<p>You haven\'t saved any posts yet.</p>';
        return;
    }
    
    savedPostsContainer.innerHTML = savedPosts.map(blog => `
        <div class="blog-card">
            <img src="${blog.image}" alt="${blog.title}" class="blog-image">
            <div class="blog-content">
                <span class="blog-category">${blog.category}</span>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-description">${blog.description}</p>
                <div class="blog-meta">
                    <span>By ${blog.author}</span>
                    <span>${formatDate(blog.date)}</span>
                </div>
                <button class="btn btn-primary read-more" data-id="${blog.id}">Read More</button>
                <button class="btn btn-outline unsave-post" data-id="${blog.id}">Unsave</button>
            </div>
        </div>
    `).join('');
    
    // Add event listeners
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const blogId = parseInt(this.getAttribute('data-id'));
            alert(`This would show the full blog post with ID: ${blogId}`);
        });
    });
    
    document.querySelectorAll('.unsave-post').forEach(button => {
        button.addEventListener('click', function() {
            const blogId = parseInt(this.getAttribute('data-id'));
            unsavePostForReader(blogId);
        });
    });
}

// Load recommended posts for reader
function loadRecommendedPosts() {
    const recommendedContainer = document.getElementById('recommendedPosts');
    if (!recommendedContainer) return;
    
    // Simple recommendation: show featured posts
    const recommendedPosts = blogPosts.filter(blog => blog.featured).slice(0, 3);
    
    if (recommendedPosts.length === 0) {
        recommendedContainer.innerHTML = '<p>No recommended posts available.</p>';
        return;
    }
    
    recommendedContainer.innerHTML = recommendedPosts.map(blog => `
        <div class="blog-card">
            <img src="${blog.image}" alt="${blog.title}" class="blog-image">
            <div class="blog-content">
                <span class="blog-category">${blog.category}</span>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-description">${blog.description}</p>
                <div class="blog-meta">
                    <span>By ${blog.author}</span>
                    <span>${formatDate(blog.date)}</span>
                </div>
                <button class="btn btn-primary read-more" data-id="${blog.id}">Read More</button>
                <button class="btn btn-outline save-post" data-id="${blog.id}">Save</button>
            </div>
        </div>
    `).join('');
    
    // Add event listeners
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const blogId = parseInt(this.getAttribute('data-id'));
            alert(`This would show the full blog post with ID: ${blogId}`);
        });
    });
    
    document.querySelectorAll('.save-post').forEach(button => {
        button.addEventListener('click', function() {
            const blogId = parseInt(this.getAttribute('data-id'));
            savePostForReader(blogId);
        });
    });
}

// Save post for reader
function savePostForReader(blogId) {
    if (!currentUser || currentUser.type !== 'reader') return;
    
    const savedPostIds = JSON.parse(localStorage.getItem(`savedPosts_${currentUser.id}`)) || [];
    
    if (!savedPostIds.includes(blogId)) {
        savedPostIds.push(blogId);
        localStorage.setItem(`savedPosts_${currentUser.id}`, JSON.stringify(savedPostIds));
        alert('Post saved to your reading list!');
        
        // Reload saved posts if on reader dashboard
        if (window.location.pathname.includes('reader.html')) {
            loadSavedPosts();
        }
    } else {
        alert('This post is already in your saved list.');
    }
}

// Unsave post for reader
function unsavePostForReader(blogId) {
    if (!currentUser || currentUser.type !== 'reader') return;
    
    let savedPostIds = JSON.parse(localStorage.getItem(`savedPosts_${currentUser.id}`)) || [];
    savedPostIds = savedPostIds.filter(id => id !== blogId);
    localStorage.setItem(`savedPosts_${currentUser.id}`, JSON.stringify(savedPostIds));
    
    // Reload saved posts
    loadSavedPosts();
}

// Utility function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Utility function to show messages
function showMessage(containerId, message, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = `<div class="message ${type}">${message}</div>`;
    
    // Auto-remove message after 5 seconds
    setTimeout(() => {
        container.innerHTML = '';
    }, 5000);
}