// Project Detail Page Logic
class ProjectDetailPage {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'ar';
    this.projectSlug = this.getProjectSlugFromURL();
    this.project = null;
    this.init();
  }

  init() {
    this.loadProject();
    this.setupLanguageSwitcher();
    this.setupMobileMenu();
  }

  getProjectSlugFromURL() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    return filename.replace('.html', '');
  }

  loadProject() {
    // Find project by slug
    this.project = projectsData.find(p => p.slug === this.projectSlug);
    
    if (!this.project) {
      window.location.href = '../index.html';
      return;
    }

    this.renderProject();
  }

  renderProject() {
    const lang = this.currentLang;
    const isArabic = lang === 'ar';

    // Update page title
    const title = isArabic ? this.project.titleAr : this.project.titleEn;
    document.getElementById('pageTitle').textContent = `${title} - Hive Tech AI`;

    // Update hero section
    document.getElementById('heroImage').src = this.project.images.hero;
    document.getElementById('heroImage').alt = title;
    
    const categoryText = isArabic 
      ? (this.project.category === 'ecommerce' ? 'تجارة إلكترونية' : 'نظام خدمي')
      : (this.project.category === 'ecommerce' ? 'E-Commerce' : 'Service System');
    document.getElementById('categoryBadge').textContent = categoryText;
    
    document.getElementById('projectTitle').textContent = title;
    document.getElementById('projectSubtitle').textContent = isArabic 
      ? this.project.shortDescAr 
      : this.project.shortDescEn;

    // Update problem and solution
    document.getElementById('problemText').textContent = isArabic 
      ? this.project.problemAr 
      : this.project.problemEn;
    document.getElementById('solutionText').textContent = isArabic 
      ? this.project.solutionAr 
      : this.project.solutionEn;

    // Render features
    this.renderFeatures();

    // Render target audience
    this.renderAudience();

    // Render system types
    this.renderSystemTypes();

    // Render gallery
    this.renderGallery();

    // Render demo button if available
    this.renderDemoButton();

    // Setup next project link
    this.setupNextProject();
  }

  renderFeatures() {
    const featuresGrid = document.getElementById('featuresGrid');
    const isArabic = this.currentLang === 'ar';
    
    // SVG Icons mapping
    const iconSVGs = {
      '📦': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
      '📊': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
      '💳': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
      '🚚': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
      '⚙️': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m9-9h-6m-6 0H3"/></svg>',
      '📈': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
      '📱': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
      '🔧': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      '⚖️': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="3" x2="12" y2="21"/><path d="M5 9l-3 6h6l-3-6zM19 9l-3 6h6l-3-6z"/></svg>',
      '🛠️': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      '📍': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
      '💰': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
      '🤝': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>',
      '🚢': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/><path d="M12 2v3"/></svg>',
      '📄': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
      '📋': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>',
      '🍽️': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>',
      '🪑': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
      '🛵': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>',
      '🚗': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 3h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/><path d="M8 3H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 11h14"/></svg>',
      '⚠️': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
      '🔔': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
      '💵': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>',
      '👥': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      '👤': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
      '👨‍💼': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
      '📅': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
      '💄': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
      '⭐': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
      '🎁': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
      '🤖': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>',
      '🏢': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
      '🏠': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
      '📝': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
      '🎥': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>'
    };
    
    featuresGrid.innerHTML = this.project.features.map(feature => {
      const svgIcon = iconSVGs[feature.icon] || iconSVGs['⚙️'];
      return `
        <div class="feature-card">
          <div class="feature-icon">${svgIcon}</div>
          <h3 class="feature-title">${isArabic ? feature.ar : feature.en}</h3>
        </div>
      `;
    }).join('');
  }

  renderAudience() {
    const audienceTags = document.getElementById('audienceTags');
    const isArabic = this.currentLang === 'ar';
    const audience = isArabic ? this.project.targetAudienceAr : this.project.targetAudienceEn;
    const tags = audience.split('،').map(tag => tag.split(',').map(t => t.trim())).flat();
    
    audienceTags.innerHTML = tags.map(tag => `
      <span class="tag">${tag}</span>
    `).join('');
  }

  renderSystemTypes() {
    const systemTypes = document.getElementById('systemTypes');
    const isArabic = this.currentLang === 'ar';
    
    const typeIcons = {
      'Web': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
      'Dashboard': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m9-9h-6m-6 0H3"/></svg>',
      'Mobile': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>'
    };

    const typeNames = {
      'Web': isArabic ? 'موقع ويب' : 'Website',
      'Dashboard': isArabic ? 'لوحة تحكم' : 'Dashboard',
      'Mobile': isArabic ? 'تطبيق موبايل' : 'Mobile App'
    };

    const typeDescs = {
      'Web': isArabic ? 'متجاوب بالكامل' : 'Fully responsive',
      'Dashboard': isArabic ? 'إدارة شاملة' : 'Complete management',
      'Mobile': isArabic ? 'iOS & Android' : 'iOS & Android'
    };

    systemTypes.innerHTML = this.project.systemType.map(type => `
      <div class="system-type-card">
        <div class="system-icon">${typeIcons[type]}</div>
        <h3>${typeNames[type]}</h3>
        <p>${typeDescs[type]}</p>
      </div>
    `).join('');
  }

  renderGallery() {
    const gallery = document.getElementById('projectGallery');
    const isArabic = this.currentLang === 'ar';
    const title = isArabic ? this.project.titleAr : this.project.titleEn;
    
    gallery.innerHTML = this.project.images.gallery.map((img, index) => `
      <img src="${img}" alt="${title} ${index + 1}" loading="lazy">
    `).join('');
  }

  renderDemoButton() {
    if (!this.project.demoUrl) return;
    
    const isArabic = this.currentLang === 'ar';
    const demoSection = document.createElement('div');
    demoSection.className = 'content-section reveal demo-section';
    demoSection.innerHTML = `
      <div class="section-icon">🚀</div>
      <h2 class="section-title">${isArabic ? 'تجربة الديمو التفاعلي' : 'Try Interactive Demo'}</h2>
      <p class="section-text">${isArabic ? 'جرب النظام بشكل تفاعلي واستكشف جميع المميزات' : 'Try the system interactively and explore all features'}</p>
      <a href="${this.project.demoUrl}" target="_blank" class="demo-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="10 8 16 12 10 16 10 8"></polygon>
        </svg>
        ${isArabic ? 'مشاهدة الديمو' : 'View Demo'}
      </a>
    `;
    
    // Insert before gallery section
    const gallerySection = document.querySelector('.project-gallery').parentElement;
    gallerySection.parentElement.insertBefore(demoSection, gallerySection);
  }

  setupNextProject() {
    const currentIndex = projectsData.findIndex(p => p.slug === this.projectSlug);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    const nextProject = projectsData[nextIndex];
    
    const nextBtn = document.getElementById('nextProject');
    nextBtn.href = `${nextProject.slug}.html`;
  }

  setupLanguageSwitcher() {
    const langSwitcher = document.getElementById('langSwitcher');
    const html = document.documentElement;
    
    // Set initial language
    html.setAttribute('lang', this.currentLang);
    html.setAttribute('dir', this.currentLang === 'ar' ? 'rtl' : 'ltr');
    langSwitcher.querySelector('.lang-text').textContent = this.currentLang === 'ar' ? 'EN' : 'AR';
    
    langSwitcher.addEventListener('click', () => {
      this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('language', this.currentLang);
      
      html.setAttribute('lang', this.currentLang);
      html.setAttribute('dir', this.currentLang === 'ar' ? 'rtl' : 'ltr');
      langSwitcher.querySelector('.lang-text').textContent = this.currentLang === 'ar' ? 'EN' : 'AR';
      
      this.renderProject();
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
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ProjectDetailPage();
});
