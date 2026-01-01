# Design Document

## Overview

Portfolio website لشركة Hive Tech AI مبني بـ HTML, CSS, JavaScript خالص. التصميم يركز على تجربة مستخدم احترافية مع animations وtransitions سلسة. الموقع يتكون من صفحة رئيسية تعرض جميع المشاريع و8 صفحات تفصيلية لكل مشروع.

## Architecture

### Structure
```
portfolio/
├── index.html              # الصفحة الرئيسية
├── projects/
│   ├── fashion.html        # صفحة تفاصيل Fashion E-Commerce
│   ├── electronics.html    # صفحة تفاصيل Electronics E-Commerce
│   ├── cosmetics.html      # صفحة تفاصيل Cosmetics E-Commerce
│   ├── real-estate.html    # صفحة تفاصيل Real Estate System
│   ├── beauty-salon.html   # صفحة تفاصيل Beauty Salon System
│   ├── import-export.html  # صفحة تفاصيل Import/Export System
│   ├── restaurant.html     # صفحة تفاصيل Restaurant System
│   └── cars-maintenance.html # صفحة تفاصيل Cars Maintenance System
├── css/
│   ├── main.css           # الأنماط الرئيسية
│   ├── animations.css     # تأثيرات الحركة
│   └── responsive.css     # التصميم المتجاوب
├── js/
│   ├── main.js           # الوظائف الرئيسية
│   ├── language.js       # نظام اللغات
│   ├── animations.js     # تأثيرات الحركة
│   └── projects-data.js  # بيانات المشاريع
├── assets/
│   ├── images/
│   │   ├── logo.png      # شعار الشركة
│   │   └── projects/     # صور المشاريع
│   └── icons/            # الأيقونات
└── data/
    └── translations.json  # ملف الترجمات
```

## Components and Interfaces

### 1. Header Component
```javascript
// Header ثابت في أعلى الصفحة
Header {
  - Logo (clickable → home)
  - Navigation Menu (Home, Projects, About, Contact)
  - Language Switcher (AR/EN)
  - Scroll Effect (transparent → solid background)
}
```

### 2. Hero Section
```javascript
HeroSection {
  - Main Title (animated)
  - Subtitle/Description
  - CTA Button (scroll to projects)
  - Background with Parallax Effect
  - Animated Particles/Shapes
}
```

### 3. Projects Grid
```javascript
ProjectsGrid {
  - Filter Buttons (All, E-Commerce, Service Systems)
  - Project Cards (8 cards)
  - Grid Layout (responsive: 3 cols → 2 cols → 1 col)
  - Animations on scroll
}
```

### 4. Project Card
```javascript
ProjectCard {
  - Project Image (placeholder)
  - Project Title
  - Project Category Badge
  - Short Description
  - "View Details" Button
  - Hover Effects (scale, shadow, overlay)
  - Click → Navigate to detail page
}
```

### 5. Project Detail Page
```javascript
ProjectDetailPage {
  - Hero Section with Project Image
  - Project Title & Category
  - Problem Section
  - Solution Section
  - Features List (with icons)
  - Target Audience
  - System Type (Web/Dashboard/Mobile)
  - Technologies Used (optional)
  - Gallery (multiple images)
  - Back to Portfolio Button
  - Next/Previous Project Navigation
}
```

### 6. Footer Component
```javascript
Footer {
  - Company Info
  - Quick Links
  - Social Media Icons
  - Contact Information
  - Copyright Notice
}
```

### 7. Language System
```javascript
LanguageManager {
  - loadTranslations()
  - switchLanguage(lang)
  - updateDOM()
  - savePreference()
  - handleRTL()
}
```

## Data Models

### Project Model
```javascript
Project {
  id: string,
  category: "ecommerce" | "service",
  titleAr: string,
  titleEn: string,
  shortDescAr: string,
  shortDescEn: string,
  problemAr: string,
  problemEn: string,
  solutionAr: string,
  solutionEn: string,
  features: [
    { ar: string, en: string, icon: string }
  ],
  targetAudienceAr: string,
  targetAudienceEn: string,
  systemType: string[],  // ["Web", "Dashboard", "Mobile"]
  images: {
    thumbnail: string,
    hero: string,
    gallery: string[]
  },
  technologies: string[],  // optional
  slug: string  // for URL
}
```

### Translation Model
```javascript
Translations {
  ar: {
    header: { ... },
    hero: { ... },
    projects: { ... },
    footer: { ... }
  },
  en: {
    header: { ... },
    hero: { ... },
    projects: { ... },
    footer: { ... }
  }
}
```

## Design System

### Color Palette
استخراج من الهوية البصرية (file.jpg, Group-2.png):
```css
:root {
  /* Primary Colors - من اللوجو */
  --primary-color: #1a73e8;      /* أزرق رئيسي */
  --primary-dark: #0d47a1;       /* أزرق داكن */
  --primary-light: #4dabf7;      /* أزرق فاتح */
  
  /* Secondary Colors */
  --secondary-color: #7c3aed;    /* بنفسجي للـ AI */
  --accent-color: #f59e0b;       /* برتقالي للتمييز */
  
  /* Neutral Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-dark: #1a1a2e;
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --text-light: #ffffff;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  --gradient-overlay: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7));
}
```

### Typography
```css
/* Fonts */
--font-primary: 'Cairo', 'Segoe UI', sans-serif;  /* للعربي */
--font-secondary: 'Inter', 'Roboto', sans-serif;  /* للإنجليزي */

/* Sizes */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
--text-4xl: 2.25rem;
--text-5xl: 3rem;
```

### Spacing
```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
--spacing-2xl: 4rem;
```

