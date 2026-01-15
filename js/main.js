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
        const button = e.currentTarget;
        const hasSubcategories = button.getAttribute('data-has-subcategories') === 'true';
        
        if (hasSubcategories) {
          // Toggle subcategories visibility
          this.toggleSubcategories(button);
        } else {
          // Regular filter
          this.handleFilterClick(button);
        }
      });
    });
  }

  toggleSubcategories(button) {
    const filter = button.getAttribute('data-filter');
    const subFilterContainer = document.querySelector(`.sub-filter-buttons[data-parent="${filter}"]`);
    
    if (!subFilterContainer) return;
    
    const isExpanded = button.classList.contains('expanded');
    
    if (isExpanded) {
      // Collapse
      button.classList.remove('expanded');
      subFilterContainer.style.display = 'none';
    } else {
      // Collapse all other expanded categories first
      document.querySelectorAll('.filter-btn.expanded').forEach(btn => {
        btn.classList.remove('expanded');
      });
      document.querySelectorAll('.sub-filter-buttons').forEach(container => {
        container.style.display = 'none';
      });
      
      // Expand this category
      button.classList.add('expanded');
      subFilterContainer.style.display = 'flex';
    }
    
    // Apply the filter when expanding
    if (!isExpanded) {
      this.handleFilterClick(button);
    }
  }

  handleFilterClick(button) {
    const filter = button.getAttribute('data-filter');
    
    if (!filter) return;
    
    const hasSubcategories = button.getAttribute('data-has-subcategories') === 'true';
    
    // If clicking "All", collapse all subcategories
    if (filter === 'all') {
      document.querySelectorAll('.filter-btn.expanded').forEach(btn => {
        btn.classList.remove('expanded');
      });
      document.querySelectorAll('.sub-filter-buttons').forEach(container => {
        container.style.display = 'none';
      });
    }
    
    // Update active button
    if (!button.classList.contains('sub-filter-btn')) {
      // Main level button clicked
      document.querySelectorAll('.filter-btn:not(.sub-filter-btn)').forEach(btn => {
        btn.classList.remove('active');
      });
      // Remove active from all sub buttons
      document.querySelectorAll('.sub-filter-btn').forEach(btn => {
        btn.classList.remove('active');
      });
    } else {
      // Sub button clicked - remove active from main buttons except parent
      document.querySelectorAll('.filter-btn:not(.sub-filter-btn):not([data-has-subcategories])').forEach(btn => {
        btn.classList.remove('active');
      });
      // Remove active from all sub buttons
      document.querySelectorAll('.sub-filter-btn').forEach(btn => {
        btn.classList.remove('active');
      });
    }
    
    button.classList.add('active');
    
    // Filter projects
    this.filterProjects(filter);
  }

  filterProjects(filter) {
    this.currentFilter = filter;
    
    // Get all sections
    const allSection = document.getElementById('all-projects');
    const ecommerceSection = document.getElementById('ecommerce-projects');
    const serviceSection = document.getElementById('service-projects');
    
    // Hide all sections first
    if (allSection) allSection.style.display = 'none';
    if (ecommerceSection) ecommerceSection.style.display = 'none';
    if (serviceSection) serviceSection.style.display = 'none';
    
    if (filter === 'all' || filter === 'websites') {
      // Show all projects section
      if (allSection) allSection.style.display = '';
    } else if (filter === 'ecommerce') {
      // Show only e-commerce section
      if (ecommerceSection) ecommerceSection.style.display = '';
    } else if (filter === 'service') {
      // Show only service section
      if (serviceSection) serviceSection.style.display = '';
    }
  }

  loadProjects() {
    this.loadAllProjects();
    this.loadEcommerceProjects();
    this.loadServiceProjects();
  }

  loadAllProjects() {
    const grid = document.getElementById('allProjectsGrid');
    if (!grid) return;
    
    const lang = languageManager.getCurrentLang();
    grid.innerHTML = '';
    
    // Load all projects
    projectsData.forEach((project) => {
      const card = this.createProjectCard(project, lang);
      grid.appendChild(card);
    });
    
    // Trigger animation setup after cards are added
    setTimeout(() => {
      if (window.animationsManager) {
        window.animationsManager.setupScrollAnimations();
      }
    }, 100);
  }

  loadEcommerceProjects() {
    const grid = document.getElementById('ecommerceGrid');
    if (!grid) return;
    
    const lang = languageManager.getCurrentLang();
    grid.innerHTML = '';
    
    // Filter e-commerce projects
    const ecommerceProjects = projectsData.filter(p => p.subCategory === 'ecommerce');
    
    ecommerceProjects.forEach((project) => {
      const card = this.createProjectCard(project, lang);
      grid.appendChild(card);
    });
  }

  loadServiceProjects() {
    const grid = document.getElementById('serviceGrid');
    if (!grid) return;
    
    const lang = languageManager.getCurrentLang();
    grid.innerHTML = '';
    
    // Filter service projects
    const serviceProjects = projectsData.filter(p => p.subCategory === 'service');
    
    serviceProjects.forEach((project) => {
      const card = this.createProjectCard(project, lang);
      grid.appendChild(card);
    });
  }

  createProjectCard(project, lang) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-maincategory', project.mainCategory);
    card.setAttribute('data-subcategory', project.subCategory);
    
    const title = lang === 'ar' ? project.titleAr : project.titleEn;
    const description = lang === 'ar' ? project.shortDescAr : project.shortDescEn;
    const categoryText = lang === 'ar' 
      ? (project.subCategory === 'ecommerce' ? 'تجارة إلكترونية' : 'نظام خدمي')
      : (project.subCategory === 'ecommerce' ? 'E-COMMERCE' : 'SERVICE SYSTEM');
    const viewDetailsText = lang === 'ar' ? 'عرض التفاصيل' : 'View Details';
    
    card.innerHTML = `
      <div class="project-image-wrapper">
        <img src="${project.images.thumbnail}" alt="${title}" class="project-image" loading="lazy">
        <div class="project-overlay">
          <span class="project-view-btn">${viewDetailsText}</span>
        </div>
      </div>
      <div class="project-content">
        <span class="project-category">${categoryText}</span>
        <h3 class="project-title">${title}</h3>
        <p class="project-description">${description}</p>
        <a href="${project.demoUrl}" target="_blank" class="project-link">
          ${viewDetailsText}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
          </svg>
        </a>
      </div>
    `;
    
    // Add click event to open demo
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.project-link')) {
        window.open(project.demoUrl, '_blank');
      }
    });
    
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
