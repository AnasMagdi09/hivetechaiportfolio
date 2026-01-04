// Projects Data - Hive Tech AI Portfolio
// Hierarchical structure: Main Category > Sub Category > Projects
// Updated: 2025-01-04 - Added mainCategory and subCategory structure

const projectsData = [
  {
    id: 1,
    slug: 'fashion',
    mainCategory: 'websites',
    subCategory: 'ecommerce',
    titleAr: 'متجر الأزياء الإلكتروني',
    titleEn: 'Fashion E-Commerce',
    shortDescAr: 'منصة تجارة إلكترونية متكاملة لبيع الأزياء والملابس العصرية',
    shortDescEn: 'Complete e-commerce platform for selling fashion and modern clothing',
    problemAr: 'تواجه متاجر الأزياء التقليدية صعوبة في الوصول لعملاء جدد وإدارة المخزون بكفاءة، مما يحد من نموها وقدرتها على المنافسة في السوق الرقمي.',
    problemEn: 'Traditional fashion stores struggle to reach new customers and manage inventory efficiently, limiting their growth and ability to compete in the digital market.',
    solutionAr: 'منصة تجارة إلكترونية ذكية مع إدارة متقدمة للمنتجات والمقاسات والألوان، تتيح للمتاجر الوصول لعملاء جدد وإدارة عملياتها بكفاءة عالية.',
    solutionEn: 'Smart e-commerce platform with advanced product, size, and color management, enabling stores to reach new customers and manage operations efficiently.',
    features: [
      { ar: 'إدارة شاملة للمنتجات والمقاسات والألوان', en: 'Comprehensive product, size, and color management', icon: '📦' },
      { ar: 'نظام إدارة مخزون ذكي', en: 'Smart inventory management system', icon: '📊' },
      { ar: 'بوابات دفع إلكترونية متعددة', en: 'Multiple payment gateways', icon: '💳' },
      { ar: 'نظام متابعة الطلبات والشحن', en: 'Order and shipping tracking system', icon: '🚚' },
      { ar: 'لوحة تحكم احترافية للإدارة', en: 'Professional admin dashboard', icon: '⚙️' },
      { ar: 'تقارير مبيعات تفصيلية', en: 'Detailed sales reports', icon: '📈' }
    ],
    targetAudienceAr: 'متاجر الأزياء، العلامات التجارية، المصممين',
    targetAudienceEn: 'Fashion stores, brands, designers',
    systemType: ['Web', 'Dashboard', 'Mobile'],
    demoUrl: 'demos/fashion/index.html',
    isLiveDemo: true,
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      hero: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
        'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600'
      ]
    }
  },
  {
    id: 2,
    slug: 'electronics',
    mainCategory: 'websites',
    subCategory: 'ecommerce',
    titleAr: 'متجر الإلكترونيات',
    titleEn: 'Electronics E-Commerce',
    shortDescAr: 'منصة متخصصة لبيع الأجهزة الإلكترونية مع مواصفات تقنية تفصيلية',
    shortDescEn: 'Specialized platform for selling electronics with detailed technical specifications',
    problemAr: 'صعوبة عرض المواصفات التقنية المعقدة ومقارنة المنتجات بشكل فعال، مما يؤثر على قرارات الشراء لدى العملاء.',
    problemEn: 'Difficulty displaying complex technical specifications and comparing products effectively, affecting customer purchase decisions.',
    solutionAr: 'نظام متقدم لعرض المواصفات التقنية مع إمكانية المقارنة وإدارة الضمان، يسهل على العملاء اتخاذ قرارات شراء مدروسة.',
    solutionEn: 'Advanced system for displaying technical specs with comparison and warranty management, helping customers make informed purchase decisions.',
    features: [
      { ar: 'تصنيفات متعددة ومتقدمة للمنتجات', en: 'Multiple advanced product categories', icon: '📱' },
      { ar: 'عرض مواصفات تقنية تفصيلية', en: 'Detailed technical specifications display', icon: '🔧' },
      { ar: 'نظام مقارنة المنتجات', en: 'Product comparison system', icon: '⚖️' },
      { ar: 'إدارة الضمان والصيانة', en: 'Warranty and maintenance management', icon: '🛠️' },
      { ar: 'متابعة دقيقة للطلبات', en: 'Accurate order tracking', icon: '📍' },
      { ar: 'تقارير أداء ومبيعات شاملة', en: 'Comprehensive performance and sales reports', icon: '📊' }
    ],
    targetAudienceAr: 'متاجر الإلكترونيات، الموزعين، الشركات التقنية',
    targetAudienceEn: 'Electronics stores, distributors, tech companies',
    systemType: ['Web', 'Dashboard'],
    demoUrl: 'demos/electronics/index.html',
    isLiveDemo: true,
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800',
      hero: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600',
        'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600'
      ]
    }
  },
  {
    id: 3,
    slug: 'cosmetics',
    mainCategory: 'websites',
    subCategory: 'ecommerce',
    titleAr: 'متجر مستحضرات التجميل',
    titleEn: 'Cosmetics E-Commerce',
    shortDescAr: 'منصة متكاملة لبيع مستحضرات التجميل مع تقييمات العملاء',
    shortDescEn: 'Complete platform for selling cosmetics with customer reviews',
    problemAr: 'صعوبة بناء الثقة مع العملاء وعرض المنتجات بشكل جذاب، خاصة في قطاع التجميل الذي يعتمد على التجربة الشخصية.',
    problemEn: 'Difficulty building customer trust and displaying products attractively, especially in the beauty sector that relies on personal experience.',
    solutionAr: 'منصة تفاعلية مع نظام تقييمات وعروض ذكية، تساعد العملاء على اتخاذ قرارات شراء مبنية على تجارب حقيقية.',
    solutionEn: 'Interactive platform with review system and smart offers, helping customers make purchase decisions based on real experiences.',
    features: [
      { ar: 'إدارة المنتجات والعلامات التجارية', en: 'Product and brand management', icon: '💄' },
      { ar: 'نظام تقييمات ومراجعات العملاء', en: 'Customer reviews and ratings system', icon: '⭐' },
      { ar: 'إدارة العروض والخصومات', en: 'Offers and discounts management', icon: '🎁' },
      { ar: 'نظام إدارة الطلبات المتقدم', en: 'Advanced order management system', icon: '📦' },
      { ar: 'تقارير سلوك العملاء', en: 'Customer behavior reports', icon: '📈' },
      { ar: 'توصيات منتجات ذكية', en: 'Smart product recommendations', icon: '🤖' }
    ],
    targetAudienceAr: 'متاجر التجميل، العلامات التجارية، الصالونات',
    targetAudienceEn: 'Beauty stores, brands, salons',
    systemType: ['Web', 'Mobile'],
    demoUrl: 'demos/cosmetics/index.html',
    isLiveDemo: true,
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
      hero: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600'
      ]
    }
  }
];