### Animations & Transitions
```css
/* Durations */
--transition-fast: 0.2s;
--transition-normal: 0.3s;
--transition-slow: 0.5s;

/* Easings */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

## Animations Strategy

### 1. Page Load Animations
```javascript
// Hero Section
- Title: fade in + slide up (delay: 0.2s)
- Subtitle: fade in + slide up (delay: 0.4s)
- CTA: fade in + scale (delay: 0.6s)
- Background: parallax effect on scroll
```

### 2. Scroll Animations
```javascript
// Intersection Observer API
- Projects Cards: fade in + slide up (stagger: 0.1s each)
- Section Titles: fade in + slide from left
- Features: fade in + slide from right
```

### 3. Hover Effects
```javascript
// Project Cards
- Scale: 1 → 1.05
- Shadow: small → large
- Image: scale 1 → 1.1 (zoom effect)
- Overlay: opacity 0 → 0.9
- Button: slide in from bottom
```

### 4. Page Transitions
```javascript
// Navigation between pages
- Fade out current page (0.3s)
- Load new page
- Fade in new page (0.3s)
```

### 5. Filter Animations
```javascript
// When filtering projects
- Hide non-matching: scale 0.8 + fade out (0.2s)
- Show matching: scale 1 + fade in (0.3s)
- Re-arrange grid: smooth position transition
```

## Responsive Design

### Breakpoints
```css
--mobile: 320px - 767px
--tablet: 768px - 1023px
--desktop: 1024px - 1439px
--large: 1440px+
```

### Grid System
```css
/* Desktop: 3 columns */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* Tablet: 2 columns */
@media (max-width: 1023px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile: 1 column */
@media (max-width: 767px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Language Consistency
*For any* page in the portfolio, when the user switches language, all text elements should update to the selected language and the layout direction should match (RTL for Arabic, LTR for English).
**Validates: Requirements 3.2, 3.3**

### Property 2: Navigation Integrity
*For any* project card clicked, the system should navigate to the correct project detail page matching the project's slug.
**Validates: Requirements 2.1**

### Property 3: Filter Correctness
*For any* filter selection, only projects matching the selected category should be visible in the grid.
**Validates: Requirements 9.3**

### Property 4: Responsive Layout
*For any* viewport size, all content should remain readable and accessible without horizontal scrolling.
**Validates: Requirements 6.4**

### Property 5: Animation Completion
*For any* scroll-triggered animation, the element should complete its animation before becoming interactive.
**Validates: Requirements 6.2**

### Property 6: Project Data Completeness
*For any* project displayed, all required fields (title, description, problem, solution, features) should be present in both languages.
**Validates: Requirements 8.3**

### Property 7: Color Contrast
*For any* text element, the contrast ratio between text and background should meet WCAG AA standards (minimum 4.5:1).
**Validates: Requirements 7.3**

### Property 8: Local Storage Persistence
*For any* language selection, the preference should persist across page reloads and navigation.
**Validates: Requirements 3.4**

## Error Handling

### 1. Missing Translations
```javascript
// Fallback to English if Arabic translation missing
function getTranslation(key, lang) {
  return translations[lang][key] || translations['en'][key] || key;
}
```

### 2. Missing Images
```javascript
// Use placeholder if image fails to load
img.onerror = function() {
  this.src = 'assets/images/placeholder.jpg';
};
```

### 3. Invalid Project Slug
```javascript
// Redirect to 404 or home if project not found
if (!projectExists(slug)) {
  window.location.href = '/index.html';
}
```

### 4. Browser Compatibility
```javascript
// Check for Intersection Observer support
if ('IntersectionObserver' in window) {
  // Use Intersection Observer
} else {
  // Fallback: show all elements immediately
}
```

## Testing Strategy

### Unit Tests
- Test language switching functionality
- Test filter logic
- Test project data retrieval
- Test URL slug generation
- Test responsive breakpoint calculations

### Property-Based Tests
- Test that all projects have complete data in both languages
- Test that filter always shows correct subset
- Test that navigation always leads to valid pages
- Test that animations don't break layout
- Test that color contrast meets standards

### Integration Tests
- Test full user journey: home → filter → project detail → back
- Test language switch across multiple pages
- Test responsive behavior at all breakpoints
- Test all animations complete without errors

### Manual Testing
- Visual regression testing
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile device testing (iOS, Android)
- Performance testing (Lighthouse scores)
- Accessibility testing (screen readers, keyboard navigation)

## Performance Optimization

### 1. Image Optimization
- Use WebP format with JPEG fallback
- Lazy load images below the fold
- Use responsive images (srcset)
- Compress images (max 200KB per image)

### 2. CSS Optimization
- Minify CSS files
- Use CSS Grid/Flexbox (no heavy frameworks)
- Critical CSS inline in `<head>`
- Non-critical CSS loaded async

### 3. JavaScript Optimization
- Minify JS files
- Defer non-critical scripts
- Use event delegation
- Debounce scroll events

### 4. Loading Strategy
```javascript
// Priority loading order
1. Critical CSS + HTML structure
2. Logo + Header
3. Hero section content
4. Above-the-fold project cards
5. Below-the-fold content (lazy)
6. Animations + interactions
```

## Accessibility

### ARIA Labels
```html
<button aria-label="Switch to English">EN</button>
<nav aria-label="Main navigation">...</nav>
<img alt="Fashion E-Commerce Project Screenshot">
```

### Keyboard Navigation
- All interactive elements focusable
- Visible focus indicators
- Logical tab order
- Skip to main content link

### Screen Reader Support
- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- ARIA live regions for dynamic content

## Browser Support

### Target Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

### Fallbacks
- CSS Grid → Flexbox
- CSS Variables → Sass variables
- Intersection Observer → Immediate display
- WebP → JPEG/PNG
