// Language Management System
const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      projects: 'المشاريع',
      about: 'من نحن',
      contact: 'تواصل معنا'
    },
    hero: {
      badge: 'حلول ذكية مبتكرة',
      title: 'معرض أعمالنا',
      subtitle: 'نعرض قدرات Hive Tech AI من خلال مشاريع مبتكرة تغطي مختلف القطاعات. حلول ذكية مخصصة تحول أفكارك إلى واقع رقمي متميز.',
      cta: 'استكشف المشاريع',
      visitWebsite: 'زيارة الموقع'
    },
    stats: {
      projects: 'مشاريع متنوعة',
      categories: 'قطاعات رئيسية',
      satisfaction: 'رضا العملاء',
      support: 'دعم فني'
    },
    filter: {
      all: 'جميع المشاريع',
      ecommerce: 'التجارة الإلكترونية',
      service: 'الأنظمة الخدمية'
    },
    projects: {
      badge: 'أعمالنا',
      title: 'مشاريعنا المميزة',
      subtitle: 'حلول ذكية مخصصة لمختلف القطاعات تعكس خبرتنا في بناء أنظمة متكاملة',
      viewDetails: 'عرض التفاصيل'
    },
    footer: {
      description: 'Hive Tech AI - نقدم حلول ذكية مبتكرة تعتمد على الذكاء الاصطناعي لتحويل أفكارك إلى واقع رقمي متميز.',
      quickLinks: 'روابط سريعة',
      services: 'خدماتنا',
      contact: 'تواصل معنا',
      social: 'تابعنا',
      copyright: '© 2024 Hive Tech AI. جميع الحقوق محفوظة.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      badge: 'Innovative Smart Solutions',
      title: 'Our Portfolio',
      subtitle: 'Showcasing Hive Tech AI capabilities through innovative projects across various sectors. Smart customized solutions that transform your ideas into outstanding digital reality.',
      cta: 'Explore Projects',
      visitWebsite: 'Visit Website'
    },
    stats: {
      projects: 'Diverse Projects',
      categories: 'Main Sectors',
      satisfaction: 'Client Satisfaction',
      support: 'Technical Support'
    },
    filter: {
      all: 'All Projects',
      ecommerce: 'E-Commerce',
      service: 'Service Systems'
    },
    projects: {
      badge: 'Our Work',
      title: 'Our Featured Projects',
      subtitle: 'Smart customized solutions for various sectors reflecting our expertise in building integrated systems',
      viewDetails: 'View Details'
    },
    footer: {
      description: 'Hive Tech AI - Providing innovative smart solutions powered by artificial intelligence to transform your ideas into outstanding digital reality.',
      quickLinks: 'Quick Links',
      services: 'Our Services',
      contact: 'Contact Us',
      social: 'Follow Us',
      copyright: '© 2024 Hive Tech AI. All rights reserved.'
    }
  }
};

class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'ar';
    this.init();
  }

  init() {
    this.updateLanguage(this.currentLang);
    this.setupEventListeners();
  }

  setupEventListeners() {
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
      langSwitcher.addEventListener('click', () => {
        this.toggleLanguage();
      });
    }
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.updateLanguage(this.currentLang);
    localStorage.setItem('language', this.currentLang);
  }

  updateLanguage(lang) {
    const html = document.documentElement;
    const langSwitcher = document.getElementById('langSwitcher');
    
    // Update HTML attributes
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update language switcher text
    if (langSwitcher) {
      langSwitcher.querySelector('.lang-text').textContent = lang === 'ar' ? 'EN' : 'AR';
    }
    
    // Update all translatable elements
    this.updateTranslatableElements(lang);
    
    // Reload projects with new language
    if (typeof loadProjects === 'function') {
      loadProjects();
    }
  }

  updateTranslatableElements(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = this.getTranslation(key, lang);
      if (translation) {
        // Check if element contains a span for text
        const span = element.querySelector('span');
        if (span) {
          span.textContent = translation;
        } else {
          // Check if element has SVG or other children
          const hasNonTextChildren = Array.from(element.children).some(child => 
            child.tagName !== 'SPAN'
          );
          
          if (hasNonTextChildren) {
            // Find and update text nodes only
            const walker = document.createTreeWalker(
              element,
              NodeFilter.SHOW_TEXT,
              null,
              false
            );
            
            let textNode = walker.nextNode();
            if (textNode && textNode.textContent.trim()) {
              textNode.textContent = translation;
            }
          } else {
            element.textContent = translation;
          }
        }
      }
    });
  }

  getTranslation(key, lang) {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return null;
      }
    }
    
    return value;
  }

  getCurrentLang() {
    return this.currentLang;
  }
}

// Initialize language manager
const languageManager = new LanguageManager();