// Service Systems Projects
projectsData.push(
  {
    id: 4,
    slug: 'real-estate',
    mainCategory: 'websites',
    subCategory: 'service',
    titleAr: 'نظام إدارة العقارات',
    titleEn: 'Real Estate Management System',
    shortDescAr: 'نظام متكامل لإدارة العقارات والوحدات السكنية والتجارية',
    shortDescEn: 'Complete system for managing real estate and residential/commercial units',
    problemAr: 'تعقيد إدارة العقارات المتعددة ومتابعة العملاء والحجوزات، مما يؤدي لضياع الفرص وتأخر العمليات.',
    problemEn: 'Complexity of managing multiple properties and tracking clients and bookings, leading to lost opportunities and delayed operations.',
    solutionAr: 'نظام ذكي لإدارة العقارات مع متابعة شاملة للعمليات، يوفر رؤية واضحة لجميع الوحدات والعملاء.',
    solutionEn: 'Smart system for real estate management with comprehensive operations tracking, providing clear visibility of all units and clients.',
    features: [
      { ar: 'إدارة الوحدات والمشاريع العقارية', en: 'Units and real estate projects management', icon: '🏢' },
      { ar: 'عرض العقارات (بيع / إيجار)', en: 'Property display (sale/rent)', icon: '🏠' },
      { ar: 'إدارة قاعدة بيانات العملاء', en: 'Customer database management', icon: '👥' },
      { ar: 'متابعة الحجوزات والعقود', en: 'Bookings and contracts tracking', icon: '📝' },
      { ar: 'تقارير الأداء والمبيعات', en: 'Performance and sales reports', icon: '📊' },
      { ar: 'جولات افتراضية للعقارات', en: 'Virtual property tours', icon: '🎥' }
    ],
    targetAudienceAr: 'شركات التطوير العقاري، الوسطاء، المسوقين',
    targetAudienceEn: 'Real estate developers, brokers, marketers',
    systemType: ['Web', 'Dashboard', 'Mobile'],
    demoUrl: 'demos/real-estate/index.html',
    isLiveDemo: true,
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      hero: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600',
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600'
      ]
    }
  },
  {
    id: 5,
    slug: 'beauty-salon',
    mainCategory: 'websites',
    subCategory: 'service',
    titleAr: 'صالون الملوك للحلاقة الرجالية',
    titleEn: 'Kings Barber Shop Management System',
    shortDescAr: 'نظام ذكي لإدارة صالونات الحلاقة الرجالية والمواعيد',
    shortDescEn: 'Smart system for managing men\'s barber shops and appointments',
    problemAr: 'صعوبة تنظيم المواعيد وإدارة الحلاقين والخدمات، مما يؤدي لتضارب المواعيد وعدم رضا العملاء.',
    problemEn: 'Difficulty organizing appointments and managing barbers and services, leading to scheduling conflicts and customer dissatisfaction.',
    solutionAr: 'نظام متكامل لحجز المواعيد وإدارة العمليات اليومية، يضمن تجربة احترافية للعملاء والحلاقين.',
    solutionEn: 'Complete system for appointment booking and daily operations management, ensuring professional experience for customers and barbers.',
    features: [
      { ar: 'حجز المواعيد أونلاين', en: 'Online appointment booking', icon: '📅' },
      { ar: 'إدارة بيانات العملاء', en: 'Customer data management', icon: '👤' },
      { ar: 'إدارة الخدمات والأسعار', en: 'Services and pricing management', icon: '💰' },
      { ar: 'إدارة جداول الحلاقين', en: 'Barbers scheduling management', icon: '💈' },
      { ar: 'معرض أعمال الصالون', en: 'Salon portfolio gallery', icon: '📸' },
      { ar: 'تقارير الإيرادات التفصيلية', en: 'Detailed revenue reports', icon: '💵' }
    ],
    targetAudienceAr: 'صالونات الحلاقة الرجالية، مراكز العناية بالرجال',
    targetAudienceEn: 'Men\'s barber shops, men\'s grooming centers',
    systemType: ['Web', 'Dashboard', 'Mobile'],
    demoUrl: 'demos/beauty-salon/index.html',
    isLiveDemo: true,
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800',
      hero: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600',
        'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600'
      ]
    }
  },
  {
    id: 6,
    slug: 'import-export',
    mainCategory: 'websites',
    subCategory: 'service',
    titleAr: 'نظام إدارة الاستيراد والتصدير',
    titleEn: 'Import & Export Management System',
    shortDescAr: 'نظام شامل لإدارة عمليات الاستيراد والتصدير والشحنات',
    shortDescEn: 'Comprehensive system for managing import, export, and shipping operations',
    problemAr: 'تعقيد تتبع الشحنات والمستندات وإدارة الموردين، مما يؤدي لتأخيرات وخسائر مالية.',
    problemEn: 'Complexity of tracking shipments, documents, and supplier management, leading to delays and financial losses.',
    solutionAr: 'نظام متكامل لإدارة جميع عمليات الاستيراد والتصدير، يوفر تتبع لحظي وإدارة مستندات ذكية.',
    solutionEn: 'Complete system for managing all import and export operations, providing real-time tracking and smart document management.',
    features: [
      { ar: 'إدارة الشحنات الدولية', en: 'International shipment management', icon: '🚢' },
      { ar: 'متابعة المستندات الجمركية', en: 'Customs documents tracking', icon: '📄' },
      { ar: 'إدارة الموردين والعملاء', en: 'Suppliers and customers management', icon: '🤝' },
      { ar: 'حساب التكاليف التلقائي', en: 'Automatic cost calculation', icon: '💰' },
      { ar: 'تقارير العمليات الشاملة', en: 'Comprehensive operations reports', icon: '📊' },
      { ar: 'تتبع الشحنات لحظياً', en: 'Real-time shipment tracking', icon: '📍' }
    ],
    targetAudienceAr: 'شركات الاستيراد والتصدير، الشحن، التجارة الدولية',
    targetAudienceEn: 'Import/export companies, shipping, international trade',
    systemType: ['Web', 'Dashboard'],
    demoUrl: 'demos/import-export/index.html',
    isLiveDemo: true,
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800',
      hero: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600',
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600'
      ]
    }
  },
  {
    id: 7,
    slug: 'restaurant',
    mainCategory: 'websites',
    subCategory: 'service',
    titleAr: 'نظام إدارة المطاعم',
    titleEn: 'Restaurant Management System',
    shortDescAr: 'نظام متكامل لإدارة المطاعم والطلبات والمخزون',
    shortDescEn: 'Complete system for managing restaurants, orders, and inventory',
    problemAr: 'صعوبة تنظيم الطلبات وإدارة الطاولات والمخزون بكفاءة، مما يؤثر على جودة الخدمة ورضا العملاء.',
    problemEn: 'Difficulty organizing orders, managing tables and inventory efficiently, affecting service quality and customer satisfaction.',
    solutionAr: 'نظام ذكي لإدارة جميع عمليات المطعم، من الطلبات للمخزون للتقارير، في منصة واحدة متكاملة.',
    solutionEn: 'Smart system for managing all restaurant operations, from orders to inventory to reports, in one integrated platform.',
    features: [
      { ar: 'إدارة المنيو الرقمي', en: 'Digital menu management', icon: '📋' },
      { ar: 'نظام الطلبات (داخلي / أونلاين)', en: 'Order system (dine-in/online)', icon: '🍽️' },
      { ar: 'إدارة المخزون الذكية', en: 'Smart inventory management', icon: '📦' },
      { ar: 'إدارة الطاولات والحجوزات', en: 'Tables and reservations management', icon: '🪑' },
      { ar: 'تقارير المبيعات اليومية', en: 'Daily sales reports', icon: '📈' },
      { ar: 'تكامل مع خدمات التوصيل', en: 'Delivery services integration', icon: '🛵' }
    ],
    targetAudienceAr: 'المطاعم، المقاهي، خدمات الطعام',
    targetAudienceEn: 'Restaurants, cafes, food services',
    systemType: ['Web', 'Dashboard', 'Mobile'],
    demoUrl: 'demos/restaurant/index.html',
    isLiveDemo: true,
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      hero: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600'
      ]
    }
  }
);
