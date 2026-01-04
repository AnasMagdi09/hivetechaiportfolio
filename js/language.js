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
      websites: 'المواقع الإلكترونية',
      ecommerce: 'التجارة الإلكترونية',
      service: 'الأنظمة الخدمية'
    },
    ecommerce: {
      badge: 'التجارة الإلكترونية',
      title: 'منصات التجارة الإلكترونية',
      subtitle: 'حلول متكاملة للمتاجر الإلكترونية بمختلف أنواعها'
    },
    service: {
      badge: 'الأنظمة الخدمية',
      title: 'الأنظمة الخدمية المتكاملة',
      subtitle: 'أنظمة إدارية ذكية لمختلف القطاعات'
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
      copyright: '© 2024 Hive Tech AI. جميع الحقوق محفوظة.',
      webDev: 'تطوير المواقع',
      mobileApps: 'تطبيقات الموبايل',
      aiSolutions: 'حلول الذكاء الاصطناعي',
      serverManagement: 'إدارة السيرفرات'
    },
    // About Page
    about: {
      badge: 'من نحن',
      title: 'Hive Tech AI',
      subtitle: 'نحن فريق من المبدعين والمطورين المتخصصين في بناء حلول ذكية مبتكرة تعتمد على الذكاء الاصطناعي',
      visionBadge: 'رؤيتنا',
      visionTitle: 'نبني المستقبل الرقمي',
      visionSubtitle: 'في Hive Tech AI، نؤمن بقوة التكنولوجيا في تحويل الأفكار إلى واقع ملموس. نسعى لتقديم حلول مبتكرة تساعد الشركات على النمو والتطور في العصر الرقمي.',
      ourVision: 'رؤيتنا',
      ourVisionDesc: 'أن نكون الشريك الأول للشركات في رحلتها نحو التحول الرقمي من خلال حلول ذكية ومبتكرة',
      ourMission: 'مهمتنا',
      ourMissionDesc: 'تطوير أنظمة ذكية متكاملة تساعد عملاءنا على تحقيق أهدافهم وتحسين كفاءة أعمالهم',
      ourValues: 'قيمنا',
      ourValuesDesc: 'الابتكار، الجودة، الاحترافية، والالتزام بتقديم أفضل الحلول التقنية لعملائنا',
      ourExperience: 'خبرتنا',
      ourExperienceDesc: 'فريق متخصص بخبرات واسعة في تطوير الحلول التقنية المتقدمة والمبتكرة',
      servicesBadge: 'خدماتنا',
      servicesTitle: 'ما نقدمه لك',
      webDev: 'تطوير المواقع',
      webDevDesc: 'تصميم وتطوير مواقع إلكترونية احترافية متجاوبة مع جميع الأجهزة',
      mobileApps: 'تطبيقات الموبايل',
      mobileAppsDesc: 'بناء تطبيقات موبايل ذكية لأنظمة iOS و Android',
      ai: 'الذكاء الاصطناعي',
      aiDesc: 'حلول ذكية مدعومة بالذكاء الاصطناعي لتحسين الأعمال',
      ecommerce: 'التجارة الإلكترونية',
      ecommerceDesc: 'منصات تجارة إلكترونية متكاملة مع أنظمة دفع آمنة',
      adminSystems: 'الأنظمة الإدارية',
      adminSystemsDesc: 'أنظمة إدارية متكاملة لمختلف القطاعات والأعمال',
      cloudSolutions: 'الحلول السحابية',
      cloudSolutionsDesc: 'استضافة وإدارة سيرفرات سحابية آمنة وموثوقة',
      ctaTitle: 'هل أنت مستعد للبدء؟',
      ctaSubtitle: 'دعنا نساعدك في تحويل أفكارك إلى واقع رقمي متميز',
      exploreProjects: 'استكشف المشاريع'
    },
    // Contact Page
    contact: {
      badge: 'تواصل معنا',
      title: 'نحن هنا لمساعدتك',
      subtitle: 'لديك فكرة مشروع؟ تحتاج استشارة تقنية؟ نحن في خدمتك دائماً',
      email: 'البريد الإلكتروني',
      emailDesc: 'راسلنا في أي وقت',
      website: 'الموقع الإلكتروني',
      websiteDesc: 'زر موقعنا الرسمي',
      workHours: 'ساعات العمل',
      workHoursDesc: 'نحن متاحون',
      support247: '24/7 دعم فني',
      formBadge: 'أرسل رسالة',
      formTitle: 'تواصل معنا الآن',
      formSubtitle: 'املأ النموذج وسنتواصل معك في أقرب وقت ممكن',
      fullName: 'الاسم الكامل *',
      fullNamePlaceholder: 'أدخل اسمك الكامل',
      emailLabel: 'البريد الإلكتروني *',
      phone: 'رقم الهاتف',
      subject: 'الموضوع *',
      selectSubject: 'اختر الموضوع',
      newProject: 'استفسار عن مشروع جديد',
      consultation: 'طلب استشارة تقنية',
      techSupport: 'دعم فني',
      partnership: 'فرص الشراكة',
      other: 'أخرى',
      message: 'الرسالة *',
      messagePlaceholder: 'اكتب رسالتك هنا...',
      sendMessage: 'إرسال الرسالة',
      successMessage: 'شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.',
      ctaTitle: 'استكشف أعمالنا',
      ctaSubtitle: 'تصفح معرض مشاريعنا لترى ما يمكننا تقديمه لك',
      projectsBtn: 'المشاريع',
      aboutBtn: 'من نحن'
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
      websites: 'Websites',
      ecommerce: 'E-Commerce',
      service: 'Service Systems'
    },
    ecommerce: {
      badge: 'E-Commerce',
      title: 'E-Commerce Platforms',
      subtitle: 'Complete solutions for online stores of all types'
    },
    service: {
      badge: 'Service Systems',
      title: 'Integrated Service Systems',
      subtitle: 'Smart management systems for various sectors'
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
      copyright: '© 2024 Hive Tech AI. All rights reserved.',
      webDev: 'Web Development',
      mobileApps: 'Mobile Apps',
      aiSolutions: 'AI Solutions',
      serverManagement: 'Server Management'
    },
    // About Page
    about: {
      badge: 'About Us',
      title: 'Hive Tech AI',
      subtitle: 'We are a team of creative developers specialized in building innovative smart solutions powered by artificial intelligence',
      visionBadge: 'Our Vision',
      visionTitle: 'Building the Digital Future',
      visionSubtitle: 'At Hive Tech AI, we believe in the power of technology to transform ideas into reality. We strive to provide innovative solutions that help companies grow and evolve in the digital age.',
      ourVision: 'Our Vision',
      ourVisionDesc: 'To be the primary partner for companies in their digital transformation journey through smart and innovative solutions',
      ourMission: 'Our Mission',
      ourMissionDesc: 'Developing integrated smart systems that help our clients achieve their goals and improve their business efficiency',
      ourValues: 'Our Values',
      ourValuesDesc: 'Innovation, quality, professionalism, and commitment to providing the best technical solutions for our clients',
      ourExperience: 'Our Experience',
      ourExperienceDesc: 'A specialized team with extensive experience in developing advanced and innovative technical solutions',
      servicesBadge: 'Our Services',
      servicesTitle: 'What We Offer',
      webDev: 'Web Development',
      webDevDesc: 'Design and development of professional responsive websites for all devices',
      mobileApps: 'Mobile Apps',
      mobileAppsDesc: 'Building smart mobile applications for iOS and Android systems',
      ai: 'Artificial Intelligence',
      aiDesc: 'Smart solutions powered by AI to improve business',
      ecommerce: 'E-Commerce',
      ecommerceDesc: 'Integrated e-commerce platforms with secure payment systems',
      adminSystems: 'Admin Systems',
      adminSystemsDesc: 'Integrated administrative systems for various sectors and businesses',
      cloudSolutions: 'Cloud Solutions',
      cloudSolutionsDesc: 'Hosting and management of secure and reliable cloud servers',
      ctaTitle: 'Ready to Get Started?',
      ctaSubtitle: 'Let us help you transform your ideas into outstanding digital reality',
      exploreProjects: 'Explore Projects'
    },
    // Contact Page
    contact: {
      badge: 'Contact Us',
      title: 'We\'re Here to Help',
      subtitle: 'Have a project idea? Need technical consultation? We\'re always at your service',
      email: 'Email',
      emailDesc: 'Email us anytime',
      website: 'Website',
      websiteDesc: 'Visit our official website',
      workHours: 'Working Hours',
      workHoursDesc: 'We\'re available',
      support247: '24/7 Technical Support',
      formBadge: 'Send a Message',
      formTitle: 'Contact Us Now',
      formSubtitle: 'Fill out the form and we\'ll get back to you as soon as possible',
      fullName: 'Full Name *',
      fullNamePlaceholder: 'Enter your full name',
      emailLabel: 'Email *',
      phone: 'Phone Number',
      subject: 'Subject *',
      selectSubject: 'Select Subject',
      newProject: 'New Project Inquiry',
      consultation: 'Technical Consultation',
      techSupport: 'Technical Support',
      partnership: 'Partnership Opportunities',
      other: 'Other',
      message: 'Message *',
      messagePlaceholder: 'Write your message here...',
      sendMessage: 'Send Message',
      successMessage: 'Thank you for contacting us! We\'ll get back to you as soon as possible.',
      ctaTitle: 'Explore Our Work',
      ctaSubtitle: 'Browse our project gallery to see what we can offer you',
      projectsBtn: 'Projects',
      aboutBtn: 'About Us'
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
