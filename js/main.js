// Main Application Logic
class PortfolioApp {
  constructor() {
    this.currentFilter = 'all';
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadProjects();
    this.setupHeaderScroll();
    this.setupMobileMenu();
  }

  setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Get the button element even if clicked on child elements
        const button = e.currentTarget;
        this.handleFilterClick(button);
      });
    });
  }

  handleFilterClick(button) {
    const filter = button.getAttribute('data-filter');
    
    if (!filter) return;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
    
    // Filter projects
    this.filterProjects(filter);
  }

  filterProjects(filter) {
    this.currentFilter = filter;
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        animationsManager.filterAnimation([card], true);
      } else {
        animationsManager.filterAnimation([card], false);
      }
    });
  }

  loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    const lang = languageManager.getCurrentLang();
    projectsGrid.innerHTML = '';
    
    projectsData.forEach((project, index) => {
      const card = this.createProjectCard(project, lang, index);
      projectsGrid.appendChild(card);
    });
    
    // Add reveal class for scroll animations
    const cards = projectsGrid.querySelectorAll('.project-card');
    cards.forEach(card => card.classList.add('reveal'));
  }

  createProjectCard(project, lang, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);
    card.style.opacity = '0';
    
    const title = lang === 'ar' ? project.titleAr : project.titleEn;
    const description = lang === 'ar' ? project.shortDescAr : project.shortDescEn;
    const categoryText = lang === 'ar' 
      ? (project.category === 'ecommerce' ? 'تجارة إلكترونية' : 'نظام خدمي')
      : (project.category === 'ecommerce' ? 'E-Commerce' : 'Service System');
    const viewDetailsText = lang === 'ar' ? 'عرض التفاصيل' : 'View Details';
    
    card.innerHTML = `
      <div class="project-image-wrapper" style="overflow: hidden;">
        <img src="${project.images.thumbnail}" alt="${title}" class="project-image" loading="lazy">
        <div class="project-overlay">
          <span class="project-view-btn">${viewDetailsText}</span>
        </div>
      </div>
      <div class="project-content">
        <span class="project-category">${categoryText}</span>
        <h3 class="project-title">${title}</h3>
        <p class="project-description">${description}</p>
        <a href="${project.isLiveDemo ? project.demoUrl : 'projects/' + project.slug + '.html'}" class="project-link">
          ${viewDetailsText}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
          </svg>
        </a>
      </div>
    `;
    
    // Add click event to navigate to project page or demo
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.project-link')) {
        window.location.href = project.isLiveDemo ? project.demoUrl : `projects/${project.slug}.html`;
      }
    });
    
    // Animate card appearance
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transition = 'opacity 0.5s ease, transform 0.3s ease';
    }, index * 100);
    
    return card;
  }

  setupHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }

  setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('nav');
    
    if (mobileMenuToggle && nav) {
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        nav.classList.toggle('active');
      });
      
      // Close menu when clicking on a link
      const navLinks = nav.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenuToggle.classList.remove('active');
          nav.classList.remove('active');
        });
      });
    }
  }
}

// Make loadProjects available globally for language switching
function loadProjects() {
  if (window.portfolioApp) {
    window.portfolioApp.loadProjects();
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.portfolioApp = new PortfolioApp();
});
